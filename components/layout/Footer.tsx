"use client"

import { Coins, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-white/10 text-muted-foreground z-10 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 border border-primary/50">
                <Coins className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xl font-serif font-bold text-white">
                Lux<span className="text-primary">Coin</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              La destinazione definitiva per i collezionisti di numismatica antica. Autenticità, storia e valore eterno.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Esplora</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/collection" className="hover:text-primary transition-colors">Collezione</Link></li>
              <li><Link href="/auctions" className="hover:text-primary transition-colors">Aste</Link></li>
              <li><Link href="/sell" className="hover:text-primary transition-colors">Vendi con noi</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">Chi Siamo</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-white mb-4">Supporto</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contattaci</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-primary transition-colors">Spedizioni</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Termini e Condizioni</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Seguici</h4>
            <div className="flex gap-4">
                <Link href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></Link>
                <Link href="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></Link>
                <Link href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></Link>
                <Link href="#" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
             <p>&copy; {new Date().getFullYear()} LuxCoin Numismatics. P.IVA 1234567890</p>
             <p>Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  )
}
