import Link from "next/link";
import { ShoppingBag, ArrowRight, Star } from "lucide-react";
import { ARTISANAT_PRODUCTS } from "@/data/mockData";

export function ArtisanatShowcase() {
  return (
    <section className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Text */}
          <div className="lg:w-1/2 space-y-6 lg:sticky lg:top-32">
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-lg leading-tight">
              Gardienne de nos Traditions, <span className="text-[#10B981] italic">Révélatrice d&apos;Avenir</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed space-y-4">
              <span className="block">
                Sur AfroKu, le numérique ne nous éloigne pas : il nous rassemble <strong className="text-white">autour du feu</strong>.
              </span>
              <span className="block">
                Nous avons pensé cette plateforme comme un <strong className="text-white">espace vivant</strong> où chaque Béninois, chaque passionné et chaque curieux devient <strong className="text-[#10B981]">l&apos;artisan du récit national</strong>. Comme les tambours qui annoncent la sortie des masques sacrés, <strong className="text-white">votre voix fait vibrer</strong> toute notre communauté.
              </span>
              <span className="block">
                Une photo capturée face à la <strong className="text-white">statue de Toffa Ier</strong>, le souvenir d&apos;une soirée à écouter le rythme du <strong className="text-white">Sato</strong>, la découverte d&apos;un artisanat local ou le goût authentique de nos <strong className="text-white">plats d&apos;antan</strong>... Chaque contribution est une <strong className="text-[#10B981]">étincelle qui éclaire notre patrimoine</strong>. Nous avançons <strong className="text-white">main dans la main</strong> pour faire briller l&apos;esprit de chez nous.
              </span>
            </p>
            <Link
              href="/marketplace"
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-[#10B981] transition-colors group"
            >
              <span>Voir toute la boutique</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right: Products Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                    className="w-full py-2.5 rounded-xl border border-white/15 hover:bg-[#10B981] hover:border-[#10B981] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all"
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
