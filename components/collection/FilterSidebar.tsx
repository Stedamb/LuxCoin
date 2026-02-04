"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const filters = {
  era: ["Roman Empire", "Ancient Greece", "Medieval Europe", "Bizantine"],
  metal: ["Gold", "Silver", "Bronze", "Electrum"],
  grade: ["FDC (Fior di Conio)", "SPL (Splendido)", "BB (Bellissimo)", "MB (Molto Bello)"],
}

export function FilterSidebar() {
  return (
    <aside className="w-64 space-y-8 pr-6 hidden md:block">
      <div>
        <h3 className="text-lg font-serif font-bold text-foreground mb-4">Filtra per</h3>
        <Button variant="outline" size="sm" className="w-full justify-between mb-6 text-xs h-8">
            Reset Filtri
        </Button>

        <div className="space-y-6">
          {/* Eras */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Epoca</h4>
            <div className="space-y-2">
              {filters.era.map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <Checkbox id={`era-${item}`} />
                  <Label htmlFor={`era-${item}`} className="text-sm text-foreground/80 font-normal cursor-pointer hover:text-primary transition-colors">
                    {item}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-white/5" />

          {/* Metals */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Metallo</h4>
            <div className="space-y-2">
              {filters.metal.map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <Checkbox id={`metal-${item}`} />
                  <Label htmlFor={`metal-${item}`} className="text-sm text-foreground/80 font-normal cursor-pointer hover:text-primary transition-colors">
                    {item}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-white/5" />

          {/* Grades */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Conservazione</h4>
            <div className="space-y-2">
              {filters.grade.map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <Checkbox id={`grade-${item}`} />
                  <Label htmlFor={`grade-${item}`} className="text-sm text-foreground/80 font-normal cursor-pointer hover:text-primary transition-colors">
                    {item}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
