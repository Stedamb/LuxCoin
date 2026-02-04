"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-b from-black/80 via-black/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="mb-4 inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm"
          >
             <span className="text-primary text-sm font-medium tracking-widest uppercase">Premium Numismatics</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
            Eternity in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 drop-shadow-sm">
              Your Hands
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Curated rare coins from Roman, Greek, and Medieval eras. <br className="hidden md:block"/>
            Certified quality for the discerning collector.
          </p>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4, duration: 0.6 }}
             className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <Link href="/collection">
              <Button variant="premium" size="lg" className="px-10 py-7 text-lg shadow-[0_0_30px_-5px_var(--color-primary)]">
                Esplora Collezione
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="px-10 py-7 text-lg border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/40 transition-all">
                Contattaci
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
       {/* Scroll Indicator */}
       <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
       >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-12 w-0.5 bg-gradient-to-b from-white/50 to-transparent" />
       </motion.div>
    </section>
  )
}
