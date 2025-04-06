import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

interface ReviewCarouselProps {
  reviews: Review[];
}

export function ReviewCarousel({ reviews }: ReviewCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {reviews.map((review) => (
          <CarouselItem key={review.id} className="basis-4/5 md:basis-1/2 lg:basis-1/3 pl-4">
            <div className="bg-stone-800 h-full bg-opacity-80 rounded-sm overflow-hidden hover:shadow-lg transition-shadow p-6">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-stone-100 font-bold text-xl">
                    {review.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-stone-100 text-lg">{review.name}</h3>
                  <p className="text-stone-400 text-sm">{review.location}</p>
                </div>
              </div>
              
              <div className="flex text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 ${i < review.rating ? "text-amber-400" : "text-stone-600"}`}
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-stone-300 mb-4 italic">"{review.text}"</p>
              
              <p className="text-stone-500 text-sm text-right">{review.date}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute md:static bottom-[-40px] left-1/2">
        <CarouselPrevious className="bg-primary hover:bg-accent border-0 text-stone-100 hover:text-stone-100" />
        <CarouselNext className="bg-primary hover:bg-accent border-0 text-stone-100 hover:text-stone-100" />
      </div>
    </Carousel>
  );
}
