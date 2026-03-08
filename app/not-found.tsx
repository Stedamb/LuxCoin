import { ArrowLeft, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/ui/motion";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-2xl w-full text-center space-y-12">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative inline-block"
        >
          <span className="text-[120px] md:text-[180px] font-serif font-bold leading-none text-transparent bg-clip-text bg-linear-to-b from-white/20 via-white/5 to-transparent select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-24 w-24 md:h-32 md:w-32 rounded-full border border-primary/20 bg-white backdrop-blur-md flex items-center justify-center shadow-2xl">
              <Search className="w-10 h-10 md:w-14 md:h-14 text-primary animate-pulse" />
            </div>
          </div>
        </MotionDiv>

        <div className="space-y-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
              Pagina non trovata
            </h1>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-muted-foreground text-lg max-w-md mx-auto leading-relaxed">
              Sembra che la pagina che stai cercando sia andata perduta nel
              tempo o non sia mai esistita nella nostra collezione.
            </p>
          </MotionDiv>
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            variant="ghost"
            className="rounded-full px-8 h-12 gap-2"
            asChild
          >
            <Link href="/">
              <ArrowLeft className="w-4 h-4" /> Torna alla Home
            </Link>
          </Button>

          <Button
            variant="premium"
            className="rounded-full px-8 h-12 shadow-lg shadow-primary/20"
            asChild
          >
            <Link href="/collezione/monete">Esplora la Collezione</Link>
          </Button>
        </MotionDiv>
      </div>

      {/* Subtle bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
    </main>
  );
}
