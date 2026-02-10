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
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Visual Section */}
          <div className="space-y-4">
            {coin.images && coin.images.length > 0 ? (
              <div className="aspect-square rounded-lg bg-zinc-900 overflow-hidden relative">
                <Image
                  src={urlFor(coin.images[0]).width(800).height(800).url()}
                  alt={coin.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <div className="aspect-square rounded-lg bg-zinc-900 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 shadow-2xl relative flex items-center justify-center">
                  <div className="absolute inset-4 border-2 border-white/20 rounded-full" />
                </div>
              </div>
            )}
            
            {/* Thumbnail Gallery */}
            {coin.images && coin.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {coin.images.slice(1, 5).map((image, idx) => (
                  <div key={idx} className="aspect-square rounded-lg bg-zinc-900 overflow-hidden relative cursor-pointer hover:ring-2 ring-primary transition-all">
                    <Image
                      src={urlFor(image).width(200).height(200).url()}
                      alt={`${coin.title} - ${idx + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Information Section */}
          <div className="space-y-10">
            <div>
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
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white leading-tight">
                {coin.title}
              </h1>
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

            <div className="flex flex-col gap-4 p-6 bg-primary/5 border border-primary/20 rounded-xl">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground">Certificato di Autenticità</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Ogni moneta è accompagnata da un certificato di autenticità a vita e documentazione storica completa.
                  </p>
                </div>
              </div>
              <Button variant="premium" className="w-full mt-2 text-lg py-6">
                Richiedi Informazioni
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
