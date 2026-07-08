import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glint",
  description: "Glint - a modern and stylish digital agency template.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="no-js" lang="en">
      <head>
        <link rel="stylesheet" href="/css/base.css" />
        <link rel="stylesheet" href="/css/vendor.css" />
        <link rel="stylesheet" href="/css/main.css" />

        {/*
          modernizr + pace are loaded after hydration (see Scripts.tsx).
          Loading them beforeInteractive injects DOM nodes / mutates <html>,
          which causes "Hydration failed" because the server HTML no longer
          matches what React sees on the client.
        */}
      </head>
      <body id="top" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
