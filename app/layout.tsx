import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
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
  description:
    "La destinazione definitiva per i collezionisti di numismatica antica. Autenticità, storia e valore eterno.",
  icons: {
    icon: "/logos/logo-compact.svg",
  },
};

import { Analytics, GTMNoscript } from "@/components/analytics/Analytics";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <Analytics />
      </head>
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased bg-background text-foreground font-sans`}
      >
        <GTMNoscript />
        {children}
        <Footer />
      </body>
    </html>
  );
}
