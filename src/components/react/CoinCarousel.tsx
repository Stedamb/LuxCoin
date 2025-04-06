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
      <div className="absolute bottom-[-40px] left-1/2 md:hidden">
        <CarouselPrevious className="bg-primary hover:bg-accent border-0 text-stone-100 hover:text-stone-100" />
        <CarouselNext className="bg-primary hover:bg-accent border-0 text-stone-100 hover:text-stone-100" />
      </div>
    </Carousel>
  );
}
