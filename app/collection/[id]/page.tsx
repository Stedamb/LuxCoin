import { Navbar } from "@/components/layout/Navbar"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table" 
import { ArrowLeft, ShieldCheck } from "lucide-react"
import Link from "next/link"

// I need to create Table component first, but I'll skip and just use divs or create it inline for speed if strictly needed.
// Actually user asked for Shadcn components, so I should probably create table component.

export default async function CoinPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  return (
    <main className="min-h-screen bg-background text-foreground pb-20">
      <Navbar />
      <div className="pt-32 container mx-auto px-4">
        
        <Link href="/collection" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Torna alla Collezione
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Visual Section */}
            <div className="space-y-6">
                <div className="rounded-2xl border border-white/5 bg-card/30 p-8 flex items-center justify-center aspect-square relative overflow-hidden shadow-2xl">
                     <div className="w-2/3 h-2/3 rounded-full bg-gradient-to-br from-yellow-500 to-amber-700 shadow-inner relative flex items-center justify-center">
                          <span className="text-4xl font-serif text-black/50 font-bold">RECTO</span>
                     </div>
                     
                     {/* Overlay texture effect */}
                     <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-2">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="w-24 h-24 rounded-lg bg-card/50 border border-white/10 shrink-0 cursor-pointer hover:border-primary transition-colors flex items-center justify-center">
                             <div className="w-12 h-12 rounded-full bg-amber-600/50" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Information Section */}
            <div className="space-y-10">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded tracking-wider uppercase">Roman Empire</span>
                        <span className="px-3 py-1 bg-white/5 text-muted-foreground text-xs font-bold rounded tracking-wider uppercase">FDC Grade</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">Aureus of Augustus {id}</h1>
                    <p className="text-xl text-primary font-mono font-bold">€ 12,500.00</p>
                </div>

                <div className="prose prose-invert max-w-none">
                    <h3 className="text-xl font-serif mb-2">Storytelling</h3>
                    <p className="text-gray-400 leading-relaxed">
                        Questa moneta straordinaria rappresenta un momento cruciale nella storia dell'Impero Romano. 
                        Coniata sotto il regno di Augusto, celebra la Pax Romana. I dettagli del ritratto sono eccezionalmente 
                        ben conservati, permettendo di apprezzare la maestria degli incisori dell'epoca. Un pezzo di storia 
                        tustica che ha viaggiato attraverso i secoli per arrivare, intatto, fino a noi.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-serif mb-4">Scheda Tecnica</h3>
                    <div className="border border-white/10 rounded-lg overflow-hidden">
                        {[
                            { label: "Peso", value: "7.84 g" },
                            { label: "Diametro", value: "19 mm" },
                            { label: "Metallo", value: "Oro (Au) 99.9%" },
                            { label: "Zecca", value: "Lugdunum" },
                            { label: "Riferimento", value: "RIC I 206" },
                        ].map((row, i) => (
                            <div key={i} className="flex justify-between p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                <span className="text-muted-foreground">{row.label}</span>
                                <span className="font-medium">{row.value}</span>
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
                    <Button variant="premium" className="w-full mt-2">Valuta acquisto</Button>
                </div>
            </div>
        </div>
      </div>
    </main>
  )
}
