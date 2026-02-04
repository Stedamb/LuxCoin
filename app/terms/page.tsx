"use client"

import { Navbar } from "@/components/layout/Navbar"
import { ScrollText } from "lucide-react"

export default function TermsPage() {
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
            
            <div className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-foreground">1. Introduzione</h2>
                <p>
                    Benvenuti su LuxCoin. L'accesso e l'utilizzo di questo sito web, così come l'acquisto di prodotti da LuxCoin, sono regolati dai presenti Termini e Condizioni. Accedendo al sito, l'utente accetta di essere vincolato da questi termini.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-foreground">2. Autenticità e Garanzie</h2>
                <p>
                    Tutti gli articoli venduti da LuxCoin sono garantiti autentici senza limiti di tempo. Ogni moneta è accompagnata da un certificato di autenticità fotografico e descrittivo. Qualora un'autorità riconosciuta internazionalmente dovesse mettere in discussione l'autenticità di un articolo, LuxCoin si impegna a rimborsare l'intero importo pagato.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-foreground">3. Condizioni di Vendita</h2>
                <p>
                    I prezzi indicati sul sito sono espressi in Euro e includono l'IVA applicabile secondo il regime del margine, ove previsto. LuxCoin si riserva il diritto di modificare i prezzi in qualsiasi momento senza preavviso, fermo restando che il prezzo addebitato all'utente sarà quello indicato sul sito al momento dell'invio dell'ordine.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-foreground">4. Pagamenti</h2>
                <p>
                    Accettiamo pagamenti tramite bonifico bancario, carta di credito (Visa, MasterCard, American Express) e PayPal. Il pagamento deve essere effettuato integralmente prima della spedizione della merce. La proprietà dei beni passa all'acquirente solo al momento del pagamento completo.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-foreground">5. Spedizioni e Assicurazione</h2>
                <p>
                    Tutte le spedizioni sono interamente assicurate da LuxCoin fino alla consegna al destinatario. È responsabilità del cliente fornire un indirizzo di consegna corretto e sicuro. In caso di danni visibili al pacco al momento della consegna, il cliente è tenuto ad accettare con riserva o rifiutare il pacco e contattarci immediatamente.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-foreground">6. Diritto di Recesso</h2>
                <p>
                    Il cliente ha diritto di recedere dal contratto entro 14 giorni dal ricevimento della merce, senza dover fornire alcuna motivazione. Gli articoli devono essere restituiti nelle stesse condizioni in cui sono stati ricevuti, inclusi tutti i certificati e gli imballaggi originali.
                </p>
            </div>

             <div className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-foreground">7. Legge Applicabile</h2>
                <p>
                    I presenti Termini e Condizioni sono regolati dalla legge italiana. Per qualsiasi controversia derivante dall'interpretazione o esecuzione dei presenti termini sarà competente in via esclusiva il Foro di Roma.
                </p>
            </div>

             <div className="pt-8 border-t border-white/10 text-sm">
                <p>Ultimo aggiornamento: 04 Febbraio 2026</p>
            </div>

        </div>
      </section>
    </main>
  )
}
