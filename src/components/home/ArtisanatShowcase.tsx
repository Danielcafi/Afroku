import Link from "next/link";
import { ShoppingBag, ArrowRight, Star, ShieldCheck } from "lucide-react";
import { ARTISANAT_PRODUCTS } from "@/data/mockData";

export function ArtisanatShowcase() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <span className="bg-[#ECFDF5] text-[#0F382C] text-xs font-extrabold px-3 py-1 rounded-full border border-[#0F382C]/20 inline-block mb-2">
              🇧🇯 Made in Bénin
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F382C] tracking-tight">
              Artisanat & Souvenirs Authentiques
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Commandez en ligne des pièces uniques sculptées par les maîtres artisans béninois
            </p>
          </div>

          <Link 
            href="/marketplace" 
            className="text-sm font-bold text-[#E85D04] hover:text-[#D9531E] flex items-center gap-1.5 transition-colors group"
          >
            <span>Voir toute la boutique</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTISANAT_PRODUCTS.map((prod) => (
            <div 
              key={prod.id}
              className="bg-[#F8FAFC] rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="relative h-48 w-full bg-gray-200">
                <img 
                  src={prod.image} 
                  alt={prod.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                    {prod.artisanName}
                  </span>
                  <h3 className="font-extrabold text-sm text-gray-900 group-hover:text-[#E85D04] transition-colors leading-snug">
                    {prod.name}
                  </h3>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-200/60">
                  <span className="text-sm font-black text-[#0F382C]">
                    {prod.price.toLocaleString()} FCFA
                  </span>
                  <Link
                    href="/marketplace"
                    className="px-3 py-1.5 bg-[#0F382C] text-white text-xs font-bold rounded-lg flex items-center gap-1"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Acheter</span>
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
