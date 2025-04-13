import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

interface CoinImageCarouselProps {
  images: string[];
  altText: string;
}

export function CoinImageCarousel({ images, altText }: CoinImageCarouselProps) {
  // Make sure we have at least one image
  const imageList = images.length > 0 ? images : [''];

  return (
    <div className="w-full">
      <Carousel opts={{ loop: true, align: "center" }} className="w-full">
        <CarouselContent>
          {imageList.map((image, index) => (
            <CarouselItem key={index} className="basis-[90%]">
              <div className="aspect-square p-4">
                <img
                  src={image}
                  alt={`${altText} - Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {imageList.length > 1 && (
          <div className="absolute bottom-[-40px] left-1/2">
            <CarouselPrevious className="bg-primary hover:bg-accent border-0 text-stone-100 hover:text-stone-100" />
            <CarouselNext className="bg-primary hover:bg-accent border-0 text-stone-100 hover:text-stone-100" />
          </div>
        )}
      </Carousel>

      {/* {imageList.length > 1 && (
        <div className="hidden md:flex gap-2 mt-4 overflow-x-auto pb-2 justify-center">
          {imageList.map((image, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-16 h-16 rounded-sm overflow-hidden border-2 border-stone-700 hover:border-primary cursor-pointer transition-all"
            >
              <img
                src={image}
                alt={`${altText} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
}
