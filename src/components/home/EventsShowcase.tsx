import Link from "next/link";
import { Ticket, Calendar, ArrowRight } from "lucide-react";
import { EVENTS } from "@/data/mockData";

export function EventsShowcase() {
  return (
    <section className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Events Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {EVENTS.map((event, idx) => (
              <div
                key={event.id}
                className={`group relative rounded-3xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-500 hover:-translate-y-2 flex flex-col ${
                  idx === 0 ? "sm:col-span-2" : ""
                }`}
                style={{ backdropFilter: "blur(20px)", background: "rgba(255,255,255,0.04)" }}
              >
                <div className={`relative overflow-hidden shrink-0 ${idx === 0 ? "h-64" : "h-48"}`}>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  {event.badge && (
                    <span className="absolute top-3 left-3 bg-[#E85D04] text-white text-[10px] font-extrabold px-3 py-0.5 rounded-full shadow-lg">
                      {event.badge}
                    </span>
                  )}
                  <div className="absolute bottom-3 right-3 w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <Ticket className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{event.dates}</span>
                    </div>
                    <h3 className="font-extrabold text-base text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {event.title}
                    </h3>
                    <p className="text-xs text-white/45 line-clamp-2">{event.description}</p>
                  </div>
                  <Link
                    href="/evenements"
                    className="w-full py-2.5 rounded-xl bg-[#E85D04]/15 hover:bg-[#E85D04] border border-[#E85D04]/30 hover:border-[#E85D04] text-[#E85D04] hover:text-white text-xs font-bold text-center transition-all"
                  >
                    Reserver un Pass
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Text */}
          <div className="lg:w-1/3 space-y-6 lg:sticky lg:top-32">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#E85D04] block">
              Billetterie Evenements
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-lg leading-tight">
              Grands Festivals <span className="text-[#E85D04] italic">a Venir</span>
            </h2>
            <p className="text-white/55 text-sm leading-relaxed">
              Vodun Days, Concerts WeLoveEya, Festivals culturels : reservez vos pass officiels en ligne.
            </p>
            <Link
              href="/evenements"
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-[#E85D04] transition-colors group"
            >
              <span>Voir tous les evenements</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
