import { Navbar } from "@/components/layout/Navbar"
import { ShieldCheck } from "lucide-react"
import type { Metadata } from "next"
import { client } from "@/sanity/lib/client"
import { siteSettingsQuery } from "@/sanity/lib/queries"
import { SiteSettings } from "@/sanity/lib/types"
import { PortableTextRenderer } from "@/components/sanity/PortableTextRenderer"

export const metadata: Metadata = {
  title: "Privacy Policy | LuxCoin",
  description: "Informativa sulla privacy di LuxCoin. Scopri come proteggiamo i tuoi dati personali.",
}

export const revalidate = 60 // Revalidate every 60 seconds

export default async function PrivacyPage() {
  const settings = await client.fetch<SiteSettings>(siteSettingsQuery)

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 pb-20">
      <Navbar />

      <section className="pt-32 pb-12 container mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-6">
            <ShieldCheck className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            La tua privacy è importante per noi. Questa informativa spiega come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali.
        </p>
      </section>

      <section className="container mx-auto px-4 max-w-4xl">
        <div className="bg-card border border-white/5 rounded-2xl p-8 md:p-12 shadow-lg space-y-8 text-muted-foreground leading-relaxed">
            {settings?.privacyPolicy ? (
                <div className="prose prose-invert max-w-none">
                    <PortableTextRenderer value={settings.privacyPolicy} />
                </div>
            ) : (
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-serif font-bold text-foreground">1. Titolare del Trattamento</h2>
                        <p>
                            LuxCoin, con sede in Roma, è il titolare del trattamento dei dati personali raccolti attraverso questo sito web. Per qualsiasi domanda riguardo alla presente informativa, puoi contattarci all'indirizzo email dedicato alla privacy.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-serif font-bold text-foreground">2. Dati Raccolti</h2>
                        <p>
                            Raccogliamo diverse tipologie di dati per fornirti i nostri servizi:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Dati identificativi (nome, cognome, indirizzo email) forniti durante l'iscrizione o il contatto.</li>
                            <li>Dati di navigazione (indirizzo IP, tipo di browser, pagine visitate) raccolti automaticamente.</li>
                            <li>Dati relativi agli acquisti (indirizzo di spedizione, cronologia ordini).</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-serif font-bold text-foreground">3. Finalità del Trattamento</h2>
                        <p>
                            I tuoi dati vengono utilizzati per:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Gestire i tuoi ordini e fornire assistenza clienti.</li>
                            <li>Inviarti comunicazioni commerciali, previo tuo esplicito consenso.</li>
                            <li>Migliorare l'esperienza di navigazione sul nostro sito.</li>
                            <li>Adempiere ad obblighi di legge e fiscali.</li>
                        </ul>
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
