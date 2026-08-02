import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/mockData";

export function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F382C] tracking-tight">
            Ce que disent nos voyageurs
          </h2>
          <p className="text-sm text-gray-500">
            Plus de 12 000 voyageurs nous font confiance pour leurs séjours
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                  <span className="text-xs font-bold text-gray-700 ml-1">{item.rating.toFixed(1)}</span>
                </div>

                {/* Comment */}
                <p className="text-sm text-gray-700 italic leading-relaxed">
                  "{item.comment}"
                </p>
              </div>

              {/* User info */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-200/60">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <span>{item.flag}</span>
                  </h4>
                  <p className="text-xs text-gray-400 font-medium">{item.country}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
