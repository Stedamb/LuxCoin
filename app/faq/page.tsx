import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Navbar } from "@/components/layout/Navbar"
import { HelpCircle } from "lucide-react"
import { client } from "@/sanity/lib/client"
import { faqsQuery } from "@/sanity/lib/queries"
import { FAQ } from "@/sanity/lib/types"
import { PortableTextRenderer } from "@/components/sanity/PortableTextRenderer"

export const revalidate = 60 // Revalidate every 60 seconds

export default async function FAQPage() {
    const faqs = await client.fetch<FAQ[]>(faqsQuery)

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
                    {faqs.length > 0 ? (
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((item, index) => (
                                <AccordionItem key={item._id} value={item._id} className="border-white/5 last:border-0 px-2">
                                    <AccordionTrigger className="text-left text-lg font-serif hover:no-underline hover:text-primary transition-colors py-6">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                                        <PortableTextRenderer value={item.answer} />
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground italic">Nessuna FAQ disponibile al momento.</p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    )
}
