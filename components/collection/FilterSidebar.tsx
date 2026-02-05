"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

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
}

export function FilterSidebar({ 
  categories,
  periods,
  materials,
  conditions,
  selectedFilters, 
  onFilterChange, 
  onReset 
}: FilterSidebarProps) {
  return (
    <aside className="w-64 space-y-8 pr-6 hidden md:block shrink-0">
      <div>
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-serif font-bold text-foreground">Filtra per</h3>
             <Button variant="ghost" size="sm" onClick={onReset} className="h-auto p-0 text-xs text-muted-foreground hover:text-primary">
                Reset
            </Button>
        </div>
        
        <div className="space-y-6">
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
      </div>
    </aside>
  )
}
