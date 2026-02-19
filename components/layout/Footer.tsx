import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { Logo } from "./Logo"
import { LogoCompact } from "./LogoCompact"
import { client } from "@/sanity/lib/client"
import { siteSettingsQuery } from "@/sanity/lib/queries"
import { SiteSettings } from "@/sanity/lib/types"

const platformIcons: Record<string, any> = {
  Instagram,
  Facebook,
  Twitter,
  LinkedIn: Linkedin,
}

export async function Footer() {
  const settings: SiteSettings = await client.fetch(siteSettingsQuery)
  const socialLinks = settings?.socialLinks || []

  return (
    <footer className="bg-background py-16 border-t border-white/10 text-muted-foreground z-10 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group z-50">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-black/20 group-hover:bg-primary/30 transition-all border border-primary/50">
                <LogoCompact className="h-6 w-6 text-white -mr-1" />
              </div>
              <Logo className="w-48 ml-2 transition-colors duration-300" />
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
              {socialLinks.map((social) => {
                const Icon = platformIcons[social.platform] || Instagram
                return (
                  <Link 
                    key={social.platform}
                    href={social.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
             <p>&copy; {new Date().getFullYear()} LuxCoin - P.IVA {settings?.vatNumber || "04849590403"}</p>
             <p>Designed by <Link href="https://stedamb.it" target="_blank" className="italic hover:text-primary transition-colors">Stefano D'Ambrosio</Link></p>
        </div>
      </div>
    </footer>
  )
}
