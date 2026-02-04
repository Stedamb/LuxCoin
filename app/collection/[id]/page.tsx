import { Navbar } from "@/components/layout/Navbar"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { coinsData } from "@/lib/coins"
import { notFound } from "next/navigation"
import { CoinGallery } from "@/components/coin-detail/CoinGallery"
import { CoinIndicators } from "@/components/coin-detail/CoinIndicators"

export default async function CoinPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const coin = coinsData.find((c) => c.id === id);

  if (!coin) {
      return notFound();
  }

  // Default indicators if missing (safeguard for older mocks if any)
  const indicators = coin.indicators || {
    preservation: { value: 50, max: 70 },
    rarity: { value: 50, max: 100 },
    metal: { value: 90, max: 100 },
    strike: { value: 80, max: 100 }
  };

  return (
    <main className="min-h-screen bg-background text-foreground pb-20">
      <Navbar />
      <div className="pt-32 container mx-auto px-4">
        
        <Link href="/collection" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Torna alla Collezione
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Visual Section */}
            <CoinGallery coinGradient={coin.imageGradient} />

            {/* Information Section */}
            <div className="space-y-10">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded tracking-wider uppercase">{coin.period}</span>
                        <span className="px-3 py-1 bg-white/5 text-muted-foreground text-xs font-bold rounded tracking-wider uppercase">{coin.grade} Grade</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white leading-tight">{coin.name}</h1>
                    <p className="text-3xl text-primary font-mono font-bold">€ {coin.price.toLocaleString('it-IT')}</p>
                </div>

                <div className="prose prose-invert max-w-none">
                    <h3 className="text-xl font-serif mb-2 text-foreground">Storytelling</h3>
                    <p className="text-gray-400 leading-relaxed text-lg font-light">
                        {coin.description} Questa moneta straordinaria rappresenta un momento cruciale nella storia. 
                        I dettagli sono eccezionalmente conservati, permettendo di apprezzare la maestria degli antichi incisori. 
                        Un pezzo di storia che ha viaggiato attraverso i secoli.
                    </p>
                </div>

                {/* Indicators Section */}
                {/* <div className="space-y-4">
                    <h3 className="text-xl font-serif text-foreground">Analisi Esperta</h3>
                    <CoinIndicators indicators={indicators} />
                </div> */}

                <div>
                    <h3 className="text-xl font-serif mb-4 text-foreground">Scheda Tecnica</h3>
                    <div className="border border-white/10 rounded-lg overflow-hidden bg-card/20">
                        {[
                            { label: "Epoca", value: coin.period },
                            { label: "Anno", value: coin.year },
                            { label: "Metallo", value: coin.material },
                            { label: "Riferimento", value: `LUX-${coin.id.toUpperCase().slice(-6)}` },
                        ].map((row, i) => (
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
                            <p className="text-sm text-muted-foreground mt-1">Ogni moneta è accompagnata da un certificato di autenticità a vita e documentazione storica completa.</p>
                        </div>
                    </div>
                    <Button variant="premium" className="w-full mt-2 text-lg py-6">Richiedi Informazioni</Button>
                </div>
            </div>
        </div>
      </div>
    </main>
  )
}
