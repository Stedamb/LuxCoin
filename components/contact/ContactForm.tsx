"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send } from "lucide-react"

export function ContactForm() {
  return (
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
  )
}
