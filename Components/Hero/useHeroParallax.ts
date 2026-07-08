"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    jQuery?: JQueryStatic;
  }

  interface JQueryStatic {
    (selector: string): JQuery;
  }

  interface JQuery {
    length: number;
    data: (key: string) => unknown;
    parallax?: (options?: object | string) => JQuery;
  }
}

export function useHeroParallax(selector = '[data-parallax="scroll"]') {
  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const initParallax = () => {
      const jq = window.jQuery;
      if (!jq) return false;

      const $home = jq(selector);
      if (!$home.length || !$home.parallax) return false;

      if (!$home.data("px.parallax")) {
        $home.parallax({
          speed: 0.35,
          bleed: 80,
        });
      } else {
        $home.parallax("render");
      }

      document.documentElement.classList.add("parallax-ready");
      return true;
    };

    const onResize = () => {
      const jq = window.jQuery;
      if (!jq) return;
      const $home = jq(selector);
      if ($home.parallax) {
        $home.parallax("refresh");
      }
    };

    if (!initParallax()) {
      intervalId = setInterval(() => {
        if (initParallax() && intervalId) {
          clearInterval(intervalId);
        }
      }, 150);

      timeoutId = setTimeout(() => {
        if (intervalId) clearInterval(intervalId);
      }, 12000);
    }

    window.addEventListener("resize", onResize);

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener("resize", onResize);

      const jq = window.jQuery;
      if (jq) {
        const $home = jq(selector);
        if ($home.parallax) {
          $home.parallax("destroy");
        }
      }

      document.documentElement.classList.remove("parallax-ready");
    };
  }, [selector]);
}
