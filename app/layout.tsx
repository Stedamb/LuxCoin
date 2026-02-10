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
  description: "Exclusive collection of rare ancient coins.",
};

import { Footer } from "@/components/layout/Footer";

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
        {children}
        <Footer />
      </body>
    </html>
  );
}
