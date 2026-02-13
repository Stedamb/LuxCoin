"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface FilterOption {
  _id: string
  title: string
  slug: { current: string }
}

interface FilterSidebarProps {
  categories: FilterOption[]
  periods: FilterOption[]
  materials: FilterOption[]
  conditions: FilterOption[]
  selectedFilters: {
    categoryIds: string[]
    periodIds: string[]
    materialIds: string[]
    conditionIds: string[]
  }
  onFilterChange: (type: string, id: string) => void
  onReset: () => void
  onClose?: () => void
}

export function FilterSidebar({ 
  categories,
  periods,
  materials,
  conditions,
  selectedFilters, 
  onFilterChange, 
  onReset,
  onClose
}: FilterSidebarProps) {
  return (
    <aside className="w-full h-full md:w-64 md:pr-6 shrink-0 flex flex-col">
      <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-serif font-bold text-foreground">Filtri</h3>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={onReset} className="h-8 px-2 text-xs text-muted-foreground hover:text-primary">
                Reset
            </Button>
          </div>
      </div>
      
      <div className="flex-1 overflow-y-auto pr-2 -mr-2 space-y-4 scrollbar-hide">
          {/* Categories */}
          {categories.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Categoria</h4>
              <div className="space-y-2">
                {categories.map((item) => (
                  <div key={item._id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`category-${item._id}`} 
                      checked={selectedFilters.categoryIds.includes(item._id)}
                      onCheckedChange={() => onFilterChange('categoryIds', item._id)}
                    />
                    <Label htmlFor={`category-${item._id}`} className="text-sm text-foreground/80 font-normal cursor-pointer hover:text-primary transition-colors">
                      {item.title}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {categories.length > 0 && <div className="h-px bg-white/5" />}

          {/* Periods */}
          {periods.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Periodo</h4>
              <div className="space-y-2">
                {periods.map((item) => (
                  <div key={item._id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`period-${item._id}`} 
                      checked={selectedFilters.periodIds.includes(item._id)}
                      onCheckedChange={() => onFilterChange('periodIds', item._id)}
                    />
                    <Label htmlFor={`period-${item._id}`} className="text-sm text-foreground/80 font-normal cursor-pointer hover:text-primary transition-colors">
                      {item.title}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {periods.length > 0 && <div className="h-px bg-white/5" />}

          {/* Materials */}
          {materials.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Materiale</h4>
              <div className="space-y-2">
                {materials.map((item) => (
                  <div key={item._id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`material-${item._id}`} 
                      checked={selectedFilters.materialIds.includes(item._id)}
                      onCheckedChange={() => onFilterChange('materialIds', item._id)}
                    />
                    <Label htmlFor={`material-${item._id}`} className="text-sm text-foreground/80 font-normal cursor-pointer hover:text-primary transition-colors">
                      {item.title}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {materials.length > 0 && <div className="h-px bg-white/5" />}

          {/* Conditions */}
          {conditions.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Condizione</h4>
              <div className="space-y-2">
                {conditions.map((item) => (
                  <div key={item._id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`condition-${item._id}`} 
                      checked={selectedFilters.conditionIds.includes(item._id)}
                      onCheckedChange={() => onFilterChange('conditionIds', item._id)}
                    />
                    <Label htmlFor={`condition-${item._id}`} className="text-sm text-foreground/80 font-normal cursor-pointer hover:text-primary transition-colors">
                      {item.title}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Apply Button for Mobile */}
        {onClose && (
          <div className="pt-6 mt-auto md:hidden">
            <Button onClick={onClose} className="w-full h-12 rounded-xl font-bold uppercase tracking-widest">
              Applica Filtri
            </Button>
          </div>
        )}
    </aside>
  )
}
