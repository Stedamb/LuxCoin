import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { RareCoinCarousel } from "@/components/home/RareCoinCarousel";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import SanityCoinsExample from "@/components/sanity/SanityCoinsExample";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <Hero />
      <SanityCoinsExample />
      <RareCoinCarousel />
      <WhyChooseUs />
      <section className="py-24 text-center border-t border-white/5 bg-card/20">
          <div className="container mx-auto px-4">
              <h2 className="text-3xl font-serif font-bold mb-4">Invest in Timeless Value</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  Join our exclusive community of numismatists and secure your legacy with the finest ancient coins available on the market.
              </p>
          </div>
      </section>
    </main>
  );
}
