"use client";

import Script from "next/script";
import { useCallback, useState } from "react";

type JQueryFn = (selector: string) => {
  fadeOut: (speed: string, cb?: () => void) => { delay: (ms: number) => { fadeOut: (speed: string) => void } };
  removeClass: (cls: string) => { addClass: (cls: string) => void };
  parallax?: (options?: object) => void;
};

function getJQuery(): JQueryFn | undefined {
  return (window as unknown as { jQuery?: JQueryFn }).jQuery;
}

/**
 * Loads the template's jQuery stack in strict order:
 * jQuery -> plugins (includes Parallax auto-init) -> main.js
 *
 * Hero background depends on Parallax.js reading data-image-src on #home.
 * Scripts must not run in parallel — plugins.js requires jQuery first.
 */
export default function Scripts() {
  const [jqueryReady, setJqueryReady] = useState(false);
  const [pluginsReady, setPluginsReady] = useState(false);

  const finishInit = useCallback(() => {
    const jq = getJQuery();
    if (!jq) return;

    // Re-init parallax in case plugins.js loaded after document.ready fired.
    jq('[data-parallax="scroll"]').parallax?.();

    if (document.readyState === "complete") {
      jq("#loader").fadeOut("slow", () => {
        jq("#preloader").fadeOut("slow");
      });
      jq("html").removeClass("cl-preload").addClass("cl-loaded");
    }
  }, []);

  return (
    <>
      <Script
        src="/js/modernizr.js"
        strategy="afterInteractive"
      />
      <Script
        src="/js/pace.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/js/jquery-3.2.1.min.js"
        strategy="afterInteractive"
        onLoad={() => setJqueryReady(true)}
      />
      {jqueryReady && (
        <Script
          src="/js/plugins.js"
          strategy="afterInteractive"
          onLoad={() => setPluginsReady(true)}
        />
      )}
      {pluginsReady && (
        <Script
          src="/js/main.js"
          strategy="afterInteractive"
          onLoad={finishInit}
        />
      )}
    </>
  );
}
