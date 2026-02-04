"use client"

import { Navbar } from "@/components/layout/Navbar"
import { FilterSidebar } from "@/components/collection/FilterSidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const collectionCoins = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  name: `Coin Specimen ${i + 1}`,
  era: "Roman Empire",
  price: `€${(Math.random() * 5000 + 500).toFixed(0)}`,
  grade: ["FDC", "SPL", "BB"][i % 3],
}))

export default function CollectionPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pb-20">
      <Navbar />
      <div className="pt-32 container mx-auto px-4">
          <div className="flex gap-8">
            <FilterSidebar />
            
            <div className="flex-1">
                <div className="flex justify-between items-end mb-8 pb-4 border-b border-white/5">
                    <div>
                        <h1 className="text-4xl font-serif font-bold mb-2">Collezione Completa</h1>
                        <p className="text-muted-foreground">Esplora {collectionCoins.length} monete uniche disponibili.</p>
                    </div>
                     <Button variant="outline" size="sm">Ordina per: Rilevanza</Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {collectionCoins.map((coin) => (
                        <Link href={`/collection/${coin.id}`} key={coin.id} className="block group">
                            <Card className="bg-card border-none shadow-sm hover:bg-card/80 transition-all hover:-translate-y-1 h-full">
                                <CardContent className="p-4">
                                    <div className="aspect-square rounded-lg bg-zinc-900 mb-4 flex items-center justify-center relative overflow-hidden">
                                        <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-yellow-600/40 to-yellow-200/40 animate-pulse" />
                                         <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                    </div>
                                    <h3 className="font-serif font-bold text-lg mb-1 group-hover:text-primary transition-colors">{coin.name}</h3>
                                    <p className="text-sm text-muted-foreground mb-4">{coin.era}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-primary">{coin.price}</span>
                                        <span className="text-xs px-2 py-0.5 bg-white/5 rounded text-zinc-400">{coin.grade}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
          </div>
      </div>
    </main>
  )
}
