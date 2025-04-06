import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { CoinCard } from './CoinCard';
import type { Coin } from './CoinCard';

interface CoinCarouselProps {
  coins: Coin[];
}

export function CoinCarousel({ coins }: CoinCarouselProps) {
  return (
    <Carousel opts={{ loop: true, align: "start" }} className="w-full">
      <CarouselContent>
        {coins.map((coin) => (
          <CarouselItem key={coin.id} className="basis-full md:basis-1/3">
            <CoinCard coin={coin} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-8 gap-2">
        <CarouselPrevious className="bg-amber-800 hover:bg-amber-700 border-0 text-stone-100" />
        <CarouselNext className="bg-amber-800 hover:bg-amber-700 border-0 text-stone-100" />
      </div>
    </Carousel>
  );
}
