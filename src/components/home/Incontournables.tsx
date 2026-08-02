import Link from "next/link";
import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";
import { INCONTOURNABLES } from "@/data/mockData";

export function Incontournables() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F382C] tracking-tight">
              Incontournables du Bénin
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Découvrez les lieux les plus populaires à visiter absolument
            </p>
          </div>
          <Link 
            href="/explorer" 
            className="text-sm font-bold text-[#E85D04] hover:text-[#D9531E] flex items-center gap-1.5 transition-colors group"
          >
            <span>Voir tout</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
          {INCONTOURNABLES.map((dest) => (
            <Link
              key={dest.id}
              href={`/explorer?dest=${encodeURIComponent(dest.name)}`}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                
                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-bold text-gray-900 flex items-center gap-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>{dest.rating}</span>
                </div>

                {/* Location Overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-extrabold text-base leading-snug group-hover:text-amber-300 transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-[11px] text-gray-300 font-medium">
                    À partir de <span className="font-bold text-white">{dest.startingPrice.toLocaleString()} FCFA</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
