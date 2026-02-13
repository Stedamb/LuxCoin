
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Coin } from "@/sanity/lib/types"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"

interface RareCoinCarouselProps {
  items: Coin[]
}

export function RareCoinCarousel({ items }: RareCoinCarouselProps) {
  if (!items || items.length === 0) {
    return null;
  }

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
            {items.map((item) => (
              <CarouselItem key={item._id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 select-none">
                <div className="p-1 h-full">
                  <Link href={`/collezione/${item.slug.current}`}>
                    <Card className="bg-card/50 border-white/5 h-full hover:bg-card/80 transition-all hover:-translate-y-2 duration-300 overflow-hidden group border-0">
                      <CardContent className="p-6 flex flex-col items-center text-center h-full">
                        {/* Coin Visual - Using Sanity Image or Gradient Fallback */}
                        <div className={`w-40 h-40 rounded-full bg-linear-to-br from-neutral-800 to-neutral-950 shadow-2xl mb-8 relative flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                             {item.images?.[0] ? (
                               <Image
                                 src={urlFor(item.images[0]).width(400).height(400).url()}
                                 alt={item.title}
                                 fill
                                 className="object-cover"
                               />
                             ) : (
                               <div className="absolute inset-2 border border-white/5 rounded-full" />
                             )}
                             <div className="absolute inset-0 bg-black/10 rounded-full" />
                             {/* Shine effect */}
                             <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                        </div>
                        
                        <div className="space-y-2 w-full mt-auto">
                             <div className="text-xs text-muted-foreground uppercase tracking-wider">
                               {item.period?.title || (item._type === 'coin' ? 'Moneta' : 'Antichità')}
                             </div>
                             <h3 className="font-serif text-xl font-bold text-foreground line-clamp-1">{item.title}</h3>
                             <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10 w-full">
                                  <span className="font-mono text-primary font-bold">
                                    {item.price ? `€${item.price.toLocaleString()}` : "Trattativa privata"}
                                  </span>
                                  {item.condition?.title && (
                                    <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">{item.condition.title}</span>
                                  )}
                             </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
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
