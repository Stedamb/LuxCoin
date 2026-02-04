"use client"

import * as React from "react"
import { Navbar } from "@/components/layout/Navbar"
import { FilterSidebar } from "@/components/collection/FilterSidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Search } from "lucide-react"
import { coinsData, type Coin } from "@/lib/coins"

export default function CollectionPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedFilters, setSelectedFilters] = React.useState<{
    period: string[];
    material: string[];
    grade: string[];
  }>({
    period: [],
    material: [],
    grade: [],
  })

  // Filter Logic
  const filteredCoins = React.useMemo(() => {
    return coinsData.filter((coin) => {
      // 1. Search Query Filter
      const searchContent = `${coin.name} ${coin.emperor || ""} ${coin.description} ${coin.year}`.toLowerCase()
      const matchesSearch = searchContent.includes(searchQuery.toLowerCase())

      // 2. Sidebar Filters
      const matchesPeriod = selectedFilters.period.length === 0 || selectedFilters.period.includes(coin.period)
      const matchesMaterial = selectedFilters.material.length === 0 || selectedFilters.material.includes(coin.material)
      const matchesGrade = selectedFilters.grade.length === 0 || selectedFilters.grade.includes(coin.grade)

      return matchesSearch && matchesPeriod && matchesMaterial && matchesGrade
    })
  }, [searchQuery, selectedFilters])

  const handleFilterChange = (type: string, value: string) => {
    setSelectedFilters((prev) => {
      const current = prev[type as keyof typeof prev]
      const updated = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]
      
      return { ...prev, [type]: updated }
    })
  }

  const resetFilters = () => {
    setSelectedFilters({
      period: [],
      material: [],
      grade: [],
    })
    setSearchQuery("")
  }

  return (
    <main className="min-h-screen bg-background text-foreground pb-20">
      <Navbar />
      <div className="pt-32 container mx-auto px-4">
          <div className="flex gap-8">
            <FilterSidebar 
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
              onReset={resetFilters}
            />
            
            <div className="flex-1">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 pb-4 border-b border-white/5 gap-4">
                    <div>
                        <h1 className="text-4xl font-serif font-bold mb-2">Catalogo</h1>
                        <p className="text-muted-foreground">
                          {filteredCoins.length} monete trovate su {coinsData.length} disponibili.
                        </p>
                    </div>
                    
                    <div className="flex w-full md:w-auto items-center gap-4">
                      {/* Search Bar */}
                      <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input 
                          placeholder="Cerca moneta, imperatore..." 
                          className="pl-9 bg-card/50 border-white/10 focus-visible:ring-primary"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                      <Button variant="outline" size="sm" className="shrink-0 h-9">Ordina per: Rilevanza</Button>
                    </div>
                </div>

                {filteredCoins.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredCoins.map((coin) => (
                          <Link href={`/collection/${coin.id}`} key={coin.id} className="block group h-full">
                              <Card className="bg-card border-none shadow-sm hover:bg-card/80 transition-all hover:-translate-y-1 h-full flex flex-col">
                                  <CardContent className="p-4 flex-1 flex flex-col">
                                      <div className="aspect-square rounded-lg bg-zinc-900 mb-4 flex items-center justify-center relative overflow-hidden shrink-0">
                                          <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${coin.imageGradient} shadow-2xl relative flex items-center justify-center`}>
                                            <div className="absolute inset-2 border border-white/20 rounded-full" />
                                          </div>
                                          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                      </div>
                                      
                                      <div className="space-y-1 mb-3">
                                        <div className="flex justify-between items-start">
                                          <p className="text-xs text-primary uppercase tracking-wider font-semibold">{coin.period}</p>
                                          {coin.emperor && <span className="text-[10px] px-1.5 py-0.5 bg-white/5 rounded text-zinc-400">{coin.emperor}</span>}
                                        </div>
                                        <h3 className="font-serif font-bold text-lg leading-tight group-hover:text-primary transition-colors">{coin.name}</h3>
                                        <p className="text-sm text-muted-foreground line-clamp-2">{coin.description}</p>
                                      </div>
                                      
                                      <div className="mt-auto pt-4 flex justify-between items-center border-t border-white/5 w-full">
                                          <span className="font-bold text-lg">€ {coin.price.toLocaleString('it-IT')}</span>
                                          <span className="text-xs px-2 py-0.5 bg-white/5 rounded text-zinc-400 border border-white/5">{coin.grade}</span>
                                      </div>
                                  </CardContent>
                              </Card>
                          </Link>
                      ))}
                  </div>
                ) : (
                  <div className="py-20 text-center text-muted-foreground">
                    <p className="text-lg">Nessuna moneta trovata che corrisponde ai criteri di ricerca.</p>
                    <Button variant="link" onClick={resetFilters} className="mt-2 text-primary">Reset Filtri</Button>
                  </div>
                )}
            </div>
          </div>
      </div>
    </main>
  )
}
