"use client"

import { Navbar } from "@/components/layout/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CountdownTimer } from "@/components/auctions/CountdownTimer"
import { ExternalLink, Gavel } from "lucide-react"
import Link from "next/link"

// Mock Auction Data
const auctions = [
  {
    id: 1,
    title: "Rare Aureus of Nero - Jupiter Custos",
    currentBid: 5400,
    endDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 60 * 30), // 2 days 30 mins from now
    bids: 18,
    imageGradient: "from-amber-600 to-yellow-800",
    ebayLink: "https://www.ebay.com",
    description: "An exceptional example of Nero's coinage. High relief, centered strike, and underlying luster."
  },
  {
    id: 2,
    title: "Tetradrachm of Syracuse - Arethusa",
    currentBid: 12500,
    endDate: new Date(Date.now() + 1000 * 60 * 60 * 5), // 5 hours from now
    bids: 42,
    imageGradient: "from-slate-400 to-gray-600",
    ebayLink: "https://www.ebay.com",
    description: "Masterpiece of Greek engraving. Signed by the artist Kimon. A museum clarity piece."
  },
  {
    id: 3,
    title: "Gold Solidus of Constantine II",
    currentBid: 2100,
    endDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5), // 5 days from now
    bids: 8,
    imageGradient: "from-yellow-300 to-yellow-500",
    ebayLink: "https://www.ebay.com",
    description: "Mint state preservation. Sharp details on the emperor's diadem and cuirass."
  },
  {
    id: 4,
    title: "Byzantine Histamenon Nomisma",
    currentBid: 890,
    endDate: new Date(Date.now() + 1000 * 60 * 45), // 45 mins from now
    bids: 12,
    imageGradient: "from-amber-200 to-orange-400",
    ebayLink: "https://www.ebay.com",
    description: "Concave gold coin depicting Christ Pantocrator. Excellent spiritual and numismatic value."
  }
]

export default function AuctionsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pb-20">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 container mx-auto px-4 text-center">
         <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-6 animate-pulse">
            <Gavel className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Aste Live</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
           Partecipa alle nostre aste esclusive su eBay. <br/> Pezzi unici, tempo limitato, opportunità irripetibili.
        </p>
      </section>

      <section className="container mx-auto px-4 max-w-5xl space-y-8">
        {auctions.map((auction) => (
            <Card key={auction.id} className="bg-card border-none overflow-hidden hover:bg-card/80 transition-all group shadow-lg">
                <CardContent className="p-0 flex flex-col md:flex-row">
                    {/* Coin Image Visual */}
                    <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden bg-black/20 flex items-center justify-center">
                         <div className={`w-40 h-40 rounded-full bg-gradient-to-br ${auction.imageGradient} shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500`}>
                             <div className="absolute inset-0 bg-black/10 rounded-full" />
                             <div className="absolute inset-2 border border-white/20 rounded-full" />
                         </div>
                         {/* Background glow */}
                         <div className={`absolute inset-0 bg-gradient-to-br ${auction.imageGradient} opacity-10 blur-3xl`} />
                    </div>

                    {/* Auction Details */}
                    <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                        <div>
                             <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-serif font-bold text-white group-hover:text-primary transition-colors">{auction.title}</h3>
                                <span className="text-xs font-bold px-2 py-1 bg-primary/20 text-primary rounded border border-primary/20 uppercase tracking-widest">
                                    Live
                                </span>
                             </div>
                             <p className="text-muted-foreground mb-6 line-clamp-2">
                                 {auction.description}
                             </p>
                        </div>
                        
                        <div className="flex flex-col xl:flex-row gap-6 items-center justify-between mt-auto pt-6 border-t border-white/5">
                            {/* Timer */}
                            <div className="flex flex-col items-center md:items-start gap-2 w-full xl:w-auto">
                                <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Termina tra</span>
                                <CountdownTimer endDate={auction.endDate} />
                            </div>

                            {/* Bid Info & Action */}
                             <div className="flex items-center justify-between w-full xl:w-auto gap-6 bg-white/5 p-4 rounded-xl border border-white/5">
                                <div>
                                    <span className="text-xs text-muted-foreground uppercase block mb-1">Offerta Corrente</span>
                                    <span className="text-2xl font-mono font-bold text-white">€ {auction.currentBid.toLocaleString()}</span>
                                    <span className="text-xs text-muted-foreground ml-2">({auction.bids} offerte)</span>
                                </div>
                                <Button asChild variant="premium" className="h-12 px-6">
                                    <Link href={auction.ebayLink} target="_blank" rel="noopener noreferrer">
                                        Fai un'Offerta <ExternalLink className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                             </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        ))}
      </section>
    </main>
  )
}
