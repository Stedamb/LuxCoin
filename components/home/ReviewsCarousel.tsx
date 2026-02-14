
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ExternalLink } from "lucide-react"
import { Review } from "@/sanity/lib/types"
import Link from "next/link"

interface ReviewsCarouselProps {
  items: Review[]
}

export function ReviewsCarousel({ items }: ReviewsCarouselProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-background-light relative overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -ml-48 -mb-48" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-2 block">Cosa Dicono di Noi</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
                Esperienze d'Eccellenza
            </h2>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {items.map((item) => (
              <CarouselItem key={item._id} className="pl-4 md:basis-1/2 lg:basis-1/3 select-none">
                <div className="p-1 h-full">
                    <Card className="bg-card/30 border-white/5 h-full hover:bg-card/50 transition-all duration-300 backdrop-blur-sm group border-0">
                      <CardContent className="p-8 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star 
                                        key={i} 
                                        className={`w-4 h-4 ${i < item.rating ? "text-primary fill-primary" : "text-white/10"}`} 
                                    />
                                ))}
                            </div>
                            <Quote className="w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
                        </div>
                        
                        <p className="text-muted-foreground italic mb-8 grow leading-relaxed">
                            "{item.text}"
                        </p>

                        <div className="flex justify-between items-end mt-auto pt-6 border-t border-white/5">
                           <div>
                                <h4 className="font-serif font-bold text-foreground text-lg">{item.name}</h4>
                                <p className="text-xs text-muted-foreground">
                                    {new Date(item.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}
                                    {item.platform && ` • via ${item.platform.charAt(0).toUpperCase() + item.platform.slice(1)}`}
                                </p>
                           </div>
                           
                           {item.link && (
                                <Link 
                                    href={item.link} 
                                    target="_blank" 
                                    className="text-primary hover:text-white transition-colors p-2 rounded-full bg-white/5 hover:bg-primary/20"
                                    title="Vedi recensione originale"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                </Link>
                           )}
                        </div>
                      </CardContent>
                    </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-12">
             <CarouselPrevious className="static bg-card translate-y-0 translate-x-0" />
             <CarouselNext className="static bg-card translate-y-0 translate-x-0" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
