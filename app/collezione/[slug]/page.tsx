import { Navbar } from "@/components/layout/Navbar"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { client } from "@/sanity/lib/client"
import { coinBySlugQuery } from "@/sanity/lib/queries"
import { Coin } from "@/sanity/lib/types"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import { PortableTextRenderer } from "@/components/sanity/PortableTextRenderer"
import { CoinGallery } from "@/components/coin-detail/CoinGallery"

export const revalidate = 60 // Revalidate every 60 seconds

export default async function CoinPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const slug = params.slug
  
  const coin = await client.fetch<Coin>(coinBySlugQuery, { slug })

  if (!coin) {
    return notFound()
  }

  return (
    <main className="min-h-screen bg-background text-foreground pb-20">
      <Navbar />
      <div className="pt-32 container mx-auto px-4">
        
        <Link href="/collezione" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Torna alla Collezione
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-start">
          {/* Visual Section */}
          <div className="space-y-4">
            <CoinGallery 
              images={coin.images || []} 
              title={coin.title}
              coinGradient={coin.material?.title?.toLowerCase().includes('oro') ? "from-amber-400 to-amber-700" : "from-zinc-400 to-zinc-600"}
            />
          </div>

          {/* Information Section */}
          <div className="space-y-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground leading-tight">
                {coin.title}
              </h1>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                {coin.period && (
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded tracking-wider uppercase">
                    {coin.period.title}
                  </span>
                )}
                {coin.condition && (
                  <span className="px-3 py-1 bg-white/5 text-muted-foreground text-xs font-bold rounded tracking-wider uppercase">
                    {coin.condition.title}
                  </span>
                )}
                {coin.material && (
                  <span className="px-3 py-1 bg-white/5 text-muted-foreground text-xs font-bold rounded tracking-wider uppercase">
                    {coin.material.title}
                  </span>
                )}
              </div>
              {coin.price ? (
                <p className="text-3xl text-primary font-mono font-bold">
                  € {coin.price.toLocaleString('it-IT')}
                </p>
              ) : (
                <p className="text-xl text-muted-foreground">Prezzo su richiesta</p>
              )}
            </div>

            {coin.description && (
              <div className="prose prose-invert max-w-none">
                <h3 className="text-xl font-serif mb-2 text-foreground">Descrizione</h3>
                <PortableTextRenderer value={coin.description} />
              </div>
            )}


            <div className="flex flex-col gap-4 p-6 bg-primary/5 border border-primary/20 rounded-xl">
           
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-16 flex items-center justify-center gap-2 border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group" asChild>
                  <Link href="#" target="_blank">
                    <Image 
                      src="/logos/ebay.svg" 
                      alt="eBay" 
                      width={70} 
                      height={28} 
                      className="opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </Button>
                <Button variant="outline" className="h-16 flex items-center justify-center gap-2 border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group" asChild>
                  <Link href="#" target="_blank">
                    <Image 
                      src="/logos/vinted.svg" 
                      alt="Vinted" 
                      width={70} 
                      height={28} 
                      className="opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </Button>
              </div>
                 <Button variant="premium" className="w-full text-lg py-6">
                Richiedi Informazioni
              </Button>
            </div>

            <div>
              <h3 className="text-xl font-serif mb-4 text-foreground">Scheda Tecnica</h3>
              <div className="border border-white/10 rounded-lg overflow-hidden bg-card/20">
                {[
                  { label: "Categoria", value: coin.category?.title },
                  { label: "Periodo", value: coin.period?.title },
                  { label: "Anno", value: coin.year },
                  { label: "Materiale", value: coin.material?.title },
                  { label: "Condizione", value: coin.condition?.title },
                  { label: "Peso", value: coin.weight },
                  { label: "Diametro", value: coin.diameter },
                  { label: "Riferimento", value: `LUX-${coin._id.slice(-6).toUpperCase()}` },
                ].filter(row => row.value).map((row, i) => (
                  <div key={i} className="flex justify-between p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                    <span className="text-muted-foreground">{row.label}</span>
                    <span className="font-medium text-foreground">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}
