import Link from "next/link";
import { Star, Clock, Heart, ArrowRight } from "lucide-react";
import { EXPERIENCES } from "@/data/mockData";

export function PopularExperiences() {
  return (
    <section className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Text */}
          <div className="lg:w-1/3 space-y-6 lg:sticky lg:top-32">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-amber-400 block">
              Expériences
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-lg leading-tight">
              Populaires <span className="text-[#E85D04] italic">du moment</span>
            </h2>
            <p className="text-white/55 text-sm leading-relaxed">
              Les activités et circuits les mieux notés par nos voyageurs
            </p>
            <Link
              href="/explorer"
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-[#E85D04] transition-colors group"
            >
              <span>Tout explorer</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right: Experiences Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] flex flex-col"
                style={{ backdropFilter: "blur(16px)", background: "rgba(255,255,255,0.04)" }}
              >
                <div className="relative h-52 overflow-hidden shrink-0">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  {exp.badge && (
                    <span className="absolute top-3 left-3 bg-[#E85D04] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full">
                      {exp.badge}
                    </span>
                  )}
                  <button
                    aria-label="Ajouter aux favoris"
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/60 hover:text-red-400 hover:bg-white/20 transition-all"
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <p className="text-[10px] font-semibold text-white/40 mb-1">
                      Par <span className="text-emerald-400 font-bold">{exp.guideName}</span>
                    </p>
                    <Link href={`/activites/${exp.slug}`}>
                      <h3 className="font-extrabold text-base text-white group-hover:text-amber-300 transition-colors line-clamp-2 leading-snug">
                        {exp.title}
                      </h3>
                    </Link>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-3 border-t border-white/8">
                    <div className="flex items-center gap-1.5 font-bold text-white">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span>{exp.rating}</span>
                      <span className="text-white/30 font-normal">({exp.reviewsCount})</span>
                    </div>
                    <div className="flex items-center gap-1 text-white/40">
                      <Clock className="w-3 h-3" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <Link
                    href={`/activites/${exp.slug}`}
                    className="w-full text-center py-2.5 rounded-xl border border-white/15 hover:bg-[#E85D04] hover:border-[#E85D04] text-white text-xs font-bold transition-all"
                  >
                    Decouvrir
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
