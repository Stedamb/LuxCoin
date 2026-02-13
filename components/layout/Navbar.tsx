"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Coins, User } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/collezione/monete", label: "Monete" },
    { href: "/collezione/antichita", label: "Antichità" },
    { href: "/aste", label: "Aste online" },
    { href: "/contatti", label: "Contatti" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-background/80 backdrop-blur-md py-2 shadow-lg"
          : " py-4"
      )}
    >
      <div className="relative container mx-auto flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors border border-primary/50">
            <Coins className="h-6 w-6 text-primary" />
          </div>
          <span className={cn("text-xl font-serif font-bold tracking-wide", isScrolled || !isHomePage ? "text-foreground" : "text-background")}>
            Lux<span className="text-primary">Coin</span>
          </span>
        </Link>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn("text-sm font-medium  hover:text-primary transition-colors uppercase tracking-wider", isScrolled || !isHomePage ? "text-foreground" : "text-background")}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
