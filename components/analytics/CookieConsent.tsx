"use client";

import Script from "next/script";

export function CookieConsent() {
  return (
    <>
      {/* Cookiebot: strategy="beforeInteractive" is usually preferred for the consent banner, 
          but in App Router, afterInteractive is often safer for third-party scripts 
          unless they are critical to initial render. */}
      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="9009693e-5045-4c2e-aeb1-2d992d9942ca"
        data-blockingmode="auto"
        strategy="lazyOnload"
      />
    </>
  );
}
