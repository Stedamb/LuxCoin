"use client"

import * as React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

interface CoinGalleryProps {
    coinGradient: string;
}

export function CoinGallery({ coinGradient }: CoinGalleryProps) {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
             setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    const images = [
        { label: "RECTO", id: 0 },
        { label: "VERSO", id: 1 },
        { label: "BORDO", id: 2 }
    ]

    return (
        <div className="space-y-6">
             <div className="rounded-2xl border border-white/5 bg-card/30 p-8 aspect-square relative overflow-hidden shadow-2xl flex items-center justify-center">
                 <Carousel setApi={setApi} className="w-full h-full flex items-center justify-center">
                    <CarouselContent className="h-full items-center">
                        {images.map((img) => (
                             <CarouselItem key={img.id} className="flex items-center justify-center h-full">
                                {/* Simulated Coin Image */}
                                <div className={`w-3/4 h-3/4 aspect-square rounded-full bg-gradient-to-br ${coinGradient} shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] relative flex items-center justify-center animate-in fade-in zoom-in duration-500`}>
                                     <div className="absolute inset-4 border border-white/20 rounded-full opacity-50" />
                                     <div className="absolute inset-0 bg-black/10 rounded-full mix-blend-multiply" />
                                     
                                     {/* Text Label simulating detail */}
                                     <span className="text-4xl md:text-5xl font-serif text-black/40 font-bold tracking-widest mix-blend-overlay">
                                         {img.label}
                                     </span>

                                     {/* Shine Effect */}
                                     <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10" />
                                </div>
                             </CarouselItem>
                        ))}
                    </CarouselContent>
                 </Carousel>
                 
                 {/* Overlay Texture */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
             </div>

             {/* Thumbnails / Indicators */}
             <div className="flex gap-4 justify-center">
                {images.map((img, index) => (
                    <button
                        key={img.id}
                        onClick={() => api?.scrollTo(index)}
                        className={cn(
                            "w-20 h-20 rounded-lg bg-card/50 border overflow-hidden transition-all duration-300 flex items-center justify-center",
                            current === index ? "border-primary ring-2 ring-primary/20 scale-105" : "border-white/10 opacity-70 hover:opacity-100"
                        )}
                    >
                         <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${coinGradient} opacity-80`} />
                    </button>
                ))}
            </div>
        </div>
    )
}
