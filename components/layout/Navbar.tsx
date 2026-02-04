"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Coins, User } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/collection", label: "Collezione" },
    { href: "/news", label: "Novità" },
    { href: "/contact", label: "Contatti" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-2 shadow-lg"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors border border-primary/50">
            <Coins className="h-6 w-6 text-primary" />
          </div>
          <span className="text-xl font-serif font-bold tracking-wide text-foreground">
            Lux<span className="text-primary">Coin</span>
          </span>
        </Link>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
            <Button variant="premium" size="sm" className="hidden sm:flex">
                <User className="mr-2 h-4 w-4" />
                Area Riservata
            </Button>
            {/* Mobile Menu Toggle would go here */}
        </div>
      </div>
    </header>
  )
}
