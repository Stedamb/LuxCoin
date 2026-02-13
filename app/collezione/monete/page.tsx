import { Navbar } from "@/components/layout/Navbar"
import { CollectionClient } from "@/components/collection/CollectionClient"
import { client } from "@/sanity/lib/client"
import { coinsWithFiltersQuery } from "@/sanity/lib/collection-queries"

export const revalidate = 60 // Revalidate every 60 seconds

export default async function MonetePage() {
  // Fetch all data from Sanity
  const data = await client.fetch(coinsWithFiltersQuery)
  
  const { coins, categories, periods, materials, conditions } = data

  return (
    <main className="min-h-screen bg-background text-foreground pb-20">
      <Navbar />
      <div className="pt-32 container mx-auto px-4">
        <CollectionClient 
          initialCoins={coins}
          categories={categories}
          periods={periods}
          materials={materials}
          conditions={conditions}
          itemType="coin"
        />
      </div>
    </main>
  )
}
