import { ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { PortableTextRenderer } from "@/components/sanity/PortableTextRenderer";
import { client } from "@/sanity/lib/client";
import { siteSettingsQuery } from "@/sanity/lib/queries";
import { SiteSettings } from "@/sanity/lib/types";

export const metadata: Metadata = {
  title: "Privacy Policy | LuxCoin",
  description:
    "Informativa sulla privacy di LuxCoin. Scopri come proteggiamo i tuoi dati personali.",
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function PrivacyPage() {
  const settings = await client.fetch<SiteSettings>(siteSettingsQuery);

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 pb-20">
      <Navbar />

      <section className="pt-32 pb-12 container mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-6">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          La tua privacy è importante per noi. Questa informativa spiega come
          raccogliamo, utilizziamo e proteggiamo i tuoi dati personali.
        </p>
      </section>

      <section className="container mx-auto px-4 max-w-4xl">
        <div className="bg-card border border-white/5 rounded-2xl p-8 md:p-12 shadow-lg space-y-8 text-muted-foreground leading-relaxed">
          {settings?.privacyPolicy && (
            <div className="prose prose-invert max-w-none">
              <PortableTextRenderer value={settings.privacyPolicy} />
            </div>
          )}
          <CookieDeclaration />
        </div>
      </section>
    </main>
  );
}
