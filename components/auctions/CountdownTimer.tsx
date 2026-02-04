"use client"

import { useEffect, useState } from "react"
import { Timer } from "lucide-react"

interface CountdownTimerProps {
  endDate: Date
}

export function CountdownTimer({ endDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number
    hours: number
    minutes: number
    seconds: number
  } | null>(null)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +endDate - +new Date()
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }
      return null
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [endDate])

  if (!timeLeft) {
    return <span className="text-red-500 font-bold">Scaduta</span>
  }

  return (
    <div className="flex items-center gap-4 font-mono text-lg bg-black/40 px-4 py-2 rounded-lg border border-primary/20">
      <Timer className="w-5 h-5 text-primary animate-pulse" />
      <div className="flex gap-2">
        <div className="flex flex-col items-center">
            <span className="font-bold text-white">{timeLeft.days}</span>
            <span className="text-[10px] uppercase text-muted-foreground">qq</span>
        </div>
        <span className="text-primary">:</span>
        <div className="flex flex-col items-center">
            <span className="font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="text-[10px] uppercase text-muted-foreground">hh</span>
        </div>
        <span className="text-primary">:</span>
        <div className="flex flex-col items-center">
            <span className="font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="text-[10px] uppercase text-muted-foreground">mm</span>
        </div>
        <span className="text-primary">:</span>
        <div className="flex flex-col items-center">
            <span className="font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="text-[10px] uppercase text-muted-foreground">ss</span>
        </div>
      </div>
    </div>
  )
}
