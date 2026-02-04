"use client"

import { Navbar } from "@/components/layout/Navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 pb-20">
      <Navbar />
      
      {/* Header Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/5">
             <div className="absolute inset-0 bg-black/60 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/0 to-background" />
        </div>
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
            <div className="bg-card border border-white/5 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
                <h2 className="text-2xl font-serif font-bold mb-6 flex items-center gap-2">
                    <Send className="w-5 h-5 text-primary" /> Inviaci un Messaggio
                </h2>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="firstName">Nome</Label>
                            <Input id="firstName" placeholder="Il tuo nome" className="bg-background/50 border-white/10 h-10" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName">Cognome</Label>
                            <Input id="lastName" placeholder="Il tuo cognome" className="bg-background/50 border-white/10 h-10" />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="esempio@email.com" className="bg-background/50 border-white/10 h-10" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="subject">Oggetto</Label>
                        <Input id="subject" placeholder="Valutazione, Acquisto, Informazioni..." className="bg-background/50 border-white/10 h-10" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message">Messaggio</Label>
                        <Textarea id="message" placeholder="Scrivi qui la tua richiesta..." className="bg-background/50 border-white/10 min-h-[150px] resize-none" />
                    </div>

                    <Button variant="premium" className="w-full h-12 text-lg">
                        Invia Richiesta
                    </Button>
                </form>
            </div>

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
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Via Condotti 10, <br />
                                00187 Roma (RM), Italia
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
                                info@luxcoin.it <br />
                                valutazioni@luxcoin.it
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
                                +39 06 1234 5678 <br />
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
