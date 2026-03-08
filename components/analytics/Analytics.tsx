"use client";

import Script from "next/script";

export function Analytics() {
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
        strategy="afterInteractive"
      />

      {/* GTM Script: Manual blocking via Cookiebot attributes */}
      <Script
        id="gtm-script"
        type="text/plain"
        data-cookieconsent="statistics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TLHVQJ5C');`,
        }}
      />
    </>
  );
}

export function GTMNoscript() {
  return (
    <noscript
      data-cookieconsent="statistics"
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TLHVQJ5C"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    />
  );
}
