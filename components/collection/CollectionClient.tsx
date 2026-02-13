"use client"

import * as React from "react"
import { FilterSidebar } from "@/components/collection/FilterSidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Search } from "lucide-react"
import { Coin } from "@/sanity/lib/types"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import { CoinPlaceholder } from "@/components/ui/coin-placeholder"

interface FilterOption {
  _id: string
  title: string
  slug: { current: string }
}

interface CollectionClientProps {
  initialCoins: Coin[]
  categories: FilterOption[]
  periods: FilterOption[]
  materials: FilterOption[]
  conditions: FilterOption[]
  itemType?: 'coin' | 'antiquity'
}

export function CollectionClient({
  initialCoins,
  categories,
  periods,
  materials,
  conditions,
  itemType = 'coin'
}: CollectionClientProps) {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedFilters, setSelectedFilters] = React.useState<{
    categoryIds: string[]
    periodIds: string[]
    materialIds: string[]
    conditionIds: string[]
  }>({
    categoryIds: [],
    periodIds: [],
    materialIds: [],
    conditionIds: [],
  })

  // Labels based on itemType
  const itemLabel = itemType === 'coin' ? 'monete' : 'antichità'
  const itemLabelSingular = itemType === 'coin' ? 'moneta' : 'antichità'
  const notFoundMessage = itemType === 'coin' 
    ? 'Nessuna moneta trovata che corrisponde ai criteri di ricerca.' 
    : 'Nessuna antichità trovata che corrisponde ai criteri di ricerca.'

  // Filter Logic
  const filteredCoins = React.useMemo(() => {
    return initialCoins.filter((coin) => {
      // 1. Search Query Filter
      const searchContent = `${coin.title} ${coin.year || ""} ${coin.category?.title || ""} ${coin.period?.title || ""}`.toLowerCase()
      const matchesSearch = searchContent.includes(searchQuery.toLowerCase())

      // 2. Sidebar Filters
      const matchesCategory = selectedFilters.categoryIds.length === 0 || 
        (coin.category && selectedFilters.categoryIds.includes(coin.category._id))
      
      const matchesPeriod = selectedFilters.periodIds.length === 0 || 
        (coin.period && selectedFilters.periodIds.includes(coin.period._id))
      
      const matchesMaterial = selectedFilters.materialIds.length === 0 || 
        (coin.material && selectedFilters.materialIds.includes(coin.material._id))
      
      const matchesCondition = selectedFilters.conditionIds.length === 0 || 
        (coin.condition && selectedFilters.conditionIds.includes(coin.condition._id))

      return matchesSearch && matchesCategory && matchesPeriod && matchesMaterial && matchesCondition
    })
  }, [searchQuery, selectedFilters, initialCoins])

  const handleFilterChange = (type: string, id: string) => {
    setSelectedFilters((prev) => {
      const current = prev[type as keyof typeof prev]
      const updated = current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
      
      return { ...prev, [type]: updated }
    })
  }

  const resetFilters = () => {
    setSelectedFilters({
      categoryIds: [],
      periodIds: [],
      materialIds: [],
      conditionIds: [],
    })
    setSearchQuery("")
  }

  return (
    <div className="flex gap-8">
      <FilterSidebar 
        categories={categories}
        periods={periods}
        materials={materials}
        conditions={conditions}
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
        onReset={resetFilters}
      />
      
      <div className="flex-1">
        <div className="flex flex-col md:flex-row justify-between items-end mb-4 pb-4 border-b border-white/5 gap-4">
          <div className="flex flex-col w-full items-center gap-2">
            <h1 className="text-4xl font-serif font-bold mb-2">Catalogo {itemType === 'antiquity' ? 'Antichità' : 'Monete'}</h1>
            <p className="text-muted-foreground">
              {filteredCoins.length} {itemLabel} trovate su {initialCoins.length} disponibili.
            </p>
          </div>
          
          <div className="flex w-full md:w-auto items-center gap-4">
            {/* Search Bar */}
            <div className="relative w-4/5 mx-auto md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder={`Cerca ${itemLabelSingular}...`} 
                className="pl-9 bg-card/50 border-white/10 focus-visible:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {filteredCoins.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCoins.map((coin) => (
              <Link 
                href={`/collezione/${coin.slug.current}`} 
                key={coin._id} 
                className="block group h-full"
              >
                <Card className="bg-card border-none shadow-sm hover:bg-card/80 transition-all hover:-translate-y-1 h-full flex flex-col">
                  <CardContent className="p-4 flex-1 flex flex-col">
                    <div className="aspect-square rounded-lg bg-zinc-900 mb-4 flex items-center justify-center relative overflow-hidden shrink-0">
                      {coin.images?.[0] ? (
                        <Image
                          src={urlFor(coin.images[0]).width(400).height(400).url()}
                          alt={coin.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <CoinPlaceholder size="lg" />
                      )}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    </div>
                    
                    <div className="space-y-1 mb-3">
                      <div className="flex justify-between items-start">
                        <p className="text-xs text-primary uppercase tracking-wider font-semibold">
                          {coin.period?.title || coin.category?.title || 'Oggetto'}
                        </p>
                        {coin.year && (
                          <span className="text-[10px] px-1.5 py-0.5 bg-white/5 rounded text-zinc-400">
                            {coin.year}
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                        {coin.title}
                      </h3>
                      {coin.category && (
                        <p className="text-sm text-muted-foreground">
                          {coin.category.title}
                        </p>
                      )}
                    </div>
                    
                    <div className="mt-auto pt-4 flex justify-between items-center border-t border-white/5 w-full">
                      {coin.price ? (
                        <span className="font-bold text-lg">€ {coin.price.toLocaleString('it-IT')}</span>
                      ) : (
                        <span className="text-sm text-muted-foreground">Prezzo su richiesta</span>
                      )}
                      {coin.condition && (
                        <span className="text-xs px-2 py-0.5 bg-white/5 rounded text-zinc-400 border border-white/5">
                          {coin.condition.title}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-muted-foreground">
            <p className="text-lg">{notFoundMessage}</p>
            <Button variant="link" onClick={resetFilters} className="mt-2 text-primary">
              Reset Filtri
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
