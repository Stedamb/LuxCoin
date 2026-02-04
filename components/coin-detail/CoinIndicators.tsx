import { MotionDiv } from "@/components/ui/motion"
import { Info } from "lucide-react"

interface IndicatorBarProps {
  label: string;
  value: number;
  max: number;
  colorClass: string;
  bgClass: string;
}

function IndicatorBar({ label, value, max, colorClass, bgClass }: IndicatorBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="font-bold text-foreground text-sm">{label}</span>
        <Info className="w-3.5 h-3.5 text-muted-foreground" />
      </div>
      <div className="h-10 w-full bg-secondary/50 rounded overflow-hidden relative flex items-center">
        {/* Progress Bar */}
        <MotionDiv 
          className={`h-full ${colorClass} absolute left-0 top-0`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
         {/* Background Tint */}
        <div className={`absolute inset-0 ${bgClass} opacity-20`} />

        {/* Value Text - Centered properly */}
        <span className="relative z-10 w-full text-center font-bold text-white drop-shadow-md">
            {value}/{max}
        </span>
      </div>
    </div>
  )
}

interface CoinIndicatorsProps {
  indicators: {
    preservation: { value: number; max: number };
    rarity: { value: number; max: number };
    metal: { value: number; max: number };
    strike: { value: number; max: number };
  }
}

export function CoinIndicators({ indicators }: CoinIndicatorsProps) {
  return (
    <div className="space-y-5 p-6 rounded-xl border border-border bg-card/30">
      <IndicatorBar 
        label="Conservazione" 
        value={indicators.preservation.value} 
        max={indicators.preservation.max}
        colorClass="bg-[#8B4545]" // Brown/Reddish
        bgClass="bg-[#8B4545]"
      />
      <IndicatorBar 
        label="Rarità" 
        value={indicators.rarity.value} 
        max={indicators.rarity.max}
        colorClass="bg-[#3b82f6]" // Blue
        bgClass="bg-[#3b82f6]"
      />
      <IndicatorBar 
        label="Metallo e Patina" 
        value={indicators.metal.value} 
        max={indicators.metal.max}
        colorClass="bg-[#525252]" // Gray
        bgClass="bg-[#525252]"
      />
      <IndicatorBar 
        label="Coniazione" 
        value={indicators.strike.value} 
        max={indicators.strike.max}
        colorClass="bg-[#fbbf24]" // Yellow/Gold
        bgClass="bg-[#fbbf24]"
      />
    </div>
  )
}
