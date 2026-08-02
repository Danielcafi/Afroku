import Link from "next/link";
import { Star, ArrowRight, MapPin, Sparkles } from "lucide-react";
import { INCONTOURNABLES } from "@/data/mockData";

export function Incontournables() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Editorial Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="bg-[#FFF7ED] text-[#C2410C] text-xs font-extrabold px-3 py-1 rounded-full border border-[#FFEDD5] inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Les Trésors du Patrimoine
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F382C] tracking-tight">
              Incontournables du Bénin
            </h2>
            <p className="text-sm text-gray-500">
              Des cités lacustres aux parcs nationaux et citadelles royales
            </p>
          </div>

          <Link 
            href="/explorer" 
            className="text-sm font-bold text-[#E85D04] hover:text-[#D9531E] flex items-center gap-1.5 transition-colors group shrink-0"
          >
            <span>Voir toute la carte</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Bento Card 1: Featured Ganvié (Spans 2 cols, 2 rows on large) */}
          <div className="md:col-span-2 lg:col-span-2 relative rounded-3xl overflow-hidden shadow-lg group min-h-[380px] flex flex-col justify-end p-6">
            <img 
              src={INCONTOURNABLES[0].image} 
              alt={INCONTOURNABLES[0].name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
            
            <div className="relative z-10 space-y-3 text-white">
              <div className="flex items-center gap-2">
                <span className="bg-[#E85D04] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  Patrimoine Mondial & Lacustre
                </span>
                <span className="bg-white/90 text-gray-900 text-xs font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  {INCONTOURNABLES[0].rating}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black">
                {INCONTOURNABLES[0].name}
              </h3>
              <p className="text-xs text-gray-200 line-clamp-2 max-w-lg">
                La Venise africaine construite entièrement sur les eaux du Lac Nokoué au XVIIIe siècle. Un spectacle unique au monde.
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-white/20">
                <div>
                  <span className="text-[10px] text-gray-300 block">À partir de</span>
                  <span className="text-lg font-black text-white">
                    {INCONTOURNABLES[0].startingPrice.toLocaleString()} FCFA <span className="text-xs font-normal text-emerald-300">(~38 €)</span>
                  </span>
                </div>
                <Link 
                  href={`/explorer?dest=Ganvié`}
                  className="px-4 py-2 bg-white text-[#0F382C] hover:bg-[#ECFDF5] text-xs font-extrabold rounded-xl transition-all shadow"
                >
                  Découvrir
                </Link>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Ouidah */}
          <div className="relative rounded-3xl overflow-hidden shadow-md group min-h-[380px] flex flex-col justify-end p-6">
            <img 
              src={INCONTOURNABLES[1].image} 
              alt={INCONTOURNABLES[1].name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent" />
            
            <div className="relative z-10 space-y-2 text-white">
              <span className="bg-amber-500 text-black text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                Capitale Vaudou
              </span>
              <h3 className="text-xl font-extrabold">{INCONTOURNABLES[1].name}</h3>
              <p className="text-xs text-gray-300 font-medium">À partir de 15 000 FCFA</p>
              <Link href="/explorer?dest=Ouidah" className="inline-block pt-2 text-xs font-bold text-amber-300 hover:underline">
                Voir les circuits →
              </Link>
            </div>
          </div>

          {/* Bento Card 3: Parc Pendjari */}
          <div className="relative rounded-3xl overflow-hidden shadow-md group min-h-[380px] flex flex-col justify-end p-6">
            <img 
              src={INCONTOURNABLES[2].image} 
              alt={INCONTOURNABLES[2].name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent" />
            
            <div className="relative z-10 space-y-2 text-white">
              <span className="bg-emerald-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                Safari & Faune Wild
              </span>
              <h3 className="text-xl font-extrabold">{INCONTOURNABLES[2].name}</h3>
              <p className="text-xs text-gray-300 font-medium">À partir de 45 000 FCFA</p>
              <Link href="/explorer?dest=Pendjari" className="inline-block pt-2 text-xs font-bold text-emerald-300 hover:underline">
                Voir les safaris →
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
