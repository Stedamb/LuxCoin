
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const rareCoins = [
  {
    id: 1,
    name: "Aureus of Augustus",
    era: "Roman Empire, 27 BC",
    price: "€12,500",
    grade: "FDC",
    gradient: "from-yellow-400 to-amber-700",
  },
  {
    id: 2,
    name: "Tetradrachm of Athens",
    era: "Ancient Greece, 450 BC",
    price: "€4,200",
    grade: "XF",
    gradient: "from-gray-300 to-gray-500",
  },
  {
    id: 3,
    name: "Solidus of Constantine",
    era: "Roman Empire, 310 AD",
    price: "€8,900",
    grade: "SPL",
    gradient: "from-amber-300 to-orange-600",
  },
  {
    id: 4,
    name: "Stater of Corinth",
    era: "Ancient Greece, 350 BC",
    price: "€3,100",
    grade: "BB+",
    gradient: "from-slate-200 to-slate-400",
  },
  {
    id: 5,
    name: "Ducat of Venice",
    era: "Medieval Italy, 1400 AD",
    price: "€1,800",
    grade: "qFDC",
    gradient: "from-yellow-200 to-yellow-600",
  },
]

export function RareCoinCarousel() {
  return (
    <section className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
                <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-2 block">Esclusività</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
                Rarità Selezionate
                </h2>
            </div>
            <Link href="/collezione">
                 <Button variant="link" className="text-foreground hover:text-primary group">
                    Vedi Tutta la Collezione <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"/>
                 </Button>
            </Link>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {rareCoins.map((coin) => (
              <CarouselItem key={coin.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 select-none">
                <div className="p-1 h-full">
                  <Card className="bg-card/50 border-white/5 h-full hover:bg-card/80 transition-all hover:-translate-y-2 duration-300 overflow-hidden group">
                    <CardContent className="p-6 flex flex-col items-center text-center h-full">
                      {/* Coin Visual Placeholder */}
                      <div className={`w-40 h-40 rounded-full bg-gradient-to-br ${coin.gradient} shadow-2xl mb-8 relative flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                           <div className="absolute inset-2 border border-white/20 rounded-full" />
                           <div className="absolute inset-0 bg-black/10 rounded-full" />
                           {/* Shine effect */}
                           <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                      </div>
                      
                      <div className="space-y-2 w-full mt-auto">
                           <div className="text-xs text-muted-foreground uppercase tracking-wider">{coin.era}</div>
                           <h3 className="font-serif text-xl font-bold text-foreground line-clamp-1">{coin.name}</h3>
                           <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10 w-full">
                                <span className="font-mono text-primary font-bold">{coin.price}</span>
                                <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">{coin.grade}</span>
                           </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-8 px-4">
             <CarouselPrevious className="static translate-y-0 translate-x-0" />
             <CarouselNext className="static translate-y-0 translate-x-0" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
