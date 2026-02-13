"use client"

import * as React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselApi, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"

interface CoinGalleryProps {
    images: any[];
    title: string;
    coinGradient?: string;
}

export function CoinGallery({ images, title, coinGradient = "from-amber-400 to-amber-700" }: CoinGalleryProps) {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [zoomPos, setZoomPos] = React.useState({ x: 0, y: 0, active: false })

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
             setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!zoomPos.active) return
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
        const x = ((e.clientX - left) / width) * 100
        const y = ((e.clientY - top) / height) * 100
        setZoomPos(prev => ({ ...prev, x, y }))
    }

    const toggleZoom = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
        const x = ((e.clientX - left) / width) * 100
        const y = ((e.clientY - top) / height) * 100
        setZoomPos(prev => ({ x, y, active: !prev.active }))
    }

    if (!images || images.length === 0) {
        return (
            <div className="aspect-square rounded-2xl bg-zinc-900 flex items-center justify-center border border-white/5">
                <div className={`w-3/4 h-3/4 rounded-full bg-linear-to-br ${coinGradient} opacity-20`} />
            </div>
        )
    }

    return (
        <div className="space-y-6">
             <div className="rounded-2xl border border-white/5 bg-card/30 p-4 md:p-8 relative overflow-hidden shadow-2xl group flex items-center justify-center">
                 <Carousel 
                    setApi={setApi} 
                    className="w-full"
                    opts={{
                        loop: true,
                        align: "start",
                        watchDrag: !zoomPos.active // Disable dragging when zoomed to allow moving lens
                    }}
                 >
                    <CarouselContent>
                        {images.map((image, index) => (
                             <CarouselItem key={index} className="flex items-center justify-center">
                                <div 
                                    className={cn(
                                        "relative w-full aspect-square flex items-center justify-center transition-all duration-300",
                                        zoomPos.active ? "cursor-zoom-out" : "cursor-zoom-in"
                                    )}
                                    onMouseMove={handleMouseMove}
                                    onClick={toggleZoom}
                                >
                                    {/* Main Image container without the round mask */}
                                    <div className="w-full h-full relative overflow-hidden animate-in fade-in zoom-in duration-500 rounded-xl bg-card/10">
                                        <div 
                                            className="w-full h-full transition-transform duration-200 ease-out"
                                            style={{
                                                transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                                                transform: zoomPos.active ? 'scale(2.5)' : 'scale(1)'
                                            }}
                                        >
                                            <Image
                                                src={urlFor(image).width(1600).url()}
                                                alt={`${title} - view ${index + 1}`}
                                                fill
                                                className="object-cover"
                                                priority={index === 0}
                                            />
                                        </div>
                                        {/* Subtle Shine Effect */}
                                        {!zoomPos.active && (
                                            <div className="absolute inset-0 bg-linear-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
                                        )}
                                    </div>
                                </div>
                             </CarouselItem>
                        ))}
                    </CarouselContent>
                    
                    {/* Carousel Controls - always present but styled nicely */}
                    <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20">
                        <CarouselPrevious className="pointer-events-auto h-12 w-12 bg-black/60 backdrop-blur-md border-white/10 text-white hover:bg-primary hover:text-primary-foreground opacity-0 group-hover:opacity-100 disabled:opacity-30 disabled:pointer-events-none transition-all duration-300 -left-2 group-hover:left-0" />
                        <CarouselNext className="pointer-events-auto h-12 w-12 bg-black/60 backdrop-blur-md border-white/10 text-white hover:bg-primary hover:text-primary-foreground opacity-0 group-hover:opacity-100 disabled:opacity-30 disabled:pointer-events-none transition-all duration-300 -right-2 group-hover:right-0" />
                    </div>
                 </Carousel>
             </div>

             {/* Thumbnails / Indicators - Scrollable */}
             <div className="relative">
                <div className="flex gap-4 overflow-x-auto pb-4 px-2 snap-x [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.1)_transparent] [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={cn(
                                "relative w-20 h-20 md:w-24 md:h-24 rounded-xl border transition-all duration-300 shrink-0 overflow-hidden snap-center",
                                current === index 
                                    ? "border-primary ring-2 ring-primary/20 scale-105 bg-primary/10" 
                                    : "border-white/10 bg-card/50 opacity-60 hover:opacity-100"
                            )}
                        >
                            <Image
                                src={urlFor(image).width(200).height(200).url()}
                                alt={`${title} thumb ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                            {current !== index && <div className="absolute inset-0 bg-black/40" />}
                        </button>
                    ))}
                </div>
                
                {/* Scroll Indicator shadows for better UX */}
                <div className="absolute left-0 top-0 bottom-4 w-8 bg-linear-to-r from-background to-transparent pointer-events-none opacity-50" />
                <div className="absolute right-0 top-0 bottom-4 w-8 bg-linear-to-l from-background to-transparent pointer-events-none opacity-50" />
            </div>
        </div>
    )
}
