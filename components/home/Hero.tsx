import { Button } from "@/components/ui/button"
import { MotionDiv } from "@/components/ui/motion"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/80  to-background" />
        {/* <div className="absolute inset-0 backdrop-blur-[5px]" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 text-center">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
            Il valore della storia <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-yellow-400 to-amber-600 drop-shadow-lg">
              nelle tue mani
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg">
           Monete di qualità dal fascino senza tempo.
          </p>

          <MotionDiv 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4, duration: 0.6 }}
             className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <Link href="/collezione">
              <Button variant="premium" size="lg" className="px-10 py-7 text-lg rounded-full">
                Esplora Collezione
              </Button>
            </Link>
          </MotionDiv>
        </MotionDiv>
      </div>
      
       {/* Scroll Indicator */}
       <MotionDiv 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
       >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-12 w-0.5 bg-linear-to-b from-foreground/10 to-background" />
       </MotionDiv>
    </section>
  )
}
