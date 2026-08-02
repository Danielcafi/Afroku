"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EXPERIENCES } from "@/data/mockData";
import { Star, Clock, Filter, MapPin, Search, ChevronDown, SlidersHorizontal, Map as MapIcon, Grid } from "lucide-react";
import Link from "next/link";

export default function ExplorerPage() {
  const [selectedCities, setSelectedCities] = useState<string[]>(["Cotonou", "Ouidah"]);
  const [maxPrice, setMaxPrice] = useState<number>(150000);
  const [selectedDuration, setSelectedDuration] = useState<string>("Toutes");
  const [showMapMobile, setShowMapMobile] = useState<boolean>(false);

  const toggleCity = (city: string) => {
    setSelectedCities(prev => 
      prev.includes(city) ? prev.filter(c => c !== city) : [...prev, city]
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar />

      {/* Filter & Header Bar */}
      <div className="bg-white border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div>
            <h1 className="text-xl font-extrabold text-[#0F382C]">Explorer</h1>
            <p className="text-xs text-gray-500">Trouvez votre prochaine expérience au Bénin</p>
          </div>

          {/* Quick Search Bar */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-xl text-xs w-full sm:w-72">
              <Search className="w-4 h-4 text-gray-400 shrink-0" />
              <input 
                type="text" 
                placeholder="Destination, activité ou guide..." 
                className="bg-transparent focus:outline-none w-full text-gray-800"
              />
            </div>

            <button 
              onClick={() => setShowMapMobile(!showMapMobile)}
              className="lg:hidden flex items-center gap-1.5 px-3 py-2 bg-[#0F382C] text-white text-xs font-bold rounded-xl shrink-0"
            >
              <MapIcon className="w-4 h-4" />
              <span>{showMapMobile ? "Liste" : "Carte"}</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Panel: Filters */}
          <div className="hidden lg:block lg:col-span-3 bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm space-y-6">
            
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h3 className="font-extrabold text-sm text-[#0F382C] flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#E85D04]" />
                <span>Filtres</span>
              </h3>
              <button 
                onClick={() => { setSelectedCities([]); setMaxPrice(150000); }} 
                className="text-[11px] font-bold text-gray-400 hover:text-[#E85D04]"
              >
                Réinitialiser
              </button>
            </div>

            {/* Filter 1: Ville */}
            <div className="space-y-2.5">
              <label className="block text-xs font-bold text-gray-900 uppercase tracking-wide">
                Ville
              </label>
              <div className="space-y-2">
                {["Cotonou", "Ouidah", "Abomey", "Natitingou", "Parakou", "Grand-Popo"].map(city => (
                  <label key={city} className="flex items-center gap-2 text-xs font-medium text-gray-700 cursor-pointer hover:text-[#0F382C]">
                    <input
                      type="checkbox"
                      checked={selectedCities.includes(city)}
                      onChange={() => toggleCity(city)}
                      className="rounded border-gray-300 text-[#0F382C] focus:ring-[#0F382C]"
                    />
                    <span>{city}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter 2: Prix */}
            <div className="space-y-2.5 pt-4 border-t border-gray-100">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-gray-900 uppercase tracking-wide">Prix (par personne)</span>
                <span className="text-[#E85D04] font-extrabold">{maxPrice.toLocaleString()} FCFA</span>
              </div>
              <input
                type="range"
                min="5000"
                max="150000"
                step="5000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#E85D04]"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-medium">
                <span>5 000 FCFA</span>
                <span>150 000+ FCFA</span>
              </div>
            </div>

            {/* Filter 3: Durée */}
            <div className="space-y-2.5 pt-4 border-t border-gray-100">
              <label className="block text-xs font-bold text-gray-900 uppercase tracking-wide">
                Durée
              </label>
              <div className="space-y-2">
                {["Moins de 2h", "2h à 4h", "1 jour", "Plus de 2 jours"].map(dur => (
                  <label key={dur} className="flex items-center gap-2 text-xs font-medium text-gray-700 cursor-pointer">
                    <input
                      type="radio"
                      name="duration"
                      value={dur}
                      onChange={() => setSelectedDuration(dur)}
                      className="text-[#0F382C] focus:ring-[#0F382C]"
                    />
                    <span>{dur}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter 4: Catégorie */}
            <div className="space-y-2.5 pt-4 border-t border-gray-100">
              <label className="block text-xs font-bold text-gray-900 uppercase tracking-wide">
                Catégorie
              </label>
              <div className="space-y-2">
                {["Culture & Histoire", "Nature & Safari", "Gastronomie", "Art & Artisanat"].map(cat => (
                  <label key={cat} className="flex items-center gap-2 text-xs font-medium text-gray-700 cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300 text-[#0F382C]" />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter 5: Note */}
            <div className="space-y-2.5 pt-4 border-t border-gray-100">
              <label className="block text-xs font-bold text-gray-900 uppercase tracking-wide">
                Note des voyageurs
              </label>
              <div className="space-y-2 text-xs">
                <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-[#0F382C]" />
                  <span className="flex items-center gap-1 font-bold">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> 4,5 et plus
                  </span>
                </label>
                <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-[#0F382C]" />
                  <span className="flex items-center gap-1 font-bold">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> 4,0 et plus
                  </span>
                </label>
              </div>
            </div>

          </div>

          {/* Middle Panel: Experiences List */}
          <div className={`col-span-1 lg:col-span-5 space-y-4 ${showMapMobile ? "hidden lg:block" : "block"}`}>
            
            <div className="flex items-center justify-between text-xs font-semibold text-gray-500">
              <span><strong>126 expériences</strong> trouvées</span>
              <div className="flex items-center gap-2">
                <span>Trier par :</span>
                <select className="bg-white border border-gray-200 rounded-lg py-1 px-2 text-xs font-bold text-gray-800 focus:outline-none">
                  <option>Populaires</option>
                  <option>Prix croissant</option>
                  <option>Prix décroissant</option>
                  <option>Mieux notés</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {EXPERIENCES.map(exp => (
                <div 
                  key={exp.id}
                  className="bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col sm:flex-row group"
                >
                  <div className="relative h-44 sm:h-auto sm:w-48 shrink-0 bg-gray-100">
                    <img 
                      src={exp.image} 
                      alt={exp.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {exp.badge && (
                      <span className="absolute top-2 left-2 bg-[#FFF7ED] text-[#C2410C] text-[10px] font-bold px-2 py-0.5 rounded-md">
                        {exp.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-gray-500 mb-1">
                        <span>{exp.city}, Bénin</span>
                        <span className="flex items-center gap-1 font-bold text-gray-800">
                          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                          {exp.rating} ({exp.reviewsCount})
                        </span>
                      </div>

                      <Link href={`/activites/${exp.slug}`}>
                        <h3 className="font-bold text-base text-gray-900 group-hover:text-[#E85D04] transition-colors leading-snug">
                          {exp.title}
                        </h3>
                      </Link>
                    </div>

                    <p className="text-xs text-gray-500 line-clamp-2">
                      {exp.description}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs">
                      <div>
                        <span className="text-[10px] text-gray-400 block">À partir de</span>
                        <span className="font-extrabold text-sm text-[#0F382C]">
                          {exp.price.toLocaleString()} FCFA
                        </span>
                      </div>

                      <Link 
                        href={`/activites/${exp.slug}`}
                        className="px-3.5 py-1.5 bg-[#0F382C] text-white text-xs font-bold rounded-lg hover:bg-[#1B5E46] transition-all"
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
          <div className={`col-span-1 lg:col-span-4 sticky top-40 ${showMapMobile ? "block" : "hidden lg:block"}`}>
            <div className="bg-white rounded-2xl border border-gray-200/80 shadow-md overflow-hidden h-[600px] flex flex-col">
              
              {/* Fake Interactive Map Header */}
              <div className="bg-[#0F382C] text-white px-4 py-3 flex items-center justify-between">
                <span className="text-xs font-bold flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#E85D04]" />
                  Carte des activités du Bénin
                </span>
                <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded text-emerald-100 font-mono">
                  GPS Live
                </span>
              </div>

              {/* Map Canvas Mockup */}
              <div className="relative flex-1 bg-[#E5E9F0] overflow-hidden flex items-center justify-center">
                
                {/* Background Map Graphic SVG / Styling */}
                <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

                {/* Country Outline / Decorative Shape */}
                <div className="relative w-full h-full p-4 flex flex-col justify-between">
                  
                  {/* Pin 1: Pendjari / Natitingou */}
                  <div className="absolute top-[15%] left-[45%] bg-white p-2 rounded-xl shadow-lg border border-gray-200 flex items-center gap-2 animate-bounce">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-[11px] font-bold text-gray-900">Pendjari (45 000 F)</span>
                  </div>

                  {/* Pin 2: Abomey */}
                  <div className="absolute top-[50%] left-[38%] bg-white p-2 rounded-xl shadow-lg border border-gray-200 flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-[11px] font-bold text-gray-900">Abomey (10 000 F)</span>
                  </div>

                  {/* Pin 3: Ganvié & Cotonou */}
                  <div className="absolute bottom-[20%] right-[25%] bg-[#0F382C] text-white p-2 rounded-xl shadow-xl border border-white flex items-center gap-2 z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#E85D04]" />
                    <span className="text-[11px] font-bold">Ganvié (25 000 F)</span>
                  </div>

                  {/* Pin 4: Ouidah */}
                  <div className="absolute bottom-[16%] left-[25%] bg-white p-2 rounded-xl shadow-lg border border-gray-200 flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-[11px] font-bold text-gray-900">Ouidah (15 000 F)</span>
                  </div>

                  {/* Map Label */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-black text-gray-800 shadow-sm">
                    Bénin - 126 offres géolocalisées
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
