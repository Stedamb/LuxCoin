// Example: How to fetch and display coins from Sanity CMS
// This is a reference implementation - adapt as needed

import { client } from '@/sanity/lib/client'
import { coinsQuery } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import { Coin } from '@/sanity/lib/types'
import { PortableTextRenderer } from '@/components/sanity/PortableTextRenderer'
import Image from 'next/image'

export default async function SanityCoinsExample() {
  // Fetch coins from Sanity
  const coins = await client.fetch<Coin[]>(coinsQuery)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Coins from Sanity CMS</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coins.map((coin) => (
          <div key={coin._id} className="border rounded-lg p-4 shadow-lg">
            {/* Coin Image */}
            {coin.images?.[0] && (
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={urlFor(coin.images[0]).width(400).height(400).url()}
                  alt={coin.title}
                  fill
                  className="object-cover rounded"
                />
              </div>
            )}

            {/* Coin Title */}
            <h2 className="text-2xl font-bold mb-2">{coin.title}</h2>

            {/* Coin Details */}
            <div className="space-y-2 text-sm mb-4">
              {coin.category && (
                <p><strong>Category:</strong> {coin.category.title}</p>
              )}
              {coin.period && (
                <p><strong>Period:</strong> {coin.period.title}</p>
              )}
              {coin.material && (
                <p><strong>Material:</strong> {coin.material.title}</p>
              )}
              {coin.condition && (
                <p><strong>Condition:</strong> {coin.condition.title}</p>
              )}
              {coin.year && (
                <p><strong>Year:</strong> {coin.year}</p>
              )}
              {coin.weight && (
                <p><strong>Weight:</strong> {coin.weight}</p>
              )}
              {coin.diameter && (
                <p><strong>Diameter:</strong> {coin.diameter}</p>
              )}
            </div>

            {/* Price */}
            {coin.price && (
              <p className="text-xl font-bold text-green-600 mb-4">
                €{coin.price.toLocaleString()}
              </p>
            )}

            {/* Description (Rich Text) */}
            {coin.description && (
              <div className="prose prose-sm">
                <PortableTextRenderer value={coin.description} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

/* 
 * USAGE EXAMPLES:
 * 
 * 1. Fetch a single coin by slug:
 * 
 *   const coin = await client.fetch<Coin>(coinBySlugQuery, { 
 *     slug: 'roman-aureus' 
 *   })
 * 
 * 2. Fetch coins by category:
 * 
 *   const coins = await client.fetch<Coin[]>(coinsByCategoryQuery, { 
 *     categoryId: 'category-id-here' 
 *   })
 * 
 * 3. Fetch upcoming auctions:
 * 
 *   const auctions = await client.fetch<Auction[]>(upcomingAuctionsQuery)
 * 
 * 4. Fetch FAQs by category:
 * 
 *   const faqs = await client.fetch<FAQ[]>(faqsByCategoryQuery, { 
 *     category: 'shipping' 
 *   })
 */
