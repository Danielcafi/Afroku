import Link from "next/link";
import { Ticket, Calendar, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { EVENTS } from "@/data/mockData";

export function EventsShowcase() {
  return (
    <section className="py-16 bg-[#0F382C] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="bg-[#E85D04] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              Billetterie Événements
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Grands Événements & Festivals à Venir
            </h2>
            <p className="text-emerald-100/80 text-sm">
              Vodun Days, Concerts WeLoveEya, Festivals culturels : réservez vos pass officiels en ligne.
            </p>
          </div>

          <Link 
            href="/evenements" 
            className="text-sm font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors shrink-0"
          >
            <span>Voir tous les événements</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EVENTS.map((event) => (
            <div 
              key={event.id}
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 overflow-hidden flex flex-col justify-between hover:border-white/30 transition-all group"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {event.badge && (
                  <span className="absolute top-2 left-2 bg-[#E85D04] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow">
                    {event.badge}
                  </span>
                )}
              </div>

              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-200">
                    <Calendar className="w-3.5 h-3.5 text-[#E85D04]" />
                    <span>{event.dates}</span>
                  </div>
                  <h3 className="font-extrabold text-base text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-xs text-emerald-100/70 line-clamp-2">
                    {event.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-emerald-200 block">Pass à partir de</span>
                    <span className="text-lg font-black text-amber-400">
                      {event.ticketPrice.toLocaleString()} FCFA
                    </span>
                  </div>

                  <Link
                    href="/evenements"
                    className="px-3.5 py-2 bg-[#E85D04] hover:bg-[#D9531E] text-white text-xs font-bold rounded-xl flex items-center gap-1 shadow"
                  >
                    <Ticket className="w-3.5 h-3.5" />
                    <span>Réserver Pass</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
