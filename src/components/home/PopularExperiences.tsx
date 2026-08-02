import Link from "next/link";
import { Star, Clock, Heart, ArrowRight } from "lucide-react";
import { EXPERIENCES } from "@/data/mockData";

export function PopularExperiences() {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F382C] tracking-tight">
              Expériences populaires
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Les activités et circuits les mieux notés par nos voyageurs
            </p>
          </div>
          <Link 
            href="/explorer" 
            className="text-sm font-bold text-[#E85D04] hover:text-[#D9531E] flex items-center gap-1.5 transition-colors group"
          >
            <span>Tout explorer</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col group"
            >
              {/* Image & Badges */}
              <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badge top-left */}
                {exp.badge && (
                  <span className="absolute top-3 left-3 bg-[#FFF7ED] text-[#C2410C] border border-[#FFEDD5] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                    {exp.badge}
                  </span>
                )}

                {/* Heart favorite button top-right */}
                <button 
                  aria-label="Ajouter aux favoris"
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-gray-600 hover:text-red-500 hover:bg-white transition-all shadow-sm"
                >
                  <Heart className="w-4 h-4" />
                </button>
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                
                <div>
                  {/* Guide Name */}
                  <p className="text-xs font-semibold text-gray-500 mb-1">
                    Par <span className="text-[#0F382C] font-bold">{exp.guideName}</span>
                  </p>

                  {/* Title */}
                  <Link href={`/activites/${exp.slug}`}>
                    <h3 className="font-extrabold text-base text-gray-900 group-hover:text-[#E85D04] transition-colors line-clamp-2 leading-snug">
                      {exp.title}
                    </h3>
                  </Link>
                </div>

                {/* Rating & Duration */}
                <div className="flex items-center justify-between text-xs text-gray-600 pt-2 border-t border-gray-50">
                  <div className="flex items-center gap-1 font-bold text-gray-900">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span>{exp.rating}</span>
                    <span className="text-gray-400 font-normal">({exp.reviewsCount})</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <span className="text-[11px] text-gray-400 block font-medium">À partir de</span>
                    <span className="text-base font-black text-[#0F382C]">
                      {exp.price.toLocaleString()} FCFA
                    </span>
                  </div>

                  <Link
                    href={`/activites/${exp.slug}`}
                    className="px-3.5 py-2 bg-[#ECFDF5] hover:bg-[#0F382C] text-[#0F382C] hover:text-white text-xs font-bold rounded-lg transition-all"
                  >
                    Découvrir
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
