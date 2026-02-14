"use client"

import * as React from "react"
import { FilterSidebar } from "@/components/collection/FilterSidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { Coin } from "@/sanity/lib/types"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import { CoinPlaceholder } from "@/components/ui/coin-placeholder"
import { motion, AnimatePresence } from "framer-motion"

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
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = React.useState(false)
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
    <div className="relative">
      {/* Sidebar Overlay for Mobile */}
      <AnimatePresence>
        {isFilterSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-100 lg:hidden"
            />
            
            {/* Close Button Outside at top right of viewport */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setIsFilterSidebarOpen(false)}
              className="fixed top-6 right-6 z-110 lg:hidden h-12 w-12 rounded-full bg-background/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-primary shadow-2xl"
            >
              <SlidersHorizontal className="h-5 w-5 rotate-180" />
              <div className="absolute -top-1 -right-1 h-5 w-5 bg-primary text-[10px] text-primary-foreground font-bold flex items-center justify-center rounded-full border-2 border-background">
                <X className="h-3 w-3" />
              </div>
            </motion.button>

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-[300px] bg-background border-r border-white/10 z-100 p-6 lg:hidden flex flex-col"
            >
              <FilterSidebar 
                categories={categories}
                periods={periods}
                materials={materials}
                conditions={conditions}
                selectedFilters={selectedFilters}
                onFilterChange={handleFilterChange}
                onReset={resetFilters}
                onClose={() => setIsFilterSidebarOpen(false)}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="flex gap-8">
        {/* Persistent Sidebar for Desktop */}
        <div className="hidden lg:block">
          <FilterSidebar 
            categories={categories}
            periods={periods}
            materials={materials}
            conditions={conditions}
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
            onReset={resetFilters}
          />
        </div>
        
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-start justify-between md:mb-8 pb-8 border-b border-white/5 gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">
                Catalogo {itemType === 'antiquity' ? 'Antichità' : 'Monete'}
              </h1>
              <p className="text-muted-foreground">
                {filteredCoins.length} {itemLabel} trovate su {initialCoins.length} disponibili.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end w-full max-w-sm gap-4">
              {/* Search Bar */}
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder={`Cerca ${itemLabelSingular}...`} 
                  className="pl-9 bg-card/40 border-white/10 focus-visible:ring-primary h-11 rounded-xl"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Filter Button - Shows on Mobile */}
              <Button 
                variant="link" 
                onClick={() => setIsFilterSidebarOpen(true)}
                className="lg:hidden w-full h-11 rounded-xl text-primary mt-2 gap-2 font-medium"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filtri {(selectedFilters.categoryIds.length + selectedFilters.periodIds.length + selectedFilters.materialIds.length + selectedFilters.conditionIds.length) > 0 && 
                  `(${(selectedFilters.categoryIds.length + selectedFilters.periodIds.length + selectedFilters.materialIds.length + selectedFilters.conditionIds.length)})`}
              </Button>
            </div>
          </div>

          {filteredCoins.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCoins.map((coin) => (
                <Link 
                  href={`/collezione/${coin.slug.current}`} 
                  key={coin._id} 
                  className="block group h-full"
                >
                  <Card className="bg-card/40 backdrop-blur-sm border-white/5 shadow-sm hover:bg-card/60 transition-all hover:-translate-y-1 h-full flex flex-col group overflow-hidden">
                    <CardContent className="p-0 flex-1 flex flex-col">
                      <div className="aspect-square bg-zinc-900 flex items-center justify-center relative overflow-hidden shrink-0">
                        {coin.images?.[0] ? (
                          <Image
                            src={urlFor(coin.images[0]).width(600).height(600).url()}
                            alt={coin.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <CoinPlaceholder size="lg" />
                        )}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        
                        {/* Material Badge */}
                        {coin.material && (
                          <div className="absolute top-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] uppercase tracking-widest text-white border border-white/10">
                            {coin.material.title}
                          </div>
                        )}
                      </div>
                      
                      <div className="p-5 space-y-3 flex-1 flex flex-col">
                        <div className="space-y-1">
                          <div className="flex justify-between items-start">
                            <p className="text-[10px] text-primary uppercase tracking-[0.2em] font-bold">
                              {coin.period?.title || coin.category?.title || 'Oggetto'}
                            </p>
                            {coin.year && (
                              <span className="text-[10px] px-1.5 py-0.5 bg-white/5 rounded text-zinc-400 font-mono">
                                {coin.year}
                              </span>
                            )}
                          </div>
                          <h3 className="font-serif font-bold text-xl leading-tight group-hover:text-primary transition-colors">
                            {coin.title}
                          </h3>
                        </div>
                        
                        <div className="mt-auto pt-4 flex justify-between items-center border-t border-white/5">
                          {coin.price ? (
                            <div className="flex flex-col">
                              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Valutazione</span>
                              <span className="font-bold text-xl text-primary">€ {coin.price.toLocaleString('it-IT')}</span>
                            </div>
                          ) : (
                            <span className="text-sm text-muted-foreground italic">Prezzo su richiesta</span>
                          )}
                          {coin.condition && (
                            <span className="text-[10px] px-2 py-1 bg-white/5 rounded text-zinc-300 border border-white/10 uppercase tracking-widest">
                              {coin.condition.title}
                            </span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/5 mb-4">
                <Search className="h-6 w-6 text-muted-foreground" />
              </div>
              <p className="text-xl font-serif mb-2 text-foreground">Nessun risultato</p>
              <p className="text-muted-foreground max-w-xs mx-auto mb-6">{notFoundMessage}</p>
              <Button variant="premium" onClick={resetFilters}>
                Resetta tutti i filtri
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
