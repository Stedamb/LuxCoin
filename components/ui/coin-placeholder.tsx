import React from "react"
import { cn } from "@/lib/utils"

interface CoinPlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl"
}

export const CoinPlaceholder = React.forwardRef<HTMLDivElement, CoinPlaceholderProps>(
  ({ className, size = "md", ...props }, ref) => {
    const sizeClasses = {
      sm: "w-10 h-10",
      md: "w-24 h-24",
      lg: "w-32 h-32",
      xl: "w-40 h-40",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-full bg-linear-to-br from-amber-600 to-yellow-800 shadow-2xl relative z-10 flex items-center justify-center transition-transform duration-500",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 bg-black/10 rounded-full" />
        <div className="absolute inset-2 border border-white/20 rounded-full" />
        <div className="relative z-20 flex items-center justify-center">
           {/* You can add an icon here if needed in the future */}
        </div>
      </div>
    )
  }
)

CoinPlaceholder.displayName = "CoinPlaceholder"
