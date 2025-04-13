import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { CoinCard } from './CoinCard';
import type { Coin } from './CoinCard';

interface CoinCarouselProps {
  coins: Coin[];
}

export function CoinCarousel({ coins }: CoinCarouselProps) {
  return (
    <Carousel opts={{ loop: true, align: "center" }} className="w-full relative">
      <CarouselContent>
        {coins.map((coin) => (
          <CarouselItem key={coin.id} className="basis-4/5 md:basis-1/3">
            <CoinCard coin={coin} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="relative py-4 flex justify-center gap-4 md:hidden">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
