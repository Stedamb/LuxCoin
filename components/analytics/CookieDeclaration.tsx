"use client";

import Script from "next/script";

export function CookieDeclaration() {
  return (
    <Script
      id="CookieDeclaration"
      src="https://consent.cookiebot.com/9009693e-5045-4c2e-aeb1-2d992d9942ca/cd.js"
      type="text/javascript"
      async
    />
  );
}
