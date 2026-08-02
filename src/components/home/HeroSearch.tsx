"use client";

import { useState } from "react";
import { Search, MapPin, Calendar, Users, Grid, ShieldCheck, PhoneCall, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export function HeroSearch() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [travelers, setTravelers] = useState("2 voyageurs");
  const [category, setCategory] = useState("Toutes catégories");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/explorer?dest=${encodeURIComponent(destination)}&cat=${encodeURIComponent(category)}`);
  };

  return (
    <section className="relative min-h-[560px] lg:min-h-[620px] flex items-center justify-center bg-gray-900 text-white overflow-hidden py-16 px-4">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-gray-900/50" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 w-full">
        
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Découvrez le <span className="text-[#E85D04] underline decoration-[#E85D04]/40 underline-offset-8">Bénin</span> autrement
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Réservez des expériences authentiques avec des guides locaux certifiés.
          </p>
        </div>

        {/* Floating Search Bar */}
        <div className="bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-2xl border border-white/20 text-gray-800 max-w-4xl mx-auto">
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            
            {/* Input 1: Destination */}
            <div className="flex items-center gap-3 p-3 bg-gray-50/90 rounded-xl border border-gray-200/80 hover:border-[#0F382C] transition-all">
              <MapPin className="w-5 h-5 text-[#E85D04] shrink-0" />
              <div className="text-left w-full overflow-hidden">
                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide">Destination</label>
                <input
                  type="text"
                  placeholder="Où souhaitez-vous aller ?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-gray-900 focus:outline-none placeholder-gray-400"
                />
              </div>
            </div>

            {/* Input 2: Dates */}
            <div className="flex items-center gap-3 p-3 bg-gray-50/90 rounded-xl border border-gray-200/80 hover:border-[#0F382C] transition-all">
              <Calendar className="w-5 h-5 text-[#0F382C] shrink-0" />
              <div className="text-left w-full overflow-hidden">
                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide">Date</label>
                <input
                  type="text"
                  placeholder="Ajouter des dates"
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-gray-900 focus:outline-none placeholder-gray-400"
                />
              </div>
            </div>

            {/* Input 3: Voyageurs */}
            <div className="flex items-center gap-3 p-3 bg-gray-50/90 rounded-xl border border-gray-200/80 hover:border-[#0F382C] transition-all">
              <Users className="w-5 h-5 text-[#0F382C] shrink-0" />
              <div className="text-left w-full overflow-hidden">
                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide">Voyageurs</label>
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-gray-900 focus:outline-none cursor-pointer"
                >
                  <option value="1 voyageur">1 voyageur</option>
                  <option value="2 voyageurs">2 voyageurs</option>
                  <option value="3-5 voyageurs">3-5 voyageurs</option>
                  <option value="6+ voyageurs">6+ voyageurs</option>
                </select>
              </div>
            </div>

            {/* Input 4: Catégorie */}
            <div className="flex items-center gap-3 p-3 bg-gray-50/90 rounded-xl border border-gray-200/80 hover:border-[#0F382C] transition-all">
              <Grid className="w-5 h-5 text-[#0F382C] shrink-0" />
              <div className="text-left w-full overflow-hidden">
                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide">Catégorie</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-gray-900 focus:outline-none cursor-pointer truncate"
                >
                  <option value="Toutes catégories">Toutes catégories</option>
                  <option value="Culture & Histoire">Culture & Histoire</option>
                  <option value="Nature & Safari">Nature & Safari</option>
                  <option value="Gastronomie">Gastronomie</option>
                  <option value="Artisanat">Artisanat</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2 lg:col-span-1 flex items-center">
              <button
                type="submit"
                className="w-full h-full min-h-[52px] bg-[#E85D04] hover:bg-[#D9531E] text-white text-base font-bold rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transition-all group cursor-pointer"
              >
                <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Rechercher</span>
              </button>
            </div>

          </form>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-medium text-gray-200 pt-2">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
            <CheckCircle className="w-4 h-4 text-[#E85D04]" />
            <span>+ de 12 000 voyageurs satisfaits</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Paiement Mobile Money (MTN / Moov)</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
            <Users className="w-4 h-4 text-amber-400" />
            <span>Guides locaux certifiés</span>
          </div>
        </div>

      </div>
    </section>
  );
}
