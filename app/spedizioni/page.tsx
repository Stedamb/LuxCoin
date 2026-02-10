"use client"

import { Navbar } from "@/components/layout/Navbar"
import { Truck, Plane, UserCheck, Shield, Lock, ArrowRight } from "lucide-react"

const shippingOptions = [
    {
        icon: Truck,
        title: "Spedizione Assicurata Standard",
        description: "Consegna sicura tramite corriere tracciato. Ideale per ordini fino a €5.000 (ass. inclusa).",
        time: "3-5 Giorni Lavorativi",
        price: "Gratuita",
        features: ["Tracciamento completo", "Assicurazione inclusa", "Firma alla consegna"],
        recommended: false
    },
    {
        icon: Plane,
        title: "Corriere Espresso Priority",
        description: "Spedizione aerea rapida per chi non vuole attendere. Copertura globale.",
        time: "24-48 Ore",
        price: "€ 45,00",
        features: ["Consegna prioritaria", "Gestione doganale rapida", "Aggiornamenti SMS"],
        recommended: true
    },
    {
        icon: Shield,
        title: "Trasporto Valori Blindato",
        description: "Massima sicurezza per pezzi di altissimo pregio. Gestito da Ferrari Group o Battistolli.",
        time: "Su Richiesta",
        price: "da € 250,00",
        features: ["Veicolo blindato", "Guardie giurate", "Assicurazione All-Risk illimitata"],
        recommended: false
    },
    {
        icon: UserCheck,
        title: "Consegna a Mano 'White Glove'",
        description: "Un nostro delegato consegnerà personalmente la moneta nelle tue mani, ovunque tu sia.",
        time: "Su Appuntamento",
        price: "Preventivo Personalizzato",
        features: ["Discrezione assoluta", "Consegna personale", "Nessun intermediario"],
        recommended: false
    },
    {
        icon: Lock,
        title: "Deposito in Caveau (No Spedizione)",
        description: "Lascia la tua moneta al sicuro nei nostri caveau di massima sicurezza a Zurigo o Roma.",
        time: "Immediato",
        price: "€ 150,00 / anno",
        features: ["Sicurezza bancaria", "Audit annuale", "Possibilità di ritiro o rivendita"],
        recommended: false
    }
]

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 pb-20">
      <Navbar />

      <section className="pt-32 pb-12 container mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-6">
            <Truck className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Spedizioni e Consegna</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            La sicurezza del tuo investimento è la nostra priorità. Scegli il metodo di consegna più adatto alle tue esigenze.
        </p>
      </section>

      <section className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shippingOptions.map((option, index) => (
                <div 
                    key={index} 
                    className={`relative bg-card border rounded-2xl p-6 shadow-lg flex flex-col hover:shadow-primary/5 transition-all duration-300 group
                        ${option.recommended ? "border-primary/50 bg-primary/5" : "border-white/5"}
                    `}
                >
                    {option.recommended && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-black text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                            Consigliata
                        </div>
                    )}

                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 
                        ${option.recommended ? "bg-primary text-black shadow-lg shadow-primary/20" : "bg-white/5 text-primary icon-glow"}`}
                    >
                        <option.icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-serif font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{option.title}</h3>
                    <p className="text-muted-foreground text-sm mb-6 flex-grow">
                        {option.description}
                    </p>

                    <div className="space-y-4 mb-6">
                         <div className="flex justify-between text-sm py-2 border-b border-white/5">
                            <span className="text-muted-foreground">Tempi</span>
                            <span className="font-medium text-foreground">{option.time}</span>
                         </div>
                         <div className="flex justify-between text-sm py-2 border-b border-white/5">
                            <span className="text-muted-foreground">Costo</span>
                            <span className="font-bold text-primary">{option.price}</span>
                         </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                        {option.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-xs text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                </div>
            ))}
             {/* Call to action card */}
            <div className="bg-gradient-to-br from-card to-black border border-white/5 rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center text-center p-8">
                 <h3 className="text-xl font-serif font-bold mb-2 text-white">Hai esigenze particolari?</h3>
                 <p className="text-muted-foreground text-sm mb-6">
                     Contatta il nostro concierge per organizzare un trasporto personalizzato o per spedizioni in zone remote.
                 </p>
                 <a href="/contact" className="text-primary font-bold hover:underline flex items-center gap-2">
                     Contattaci <ArrowRight className="w-4 h-4" />
                 </a>
            </div>
        </div>
      </section>
    </main>
  )
}
