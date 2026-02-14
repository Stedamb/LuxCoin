import { cn } from "@/lib/utils"

interface LogoCompactProps {
  className?: string
}

export function LogoCompact({ className }: LogoCompactProps) {
  return (
    <svg 
      viewBox="0 0 52 53" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto w-auto", className)}
    >
      <path 
        d="M3.84 1.68H10.704V29.136H21.6V36H3.84V1.68Z" 
        fill="currentColor"
      />
      <path 
        d="M22.32 23.648C23.616 22.976 25.296 22.16 28.272 22.16C41.856 22.16 41.856 43.088 28.272 43.088C25.296 43.088 22.944 42.224 21.648 41.552L20.736 48.656C22.848 49.52 25.872 50.096 28.272 50.096C51.552 50.096 51.504 15.248 28.272 15.248C25.872 15.248 23.568 15.68 21.504 16.592L22.32 23.648Z" 
        fill="currentColor"
      />
    </svg>
  )
}
