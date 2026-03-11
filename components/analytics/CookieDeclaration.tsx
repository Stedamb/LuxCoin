"use client";

import { useEffect, useRef } from "react";

export function CookieDeclaration() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Manual injection to preserve position within the layout
    const script = document.createElement("script");
    script.src =
      "https://consent.cookiebot.com/9009693e-5045-4c2e-aeb1-2d992d9942ca/cd.js";
    script.id = "CookieDeclaration";
    script.async = true;
    script.type = "text/javascript";

    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div
      ref={containerRef}
      className="mt-12 w-full overflow-x-auto rounded-xl border border-white/5 bg-black/5 p-4 
        [&_table]:w-full! [&_table]:table-auto! [&_table]:text-sm! 
        [&_td]:p-2! [&_td]:align-top! [&_td]:border-b! [&_td]:border-white/5!
        [&_th]:text-left! [&_th]:p-2! [&_th]:font-bold!
        [&_a]:text-primary [&_a]:hover:underline"
    />
  );
}
