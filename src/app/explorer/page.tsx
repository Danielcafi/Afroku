"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EXPERIENCES } from "@/data/mockData";
import { Star, MapPin, Search, SlidersHorizontal, Map as MapIcon, Heart, X } from "lucide-react";
import Link from "next/link";

export default function ExplorerPage() {
  const [selectedCities, setSelectedCities] = useState<string[]>(["Cotonou", "Ouidah"]);
  const [maxPrice, setMaxPrice] = useState<number>(150000);
  const [selectedDuration, setSelectedDuration] = useState<string>("Toutes");
  const [showMapMobile, setShowMapMobile] = useState<boolean>(false);
  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false);

  const toggleCity = (city: string) => {
    setSelectedCities(prev => 
      prev.includes(city) ? prev.filter(c => c !== city) : [...prev, city]
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0F382C]">
      <Navbar />

      {/* Filter & Header Bar */}
      <div className="bg-white/5 backdrop-blur-lg border-b border-white/10 py-4 px-4 sm:px-6 lg:px-8 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div>
            <h1 className="text-xl font-extrabold text-white">Explorer</h1>
            <p className="text-xs text-white/50">Trouvez votre prochaine expérience au Bénin</p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-2 rounded-xl text-xs w-full sm:w-72 border border-white/10">
              <Search className="w-4 h-4 text-white/40 shrink-0" />
              <input 
                type="text" 
                placeholder="Destination, activité ou guide..." 
                className="bg-transparent focus:outline-none w-full text-white placeholder:text-white/40"
              />
            </div>

            <button 
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="lg:hidden flex items-center gap-1.5 px-3 py-2 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-bold rounded-xl shrink-0"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filtres</span>
            </button>

            <button 
              onClick={() => setShowMapMobile(!showMapMobile)}
              className="lg:hidden flex items-center gap-1.5 px-3 py-2 bg-[#10B981] text-white text-xs font-bold rounded-xl shrink-0"
            >
              <MapIcon className="w-4 h-4" />
              <span>{showMapMobile ? "Liste" : "Carte"}</span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Filters Overlay */}
      {showMobileFilters && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" onClick={() => setShowMobileFilters(false)}>
          <div 
            className="absolute bottom-0 left-0 right-0 bg-[#0F382C] border-t border-white/10 rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-extrabold text-lg text-white flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-[#10B981]" />
                Filtres
              </h3>
              <button onClick={() => setShowMobileFilters(false)} className="text-white/50 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Filter: Ville */}
            <div className="space-y-3 mb-6">
              <label className="block text-xs font-bold text-white/60 uppercase tracking-wide">Ville</label>
              <div className="flex flex-wrap gap-2">
                {["Cotonou", "Ouidah", "Abomey", "Natitingou", "Parakou", "Grand-Popo"].map(city => (
                  <button
                    key={city}
                    onClick={() => toggleCity(city)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                      selectedCities.includes(city) 
                        ? "bg-[#10B981] text-white" 
                        : "bg-white/10 text-white/60 border border-white/10"
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Filter: Prix */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-white/60 uppercase tracking-wide">Prix (par personne)</span>
                <span className="text-[#10B981] font-extrabold">{maxPrice.toLocaleString()} FCFA</span>
              </div>
              <input
                type="range"
                min="5000"
                max="150000"
                step="5000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#10B981]"
              />
              <div className="flex justify-between text-[10px] text-white/30 font-medium">
                <span>5 000 FCFA</span>
                <span>150 000+ FCFA</span>
              </div>
            </div>

            {/* Mobile Filter: Durée */}
            <div className="space-y-3 mb-6">
              <label className="block text-xs font-bold text-white/60 uppercase tracking-wide">Durée</label>
              <div className="flex flex-wrap gap-2">
                {["Moins de 2h", "2h à 4h", "1 jour", "Plus de 2 jours"].map(dur => (
                  <button
                    key={dur}
                    onClick={() => setSelectedDuration(dur)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                      selectedDuration === dur 
                        ? "bg-[#10B981] text-white" 
                        : "bg-white/10 text-white/60 border border-white/10"
                    }`}
                  >
                    {dur}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Filter: Catégorie */}
            <div className="space-y-3 mb-6">
              <label className="block text-xs font-bold text-white/60 uppercase tracking-wide">Catégorie</label>
              <div className="flex flex-wrap gap-2">
                {["Culture & Histoire", "Nature & Safari", "Gastronomie", "Art & Artisanat"].map(cat => (
                  <button
                    key={cat}
                    className="px-3 py-1.5 rounded-full text-xs font-bold bg-white/10 text-white/60 border border-white/10 hover:bg-[#10B981] hover:text-white transition-all"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => setShowMobileFilters(false)}
              className="w-full py-3 bg-[#10B981] text-white text-sm font-bold rounded-xl hover:bg-[#0ea472] transition-all"
            >
              Appliquer les filtres
            </button>
          </div>
        </div>
      )}

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Panel: Filters (Desktop) */}
          <div className="hidden lg:block lg:col-span-3 rounded-2xl border border-white/10 p-5 space-y-6" style={{ backdropFilter: "blur(16px)", background: "rgba(255,255,255,0.04)" }}>
            
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="font-extrabold text-sm text-white flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#10B981]" />
                <span>Filtres</span>
              </h3>
              <button 
                onClick={() => { setSelectedCities([]); setMaxPrice(150000); setSelectedDuration("Toutes"); }} 
                className="text-[11px] font-bold text-white/40 hover:text-[#10B981]"
              >
                Réinitialiser
              </button>
            </div>

            {/* Filter 1: Ville */}
            <div className="space-y-2.5">
              <label className="block text-xs font-bold text-white/60 uppercase tracking-wide">Ville</label>
              <div className="space-y-2">
                {["Cotonou", "Ouidah", "Abomey", "Natitingou", "Parakou", "Grand-Popo"].map(city => (
                  <label key={city} className="flex items-center gap-2 text-xs font-medium text-white/70 cursor-pointer hover:text-white">
                    <input
                      type="checkbox"
                      checked={selectedCities.includes(city)}
                      onChange={() => toggleCity(city)}
                      className="rounded border-white/20 text-[#10B981] focus:ring-[#10B981] bg-transparent"
                    />
                    <span>{city}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter 2: Prix */}
            <div className="space-y-2.5 pt-4 border-t border-white/10">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-white/60 uppercase tracking-wide">Prix (par personne)</span>
                <span className="text-[#10B981] font-extrabold">{maxPrice.toLocaleString()} FCFA</span>
              </div>
              <input
                type="range"
                min="5000"
                max="150000"
                step="5000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#10B981]"
              />
              <div className="flex justify-between text-[10px] text-white/30 font-medium">
                <span>5 000 FCFA</span>
                <span>150 000+ FCFA</span>
              </div>
            </div>

            {/* Filter 3: Durée */}
            <div className="space-y-2.5 pt-4 border-t border-white/10">
              <label className="block text-xs font-bold text-white/60 uppercase tracking-wide">Durée</label>
              <div className="space-y-2">
                {["Moins de 2h", "2h à 4h", "1 jour", "Plus de 2 jours"].map(dur => (
                  <label key={dur} className="flex items-center gap-2 text-xs font-medium text-white/70 cursor-pointer">
                    <input
                      type="radio"
                      name="duration"
                      value={dur}
                      onChange={() => setSelectedDuration(dur)}
                      className="text-[#10B981] focus:ring-[#10B981] bg-transparent"
                    />
                    <span>{dur}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter 4: Catégorie */}
            <div className="space-y-2.5 pt-4 border-t border-white/10">
              <label className="block text-xs font-bold text-white/60 uppercase tracking-wide">Catégorie</label>
              <div className="space-y-2">
                {["Culture & Histoire", "Nature & Safari", "Gastronomie", "Art & Artisanat"].map(cat => (
                  <label key={cat} className="flex items-center gap-2 text-xs font-medium text-white/70 cursor-pointer">
                    <input type="checkbox" className="rounded border-white/20 text-[#10B981] bg-transparent" />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter 5: Note */}
            <div className="space-y-2.5 pt-4 border-t border-white/10">
              <label className="block text-xs font-bold text-white/60 uppercase tracking-wide">Note des voyageurs</label>
              <div className="space-y-2 text-xs">
                <label className="flex items-center gap-2 text-white/70 cursor-pointer">
                  <input type="checkbox" className="rounded border-white/20 text-[#10B981] bg-transparent" />
                  <span className="flex items-center gap-1 font-bold">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> 4,5 et plus
                  </span>
                </label>
                <label className="flex items-center gap-2 text-white/70 cursor-pointer">
                  <input type="checkbox" className="rounded border-white/20 text-[#10B981] bg-transparent" />
                  <span className="flex items-center gap-1 font-bold">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> 4,0 et plus
                  </span>
                </label>
              </div>
            </div>

          </div>

          {/* Middle Panel: Experiences List */}
          <div className={`col-span-1 lg:col-span-5 space-y-4 ${showMapMobile ? "hidden lg:block" : "block"}`}>
            
            <div className="flex items-center justify-between text-xs font-semibold text-white/50">
              <span><strong className="text-white">126 expériences</strong> trouvées</span>
              <div className="flex items-center gap-2">
                <span>Trier par :</span>
                <select className="bg-white/10 backdrop-blur-md border border-white/10 rounded-lg py-1 px-2 text-xs font-bold text-white focus:outline-none">
                  <option className="bg-[#0F382C]">Populaires</option>
                  <option className="bg-[#0F382C]">Prix croissant</option>
                  <option className="bg-[#0F382C]">Prix décroissant</option>
                  <option className="bg-[#0F382C]">Mieux notés</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {EXPERIENCES.map(exp => (
                <div 
                  key={exp.id}
                  className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] flex flex-col sm:flex-row"
                  style={{ backdropFilter: "blur(16px)", background: "rgba(255,255,255,0.04)" }}
                >
                  <div className="relative h-44 sm:h-auto sm:w-48 shrink-0 overflow-hidden">
                    <img 
                      src={exp.image} 
                      alt={exp.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {exp.badge && (
                      <span className="absolute top-2 left-2 bg-[#10B981] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full">
                        {exp.badge}
                      </span>
                    )}
                    <button
                      aria-label="Ajouter aux favoris"
                      className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/60 hover:text-red-400 hover:bg-white/20 transition-all"
                    >
                      <Heart className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-white/40 mb-1">
                        <span>{exp.city}, Bénin</span>
                        <span className="flex items-center gap-1 font-bold text-white">
                          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                          {exp.rating} ({exp.reviewsCount})
                        </span>
                      </div>

                      <Link href={`/activites/${exp.slug}`}>
                        <h3 className="font-extrabold text-base text-white group-hover:text-amber-300 transition-colors line-clamp-2 leading-snug">
                          {exp.title}
                        </h3>
                      </Link>
                    </div>

                    <p className="text-xs text-white/40 line-clamp-2">
                      {exp.description}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
                      <div>
                        <span className="text-[10px] text-white/30 block">À partir de</span>
                        <span className="font-extrabold text-sm text-white">
                          {exp.price.toLocaleString()} FCFA
                        </span>
                      </div>

                      <Link 
                        href={`/activites/${exp.slug}`}
                        className="px-3.5 py-1.5 border border-white/15 hover:bg-[#10B981] hover:border-[#10B981] text-white text-xs font-bold rounded-xl transition-all"
                      >
                        Réserver
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Panel: Interactive Map View */}
          <div className={`col-span-1 lg:col-span-4 lg:sticky lg:top-40 ${showMapMobile ? "block" : "hidden lg:block"}`}>
            <div className="rounded-2xl border border-white/10 shadow-xl overflow-hidden h-[500px] lg:h-[600px] flex flex-col" style={{ backdropFilter: "blur(16px)", background: "rgba(255,255,255,0.04)" }}>
              
              {/* Map Header */}
              <div className="bg-white/5 border-b border-white/10 text-white px-4 py-3 flex items-center justify-between">
                <span className="text-xs font-bold flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#10B981]" />
                  Carte des activités
                </span>
                <span className="text-[10px] bg-[#10B981]/20 px-2 py-0.5 rounded text-[#10B981] font-mono">
                  GPS Live
                </span>
              </div>

              {/* Map Canvas */}
              <div className="relative flex-1 overflow-hidden flex items-center justify-center">
                
                <div className="absolute inset-0 bg-[radial-gradient(rgba(16,185,129,0.1)_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />

                <div className="relative w-full h-full p-4 flex flex-col justify-between">
                  
                  {/* Pin 1 */}
                  <div className="absolute top-[15%] left-[45%] bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/20 flex items-center gap-2 animate-bounce">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                    <span className="text-[11px] font-bold text-white">Pendjari (45 000 F)</span>
                  </div>

                  {/* Pin 2 */}
                  <div className="absolute top-[50%] left-[38%] bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/20 flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                    <span className="text-[11px] font-bold text-white">Abomey (10 000 F)</span>
                  </div>

                  {/* Pin 3 */}
                  <div className="absolute bottom-[20%] right-[25%] bg-[#10B981] text-white p-2 rounded-xl shadow-xl border border-[#10B981] flex items-center gap-2 z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                    <span className="text-[11px] font-bold">Ganvié (25 000 F)</span>
                  </div>

                  {/* Pin 4 */}
                  <div className="absolute bottom-[16%] left-[25%] bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/20 flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                    <span className="text-[11px] font-bold text-white">Ouidah (15 000 F)</span>
                  </div>

                  {/* Map Label */}
                  <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 text-xs font-black text-white shadow-sm">
                    Bénin - 126 offres
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
