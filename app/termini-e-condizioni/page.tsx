import { Navbar } from "@/components/layout/Navbar"
import { ScrollText } from "lucide-react"
import type { Metadata } from "next"
import { client } from "@/sanity/lib/client"
import { siteSettingsQuery } from "@/sanity/lib/queries"
import { SiteSettings } from "@/sanity/lib/types"
import { PortableTextRenderer } from "@/components/sanity/PortableTextRenderer"

export const metadata: Metadata = {
  title: "Termini e Condizioni | LuxCoin",
  description: "I termini e le condizioni di servizio di LuxCoin. Informazioni su vendite, garanzie e diritto di recesso.",
}

export const revalidate = 60 // Revalidate every 60 seconds

export default async function TermsPage() {
  const settings = await client.fetch<SiteSettings>(siteSettingsQuery)

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 pb-20">
      <Navbar />

      <section className="pt-32 pb-12 container mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-6">
            <ScrollText className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Termini e Condizioni</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Si prega di leggere attentamente i seguenti termini prima di utilizzare i nostri servizi.
        </p>
      </section>

      <section className="container mx-auto px-4 max-w-4xl">
        <div className="bg-card border border-white/5 rounded-2xl p-8 md:p-12 shadow-lg space-y-8 text-muted-foreground leading-relaxed">
            {settings?.termsAndConditions ? (
                <div className="prose prose-invert max-w-none">
                    <PortableTextRenderer value={settings.termsAndConditions} />
                </div>
            ) : (
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-serif font-bold text-foreground">1. Introduzione</h2>
                        <p>
                            Benvenuti su LuxCoin. L'accesso e l'utilizzo di questo sito web, così come l'acquisto di prodotti da LuxCoin, sono regolati dai presenti Termini e Condizioni. Accedendo al sito, l'utente accetta di essere vincolato da questi termini.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-serif font-bold text-foreground">2. Autenticità e Garanzie</h2>
                        <p>
                            Tutti gli articoli venduti da LuxCoin sono garantiti autentici senza limiti di tempo. Ogni moneta è accompagnata da un certificato di autenticità fotografico e descrittivo. 
                        </p>
                    </div>

                    <p className="italic text-sm">Contenuto gestibile tramite il Pannello di Controllo (Sanity Studio).</p>
                </div>
            )}
            
             <div className="pt-8 border-t border-white/10 text-sm">
                <p>Ultimo aggiornamento: 14 Febbraio 2026</p>
            </div>
        </div>
      </section>
    </main>
  )
}
