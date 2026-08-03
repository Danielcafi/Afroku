import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/mockData";

export function Testimonials() {
  return (
    <section className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Text */}
          <div className="lg:w-1/3 space-y-6 lg:sticky lg:top-32">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-amber-400 block">
              Temoignages
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-lg leading-tight">
              Ce que disent nos <span className="text-[#E85D04] italic">voyageurs</span>
            </h2>
            <p className="text-white/55 text-base leading-relaxed">
              Plus de 12 000 voyageurs nous font confiance pour leurs sejours
            </p>
          </div>

          {/* Right: Testimonials Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {TESTIMONIALS.map((item, idx) => (
              <div
                key={item.id}
                className={`group relative p-7 rounded-3xl border border-white/10 hover:border-white/25 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between space-y-5 ${
                  idx === 0 ? "sm:col-span-2" : ""
                }`}
                style={{ backdropFilter: "blur(20px)", background: "rgba(255,255,255,0.05)" }}
              >
                <span className="text-6xl font-serif text-white/8 leading-none select-none absolute top-4 right-6">&ldquo;</span>

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-white/60 ml-1.5">{item.rating.toFixed(1)}</span>
                  </div>
                  <p className="text-sm text-white/70 italic leading-relaxed">
                    &ldquo;{item.comment}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-5 border-t border-white/8 relative z-10">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-white/20 shadow-lg"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.name}</h4>
                    <p className="text-xs text-white/40 font-medium">{item.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
