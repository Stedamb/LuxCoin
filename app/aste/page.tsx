import { Navbar } from "@/components/layout/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CountdownTimer } from "@/components/auctions/CountdownTimer"
import { ExternalLink, Gavel, Calendar } from "lucide-react"
import Link from "next/link"
import { client } from "@/sanity/lib/client"
import { upcomingAuctionsQuery, auctionsQuery } from "@/sanity/lib/queries"
import { Auction } from "@/sanity/lib/types"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import { CoinPlaceholder } from "@/components/ui/coin-placeholder"

export const revalidate = 60 // Revalidate every 60 seconds

export default async function AuctionsPage() {
  // Fetch upcoming auctions
  const upcomingAuctions = await client.fetch<Auction[]>(upcomingAuctionsQuery)
  
  // Fetch past auctions
  const pastAuctions = await client.fetch<Auction[]>(`*[_type == "auction" && endDate < now()] | order(startDate desc)`)

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
           Partecipa alle nostre aste esclusive. <br/> Pezzi unici, tempo limitato, opportunità irripetibili.
        </p>
      </section>

      {/* Upcoming Auctions */}
      <section className="container mx-auto px-4 max-w-5xl space-y-8 mb-20">
        <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-white/10 flex-1" />
            <span className="text-xl font-serif text-primary uppercase tracking-wider">Aste in Corso</span>
            <div className="h-px bg-white/10 flex-1" />
        </div>

        {upcomingAuctions.length > 0 ? (
          upcomingAuctions.map((auction) => (
            <Card key={auction._id} className="bg-card border-none overflow-hidden hover:bg-card/80 transition-all group shadow-lg">
                <CardContent className="p-0 flex flex-col md:flex-row">
                    {/* Visual Section */}
                    <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden bg-black/20 flex items-center justify-center">
                         {auction.mainImage ? (
                           <div className="relative w-full h-full">
                             <Image
                               src={urlFor(auction.mainImage).url()}
                               alt={auction.title}
                               fill
                               className="object-cover transition-transform duration-500 group-hover:scale-105"
                             />
                             <div className="absolute inset-0 bg-black/20" />
                           </div>
                         ) : (
                           <CoinPlaceholder size="xl" className="group-hover:scale-105" />
                         )}
                    </div>

                    {/* Auction Details */}
                    <div className="md:w-2/3 p-6 md:p-8 flex flex-col justification-between">
                        <div className="flex-1">
                             <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">{auction.title}</h3>
                                <span className="text-xs font-bold px-2 py-1 bg-background text-foreground rounded border border-primary/20 uppercase tracking-widest animate-pulse">
                                    Live
                                </span>
                             </div>
                             <p className="text-muted-foreground mb-6 line-clamp-3">
                                 {auction.description}
                             </p>
                        </div>
                        
                        <div className="flex flex-col xl:flex-row gap-6 items-center justify-between pt-6 border-t border-white/5">
                            {/* Timer */}
                            {auction.endDate && (
                              <div className="flex flex-col items-center md:items-start gap-2 w-full xl:w-auto">
                                  <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Termina tra</span>
                                  <CountdownTimer endDate={new Date(auction.endDate)} />
                              </div>
                            )}

                            {/* Action */}
                             <div className="flex items-center justify-end w-full xl:w-auto gap-6">
                                {auction.link ? (
                                  <Button asChild variant="premium" className="h-12 px-6 w-full xl:w-auto">
                                      <Link href={auction.link} target="_blank" rel="noopener noreferrer">
                                          Partecipa all'Asta <ExternalLink className="ml-2 w-4 h-4" />
                                      </Link>
                                  </Button>
                                ) : (
                                  <Button disabled variant="outline" className="h-12 px-6 w-full xl:w-auto border-white/10 text-muted-foreground">
                                    Link non disponibile
                                  </Button>
                                )}
                             </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center py-12 bg-card/30 rounded-lg border border-white/5">
            <p className="text-muted-foreground text-lg mb-2">Non ci sono aste attive al momento.</p>
            <p className="text-sm text-muted-foreground/60">Controlla più tardi o visualizza l'archivio delle aste passate.</p>
          </div>
        )}
      </section>

      {/* Past Auctions */}
      {pastAuctions.length > 0 && (
        <section className="container mx-auto px-4 max-w-5xl space-y-8">
          <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-white/10 flex-1" />
              <span className="text-xl font-serif text-muted-foreground uppercase tracking-wider">Aste Concluse</span>
              <div className="h-px bg-white/10 flex-1" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 opacity-60 hover:opacity-100 transition-opacity">
            {pastAuctions.map((auction) => (
               <Card key={auction._id} className="bg-card border-none hover:bg-card/80 transition-colors">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-24 h-24 shrink-0 bg-black/20 rounded-md overflow-hidden relative">
                        {auction.mainImage ? (
                           <Image
                             src={urlFor(auction.mainImage).width(200).height(200).url()}
                             alt={auction.title}
                             fill
                             className="object-cover grayscale"
                           />
                         ) : (
                           <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                             <Gavel className="w-8 h-8 text-zinc-600" />
                           </div>
                         )}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg mb-2 text-zinc-300">{auction.title}</h4>
                      <div className="flex items-center text-sm text-zinc-500 mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(auction.endDate!).toLocaleDateString('it-IT', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      {auction.link && (
                        <Link href={auction.link} target="_blank" className="text-sm text-primary hover:underline">
                          Vedi risultati
                        </Link>
                      )}
                    </div>
                  </CardContent>
               </Card>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
