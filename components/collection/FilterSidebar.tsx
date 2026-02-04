"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const filterOptions = {
  period: ["Roman Empire", "Roman Republic", "Greek", "Byzantine", "Medieval"],
  material: ["Gold", "Silver", "Bronze"],
  grade: ["FDC", "SPL", "BB", "MB"],
}

interface FilterSidebarProps {
  selectedFilters: {
    period: string[];
    material: string[];
    grade: string[];
  };
  onFilterChange: (type: string, value: string) => void;
  onReset: () => void;
}

export function FilterSidebar({ selectedFilters, onFilterChange, onReset }: FilterSidebarProps) {
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
          {/* Eras */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Epoca</h4>
            <div className="space-y-2">
              {filterOptions.period.map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`period-${item}`} 
                    checked={selectedFilters.period.includes(item)}
                    onCheckedChange={() => onFilterChange('period', item)}
                  />
                  <Label htmlFor={`period-${item}`} className="text-sm text-foreground/80 font-normal cursor-pointer hover:text-primary transition-colors">
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
              {filterOptions.material.map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`material-${item}`} 
                    checked={selectedFilters.material.includes(item)}
                    onCheckedChange={() => onFilterChange('material', item)}
                  />
                  <Label htmlFor={`material-${item}`} className="text-sm text-foreground/80 font-normal cursor-pointer hover:text-primary transition-colors">
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
              {filterOptions.grade.map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`grade-${item}`} 
                    checked={selectedFilters.grade.includes(item)}
                    onCheckedChange={() => onFilterChange('grade', item)}
                  />
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
