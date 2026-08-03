import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { INCONTOURNABLES } from "@/data/mockData";

export function Incontournables() {
  return (
    <section className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Cards Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Card 1 — Featured */}
            <div className="sm:col-span-2 group relative rounded-3xl overflow-hidden min-h-[380px] flex flex-col justify-end border border-white/10 hover:border-white/25 transition-all duration-500 hover:shadow-[0_0_60px_rgba(232,93,4,0.15)]">
              <img
                src={INCONTOURNABLES[0].image}
                alt={INCONTOURNABLES[0].name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
              <div className="absolute top-5 right-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="text-white text-xs font-bold">{INCONTOURNABLES[0].rating}</span>
              </div>
              <div className="relative z-10 p-7 space-y-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#10B981] bg-[#10B981]/15 border border-[#10B981]/30 rounded-full px-3 py-1 inline-block">
                  Patrimoine Mondial & Lacustre
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-white drop-shadow-xl">{INCONTOURNABLES[0].name}</h3>
                <p className="text-white/60 text-xs max-w-md line-clamp-2">
                  La Venise africaine construite entièrement sur les eaux du Lac Nokoué au XVIIIe siècle.
                </p>
                <Link
                  href="/explorer?dest=Ganvié"
                  className="inline-flex px-5 py-2 bg-white/10 hover:bg-[#10B981] border border-white/20 hover:border-[#10B981] text-white text-xs font-extrabold rounded-xl transition-all backdrop-blur-md"
                >
                  Découvrir
                </Link>
              </div>
            </div>

            {/* Card 2 — Ouidah */}
            <div className="group relative rounded-3xl overflow-hidden min-h-[320px] flex flex-col justify-end border border-white/10 hover:border-white/25 transition-all duration-500 hover:shadow-[0_0_60px_rgba(245,158,11,0.15)] hover:-translate-y-1">
              <img
                src={INCONTOURNABLES[1].image}
                alt={INCONTOURNABLES[1].name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="relative z-10 p-6 space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-400/15 border border-amber-400/25 rounded-full px-2.5 py-0.5 inline-block">
                  Capitale Vaudou
                </span>
                <h3 className="text-xl font-extrabold text-white">{INCONTOURNABLES[1].name}</h3>
                <Link href="/explorer?dest=Ouidah" className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-white transition-colors pt-2">
                  Voir les circuits <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3 — Pendjari */}
            <div className="group relative rounded-3xl overflow-hidden min-h-[320px] flex flex-col justify-end border border-white/10 hover:border-white/25 transition-all duration-500 hover:shadow-[0_0_60px_rgba(52,211,153,0.15)] hover:-translate-y-1">
              <img
                src={INCONTOURNABLES[2].image}
                alt={INCONTOURNABLES[2].name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="relative z-10 p-6 space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-400/15 border border-emerald-400/25 rounded-full px-2.5 py-0.5 inline-block">
                  Safari & Faune Wild
                </span>
                <h3 className="text-xl font-extrabold text-white">{INCONTOURNABLES[2].name}</h3>
                <Link href="/explorer?dest=Pendjari" className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 hover:text-white transition-colors pt-2">
                  Voir les safaris <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="lg:w-1/3 space-y-6 lg:sticky lg:top-32">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-amber-400 block">
              Les Trésors du Patrimoine
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-lg leading-tight">
              Incontournables <span className="text-[#10B981] italic">du Bénin</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed space-y-4">
              <span className="block">
                Voyager au Bénin, c&apos;est vivre une <strong className="text-[#10B981]">épopée entre histoire et nature brute</strong>.
              </span>
              <span className="block">
                Au Sud, parcourez les canaux de <strong className="text-white">Ganvié</strong>, la mythique <strong className="text-white">« Venise africaine »</strong>, avant de vous recueillir à <strong className="text-white">Ouidah</strong> sur la <strong className="text-[#10B981]">Route des Esclaves</strong>.
              </span>
              <span className="block">
                Plus au Nord, remontez le temps au cœur des <strong className="text-white">Palais Royaux d&apos;Abomey</strong>, joyau classé à l&apos;<strong className="text-[#10B981]">UNESCO</strong> et mémoire de la puissante royauté dahoméenne.
              </span>
              <span className="block">
                Enfin, émerveillez-vous devant la faune sauvage du <strong className="text-white">Parc de la Pendjari</strong>, sanctuaire d&apos;une <strong className="text-[#10B981]">biodiversité exceptionnelle</strong>. Une terre de légendes à explorer.
              </span>
            </p>
            <Link
              href="/explorer"
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-[#10B981] transition-colors group"
            >
              <span>Voir toute la carte</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
