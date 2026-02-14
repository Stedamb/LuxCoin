import { Navbar } from "@/components/layout/Navbar"
import { Mail, MapPin, Phone, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact/ContactForm"
import { client } from "@/sanity/lib/client"
import { siteSettingsQuery } from "@/sanity/lib/queries"
import { SiteSettings } from "@/sanity/lib/types"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contatti | LuxCoin",
  description: "Contatta gli esperti di LuxCoin. Siamo a tua disposizione per valutazioni, acquisti e consulenze numismatiche.",
}

export const revalidate = 60 // Revalidate every 60 seconds

export default async function ContactPage() {
  const settings = await client.fetch<SiteSettings>(siteSettingsQuery)

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 pb-20">
      <Navbar />
      
      {/* Header Section */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <div className="container relative z-10 px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Parla con i Nostri Esperti</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Siamo qui per guidarti nell'espansione della tua collezione o nella valutazione dei tuoi tesori numismatici.
            </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Info */}
            <div className="space-y-8 pt-8 lg:pt-0">
                
                {/* Info Cards */}
                <div className="grid gap-6">
                    <div className="bg-card/30 border border-white/5 p-6 rounded-xl flex items-start gap-4 hover:border-primary/50 transition-colors group">
                        <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-serif font-bold text-lg mb-1">Sede Principale</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                                {settings?.address || "Via Condotti 10, \n00187 Roma (RM), Italia"}
                            </p>
                        </div>
                    </div>

                    <div className="bg-card/30 border border-white/5 p-6 rounded-xl flex items-start gap-4 hover:border-primary/50 transition-colors group">
                        <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-serif font-bold text-lg mb-1">Email Diretta</h3>
                            <p className="text-muted-foreground text-sm">
                                {settings?.email || "info@luxcoin.it"}
                            </p>
                        </div>
                    </div>

                    <div className="bg-card/30 border border-white/5 p-6 rounded-xl flex items-start gap-4 hover:border-primary/50 transition-colors group">
                        <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                            <Phone className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-serif font-bold text-lg mb-1">Telefono</h3>
                            <p className="text-muted-foreground text-sm">
                                {settings?.phone || "+39 06 1234 5678"} <br />
                                Lun-Ven, 9:00 - 18:00
                            </p>
                        </div>
                    </div>
                </div>
                
                 {/* Map Placeholder */}
                <div className="aspect-video w-full rounded-2xl border border-white/10 overflow-hidden relative grayscale invert hover:grayscale-0 hover:invert-0 transition-all duration-500">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.851752319082!2d12.479526776518536!3d41.903525571239294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f60541d2555d9%3A0xc061264c924fc9b3!2sVia%20dei%20Condotti%2C%2010%2C%2000187%20Roma%20RM!5e0!3m2!1sit!2sit!4v1707937548264!5m2!1sit!2sit" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="opacity-70 hover:opacity-100 transition-opacity"
                    ></iframe>
                    <div className="absolute inset-0 bg-primary/10 pointer-events-none mix-blend-overlay" />
                </div>

            </div>
        </div>
      </div>
    </main>
  )
}
