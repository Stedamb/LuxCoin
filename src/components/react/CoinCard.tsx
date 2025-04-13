import React from 'react';

export interface Coin {
  id: number;
  name: string;
  period: string;
  description: string;
  price: number;
  image: string;       // Main image (for backward compatibility)
  images?: string[];   // Array of additional images
  slug: string;
}

interface CoinCardProps {
  coin: Coin;
}

export function CoinCard({ coin }: CoinCardProps) {
  return (
    <div className="bg-stone-800 h-full flex flex-col bg-opacity-80 rounded-sm overflow-hidden hover:shadow-lg hover:transform hover:scale-[.98] transition-all duration-300 ease-in-out">
      <div className="aspect-square overflow-hidden p-2">
        <img
          src={coin.image}
          alt={coin.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-3 lg:px-6 pt-4">
        <h3 className="font-serif text-base text-stone-100 mb-1">{coin.name}</h3>
        <p className="text-stone-400 text-sm mb-3">{coin.period}</p>
        <p className="text-stone-300 mb-4">{coin.description.slice(0, 80)}...</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 px-3 pb-3 lg:px-6 lg:pb-6 mt-auto">
        <span className="text-stone-100 font-serif text-xl">
          {coin.price.toLocaleString()}€
        </span>
        <a
          href={`/coin/${coin.slug}`}
          className="bg-primary hover:bg-accent text-stone-100 text-center px-4 py-2 rounded-sm font-serif text-sm uppercase tracking-wide transition-colors w-full md:w-auto"
        >
          Dettagli
        </a>
      </div>
    </div>
  );
}
