import Link from "next/link";
import { ShoppingBag, ArrowRight, Star } from "lucide-react";
import { ARTISANAT_PRODUCTS } from "@/data/mockData";

export function ArtisanatShowcase() {
  return (
    <section className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Text */}
          <div className="lg:w-1/3 space-y-6 lg:sticky lg:top-32">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-emerald-400 block">
              Made in Benin
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-lg leading-tight">
              Artisanat <span className="text-[#E85D04] italic">Authentique</span>
            </h2>
            <p className="text-white/55 text-sm leading-relaxed">
              Commandez en ligne des pieces uniques sculptees par les maitres artisans beninois
            </p>
            <Link
              href="/marketplace"
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-[#E85D04] transition-colors group"
            >
              <span>Voir toute la boutique</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right: Products Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {ARTISANAT_PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] flex flex-col"
                style={{ backdropFilter: "blur(20px)", background: "rgba(255,255,255,0.04)" }}
              >
                <div className="relative h-52 overflow-hidden shrink-0">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-2.5 py-0.5">
                    <span className="text-[9px] font-bold text-white/80 uppercase tracking-wider">
                      {prod.artisanName}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <h3 className="font-extrabold text-sm text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {prod.name}
                  </h3>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                    ))}
                    <span className="text-white/30 text-[10px] ml-1">(artisan certifie)</span>
                  </div>
                  <Link
                    href="/marketplace"
                    className="w-full py-2.5 rounded-xl border border-white/15 hover:bg-[#E85D04] hover:border-[#E85D04] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Voir l&apos;article</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
