"use client"

import Link from "next/link"
import { Coins, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Logo } from "./Logo"
import { LogoCompact } from "./LogoCompact"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Chiude il menu al cambio di rotta
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Impedisce lo scroll del body quando il menu è aperto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/collezione/monete", label: "Monete" },
    { href: "/collezione/antichita", label: "Antichità" },
    { href: "/aste", label: "Aste online" },
    { href: "/contatti", label: "Contatti" },
  ]

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          (isScrolled || isMobileMenuOpen)
            ? "bg-background/90 backdrop-blur-lg border-b border-white/5 py-4 shadow-xl"
            : "py-6 bg-transparent"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group z-50">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-black/20 group-hover:bg-primary/30 transition-all border border-primary/50">
              <LogoCompact className="h-6 w-6 text-white -mr-1" />
            </div>
            <Logo className={cn(
              "w-48 ml-2 transition-colors duration-300",
              (isScrolled || isMobileMenuOpen || !isHomePage) ? "text-foreground" : "text-white"
            )} />
          </Link>

          {/* Navigation Links - Desktop Centered */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest", 
                  (isScrolled || isMobileMenuOpen || !isHomePage) ? "text-foreground" : "text-background",
                  pathname === link.href && "text-primary font-bold"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side spacer for desktop / Mobile Menu Toggle */}
          <div className="flex items-center justify-end z-50">
            <button
              className="md:hidden p-2 text-primary focus:outline-none hover:bg-white/5 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            
            {/* Desktop spacer to keep layout balanced if needed elsewhere */}
            <div className="hidden md:block w-10" />
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Esterno all'header per massima stabilità */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/98 backdrop-blur-2xl z-40 md:hidden flex flex-col items-center justify-center p-6"
          >
            <div className="flex flex-col items-center gap-10">
                {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="w-full text-center"
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "text-3xl font-serif font-bold hover:text-primary transition-colors uppercase tracking-[0.15em] block",
                          pathname === link.href ? "text-primary" : "text-foreground"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                ))}
                
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-10 flex flex-col items-center"
                >
                    <div className="h-px w-20 bg-primary/40 mb-6" />
                    <p className="text-primary/60 text-[10px] uppercase tracking-[0.4em]">LuxCoin Select</p>
                </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}