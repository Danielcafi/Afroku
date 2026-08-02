"use client";

import { useState } from "react";
import { Search, MapPin, Calendar, Users, Sparkles, Compass, ArrowRight, ShieldCheck, Play } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function HeroSearch() {
  const router = useRouter();
  const [destination, setDestination] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/explorer?dest=${encodeURIComponent(destination)}`);
  };

  return (
    <section className="relative bg-[#FAF7F2] text-gray-900 pt-10 pb-20 px-4 overflow-hidden border-b border-[#E5DEC9]/50">
      
      {/* Background Subtle African Pattern Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#D6CBBA_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      {/* Decorative Golden Ambient Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#E85D04]/10 via-amber-200/20 to-emerald-200/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        
        {/* Top Header & High-Contrast Serif Title */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-[#DCD3BE] shadow-xs text-xs font-bold text-[#8C6B40] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#E85D04]" />
            Plateforme Culturelle & Touristique Officielle du Bénin 🇧🇯
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight text-[#1A2621] leading-none">
            Découvrez l'Âme Sauvage & <br />
            <span className="text-[#E85D04] italic">Sacrée du Bénin</span>
          </h1>

          <p className="text-sm sm:text-lg text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Visitez Ganvié et la Pendjari, achetez vos pass pour les <strong>Vodun Days</strong> et commandez l'artisanat d'art béninois avec confirmation instantanée.
          </p>
        </div>

        {/* Stadium / Pill Layout Capsule Showcase (Inspired by User Reference Image 3) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center max-w-6xl mx-auto pt-2">
          
          {/* Capsule 1: Ganvié (Left Pill) */}
          <div className="md:col-span-1 relative h-[300px] md:h-[400px] rounded-[45px] overflow-hidden shadow-lg border-2 border-white group">
            <img 
              src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=600&q=80" 
              alt="Ganvié" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-4 right-4 text-white text-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block">Lacustre</span>
              <h3 className="font-serif font-bold text-lg">Ganvié</h3>
              <span className="text-[11px] font-bold text-emerald-300 block">25 000 FCFA</span>
            </div>
          </div>

          {/* Capsule 2: Central Featured Experience (Big Center Card) */}
          <div className="md:col-span-3 relative h-[380px] md:h-[480px] rounded-[50px] overflow-hidden shadow-2xl border-4 border-white group">
            <img 
              src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1200&q=80" 
              alt="Ouidah Vaudou" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/20 to-transparent" />

            {/* Floating Top Badge */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black text-[#0F382C] shadow-md flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E85D04] animate-pulse" />
              Vodun Days 2027 & Route des Esclaves
            </div>

            {/* Bottom Overlay Content */}
            <div className="absolute bottom-8 left-8 right-8 text-white space-y-3">
              <div className="space-y-1">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block">
                  Ouidah • Bénin
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif font-black">
                  Histoire, Mémoire & Cité Spirituelle
                </h3>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/20">
                <p className="text-xs text-gray-200 max-w-md hidden sm:block">
                  Célébrez les danses sacrées, explorez le Temple des Pythons et méditez devant la Porte du Non-Retour.
                </p>
                <Link
                  href="/activites/histoire-culture-ouidah"
                  className="px-6 py-3 bg-[#E85D04] hover:bg-[#D9531E] text-white text-xs font-extrabold rounded-full shadow-lg transition-all flex items-center gap-2"
                >
                  <span>Réserver l'Expérience</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Capsule 3: Pendjari Safari (Right Pill) */}
          <div className="md:col-span-1 relative h-[300px] md:h-[400px] rounded-[45px] overflow-hidden shadow-lg border-2 border-white group">
            <img 
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80" 
              alt="Pendjari" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-4 right-4 text-white text-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 block">Safari Wild</span>
              <h3 className="font-serif font-bold text-lg">Parc Pendjari</h3>
              <span className="text-[11px] font-bold text-amber-300 block">45 000 FCFA</span>
            </div>
          </div>

        </div>

        {/* Floating Minimalist Search Capsule Bar (Inspired by Reference Image 1) */}
        <div className="bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-full shadow-xl border border-[#DCD3BE] max-w-3xl mx-auto text-gray-800">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center justify-between gap-3">
            
            <div className="flex items-center gap-3 px-4 w-full">
              <MapPin className="w-5 h-5 text-[#E85D04] shrink-0" />
              <input
                type="text"
                placeholder="Où souhaitez-vous aller au Bénin ? (Ganvié, Ouidah, Pendjari...)"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm font-semibold text-gray-900 focus:outline-none placeholder-gray-400"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-[#0F382C] hover:bg-[#1C4334] text-white text-xs font-extrabold rounded-full shadow-md transition-all shrink-0 cursor-pointer flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4 text-[#E85D04]" />
              <span>Rechercher</span>
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
