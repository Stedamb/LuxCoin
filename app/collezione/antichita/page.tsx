import { Navbar } from "@/components/layout/Navbar"
import { CollectionClient } from "@/components/collection/CollectionClient"
import { client } from "@/sanity/lib/client"
import { antiquitiesWithFiltersQuery } from "@/sanity/lib/collection-queries"

export const revalidate = 60 // Revalidate every 60 seconds

export default async function AntichitaPage() {
  // Fetch all data from Sanity
  const data = await client.fetch(antiquitiesWithFiltersQuery)
  
  // Destructure antiquities and map to coins prop (as they share structure)
  const { antiquities, categories, periods, materials, conditions } = data

  return (
    <main className="min-h-screen bg-background text-foreground pb-20">
      <Navbar />
      <div className="pt-32 container mx-auto px-4">
        <CollectionClient 
          initialCoins={antiquities}
          categories={categories}
          periods={periods}
          materials={materials}
          conditions={conditions}
          itemType="antiquity"
        />
      </div>
    </main>
  )
}
