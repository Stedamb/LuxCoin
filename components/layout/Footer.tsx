"use client"

import { Coins, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background py-16 border-t border-white/10 text-muted-foreground z-10 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 border border-primary/50">
                <Coins className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xl font-serif font-bold text-foreground">
                Lux<span className="text-primary">Coin</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              La destinazione definitiva per i collezionisti di numismatica antica. Autenticità, storia e valore eterno.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-4">Esplora</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/collezione/monete" className="hover:text-primary transition-colors">Monete</Link></li>
              <li><Link href="/collezione/antichita" className="hover:text-primary transition-colors">Antichità</Link></li>
              <li><Link href="/aste" className="hover:text-primary transition-colors">Aste</Link></li>
              
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-foreground mb-4">Supporto</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contatti" className="hover:text-primary transition-colors">Contattaci</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/spedizioni" className="hover:text-primary transition-colors">Spedizioni</Link></li>
              <li><Link href="/termini-e-condizioni" className="hover:text-primary transition-colors">Termini e Condizioni</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Seguici</h4>
            <div className="flex gap-4">
                <Link href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></Link>
                <Link href="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></Link>
                <Link href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></Link>
                <Link href="#" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
             <p>&copy; {new Date().getFullYear()} LuxCoin - P.IVA 04849590403</p>
             <p>Designed by <Link href="https://stedamb.it" target="_blank" className="italic hover:text-primary transition-colors">Stefano D'Ambrosio</Link></p>
        </div>
      </div>
    </footer>
  )
}
