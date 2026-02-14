
import { Landmark, Search, Handshake } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Autenticità Certificata",
    description: "Ogni moneta proviene da prestigiose case d'asta internazionali ed è accompagnata dalla fattura originale, garanzia inequivocabile di autenticità e lecita provenienza secondo le normative europee."
  },
  {
    icon: Landmark,
    title: "Patrimonio Storico",
    description: "Ogni moneta è scelta con cura e passione, guidata dall'amore per la storia e dalla volontà di condividerla con altri appassionati."
  },
  {
    icon: Handshake,
    title: "Fiducia e Discrezione",
    description: "Ogni ordine è confezionato con attenzione e spedito entro 48 ore per garantire un'esperienza puntuale e sicura."
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-card/20 relative overflow-hidden">
        {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Perché Scegliere LuxCoin</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          {features.map((feature, index) => (
            <div key={index} className="group p-6 rounded-2xl hover:bg-card/30 transition-all duration-300">
              <div className="mb-6 inline-flex items-center justify-center p-4 rounded-full border border-primary/20 bg-primary/5 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-background transition-all duration-300">
                <feature.icon className="w-8 h-8 md:w-10 md:h-10 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
