import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { CookieConsent } from "@/components/analytics/CookieConsent";
import { Footer } from "@/components/layout/Footer";

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
  description:
    "La destinazione definitiva per i collezionisti di numismatica antica. Autenticità, storia e valore eterno.",
  icons: {
    icon: "/logos/logo-compact.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased bg-background text-foreground font-sans`}
      >
        <CookieConsent />
        <GoogleTagManager gtmId="GTM-TLHVQJ5C" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
