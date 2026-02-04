"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Navbar } from "@/components/layout/Navbar"
import { HelpCircle } from "lucide-react"

const faqData = [
    {
        question: "Come viene garantita l'autenticità delle monete?",
        answer: "Ogni moneta in vendita su LuxCoin è sottoposta a un rigoroso processo di verifica da parte dei nostri numismatici esperti. Rilasciamo un certificato di autenticità a vita che ne garantisce la provenienza e la genuinità."
    },
    {
        question: "Quali metodi di pagamento accettate?",
        answer: "Accettiamo bonifici bancari, le principali carte di credito (Visa, MasterCard, Amex) e pagamenti tramite PayPal. Per acquisti di importo elevato, offriamo soluzioni personalizzate tramite bonifico bancario sicuro."
    },
    {
        question: "Effettuate spedizioni internazionali?",
        answer: "Assolutamente sì. Spediamo in tutto il mondo tramite corrieri assicurati e specializzati nel trasporto di valori. I tempi di consegna variano in base alla destinazione, ma garantiamo la massima tracciabilità."
    },
    {
         question: "Posso restituire una moneta se non sono soddisfatto?",
         answer: "Sì, offriamo una garanzia di soddisfazione 'soddisfatti o rimborsati' di 14 giorni. Se la moneta non soddisfa le tue aspettative, puoi restituirla nelle stesse condizioni in cui è stata ricevuta per un rimborso completo."
    },
    {
        question: "Offrite servizi di stima per monete in mio possesso?",
        answer: "Certamente. Il nostro team offre servizi di valutazione e stima per collezioni private. Contattaci tramite l'apposita sezione per fissare un appuntamento o inviare foto per una valutazione preliminare."
    },
    {
        question: "Come conservare al meglio le monete antiche?",
        answer: "Consigliamo di conservare le monete in ambienti a temperatura e umidità controllate, evitando il contatto diretto con le mani (usa guanti di cotone) e utilizzando capsule o vassoi in velluto specifici per numismatica, privi di PVC."
    }
]

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 pb-20">
            <Navbar />
            
            <section className="pt-32 pb-16 container mx-auto px-4 text-center">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-6">
                    <HelpCircle className="w-8 h-8" />
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Domande Frequenti</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Trova risposte immediate alle domande più comuni sulla nostra collezione, spedizioni e garanzie.
                </p>
            </section>

            <section className="container mx-auto px-4 max-w-3xl">
                <div className="bg-card border border-white/5 rounded-2xl p-6 md:p-10 shadow-lg">
                    <Accordion type="single" collapsible className="w-full">
                        {faqData.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-white/5 last:border-0 px-2">
                                <AccordionTrigger className="text-left text-lg font-serif hover:no-underline hover:text-primary transition-colors py-6">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </main>
    )
}
