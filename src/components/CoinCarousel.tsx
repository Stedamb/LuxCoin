import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface Coin {
  id: number;
  name: string;
  period: string;
  description: string;
  price: number;
  image: string;
}

interface CoinCarouselProps {
  coins: Coin[];
}

export function CoinCarousel({ coins }: CoinCarouselProps) {
  return (
    <Carousel opts={{ loop: true, align: "start" }} className="w-full">
      <CarouselContent>
        {coins.map((coin) => (
          <CarouselItem key={coin.id} className="basis-full md:basis-1/3">
            <div className="bg-stone-800 h-full bg-opacity-80 rounded-sm overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src={coin.image}
                  alt={coin.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-cinzel text-xl text-amber-300 mb-1">{coin.name}</h3>
                <p className="text-stone-400 text-sm mb-3">{coin.period}</p>
                <p className="text-stone-300 mb-4">{coin.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-amber-300 font-cinzel text-xl">
                    {coin.price.toLocaleString()}€
                  </span>
                  <a
                    href={`/coin/${coin.id}`}
                    className="bg-amber-800 hover:bg-amber-700 text-stone-100 px-4 py-2 rounded-sm font-cinzel text-sm uppercase tracking-wide transition-colors"
                  >
                    Dettagli
                  </a>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center justify-center mt-4 gap-2">
        <CarouselPrevious className="relative inset-0 translate-y-0 left-0" />
        <CarouselNext className="relative inset-0 translate-y-0 right-0" />
      </div>
    </Carousel>
  );
}
