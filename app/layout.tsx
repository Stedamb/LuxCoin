import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LuxCoin | Premium Numismatics",
  description: "La destinazione definitiva per i collezionisti di numismatica antica. Autenticità, storia e valore eterno.",
  icons: {
    icon: "/logos/logo-compact.svg",
  },
};

import { Footer } from "@/components/layout/Footer";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          strategy="afterInteractive"
          data-cbid="9009693e-5045-4c2e-aeb1-2d992d9942ca"
          data-blockingmode="auto"
        />
      </head>
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
