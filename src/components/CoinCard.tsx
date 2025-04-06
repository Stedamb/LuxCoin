import React from 'react';

export interface Coin {
  id: number;
  name: string;
  period: string;
  description: string;
  price: number;
  image: string;
}

interface CoinCardProps {
  coin: Coin;
}

export function CoinCard({ coin }: CoinCardProps) {
  return (
    <div className="bg-stone-800 h-full bg-opacity-80 rounded-sm overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square overflow-hidden p-6">
        <img
          src={coin.image}
          alt={coin.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl text-stone-100 mb-1">{coin.name}</h3>
        <p className="text-stone-400 text-sm mb-3">{coin.period}</p>
        <p className="text-stone-300 mb-4">{coin.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-stone-100 font-serif text-xl">
            {coin.price.toLocaleString()}€
          </span>
          <a
            href={`/coin/${coin.id}`}
            className="bg-amber-800 hover:bg-amber-700 text-stone-100 px-4 py-2 rounded-sm font-serif text-sm uppercase tracking-wide transition-colors"
          >
            Dettagli
          </a>
        </div>
      </div>
    </div>
  );
}
