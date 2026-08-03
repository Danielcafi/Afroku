"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EXPERIENCES } from "@/data/mockData";
import { Star, MapPin, Clock, Users, Globe, ShieldCheck, CheckCircle2, Heart, Share2, Calendar as CalendarIcon, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ActivityDetailPage() {
  const router = useRouter();
  const exp = EXPERIENCES[0]; // Defaulting to Visite de Ganvié as shown in screenshot mockup
  
  const [selectedDate, setSelectedDate] = useState("18 Mai 2026");
  const [travelersCount, setTravelersCount] = useState(2);
  const [activeTab, setActiveTab] = useState("Aperçu");

  const totalAmount = exp.price * travelersCount;

  const handleBooking = () => {
    router.push(`/reservation?exp=${exp.id}&travelers=${travelersCount}&date=${encodeURIComponent(selectedDate)}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500">
          <Link href="/" className="hover:text-[#0F382C]">Accueil</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href="/explorer" className="hover:text-[#0F382C]">Explorer</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-900 truncate">{exp.title}</span>
        </nav>

        {/* Title Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-3">
              <span className="bg-[#FFF7ED] text-[#C2410C] text-xs font-bold px-2.5 py-0.5 rounded-full border border-[#FFEDD5]">
                {exp.badge}
              </span>
              <div className="flex items-center gap-1 text-xs font-bold text-gray-800">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>{exp.rating}</span>
                <span className="text-gray-400 font-normal">({exp.reviewsCount} avis)</span>
              </div>
              <span className="text-xs text-gray-400">•</span>
              <span className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#0F382C]" />
                {exp.location}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              {exp.title}
            </h1>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button className="p-2.5 bg-white rounded-xl border border-gray-200 text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-all flex items-center gap-1.5 text-xs font-bold">
              <Heart className="w-4 h-4" />
              <span className="hidden sm:inline">Sauvegarder</span>
            </button>
            <button className="p-2.5 bg-white rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-all flex items-center gap-1.5 text-xs font-bold">
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">Partager</span>
            </button>
          </div>
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 rounded-2xl overflow-hidden shadow-md">
          {/* Main big image */}
          <div className="md:col-span-2 relative h-72 sm:h-96 bg-gray-100">
            <img src={exp.gallery[0]} alt={exp.title} className="w-full h-full object-cover" />
          </div>
          {/* Sub images */}
          <div className="hidden md:grid md:col-span-2 grid-cols-2 gap-3 relative">
            <img src={exp.gallery[1]} alt={exp.title} className="w-full h-[186px] object-cover" />
            <img src={exp.gallery[2]} alt={exp.title} className="w-full h-[186px] object-cover" />
            <img src={exp.gallery[3]} alt={exp.title} className="w-full h-[186px] object-cover" />
            <div className="relative h-[186px] overflow-hidden group cursor-pointer">
              <img src={exp.gallery[0]} alt={exp.title} className="w-full h-full object-cover blur-xs" />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-xs font-extrabold">
                Voir toutes les photos (18)
              </div>
            </div>
          </div>
        </div>

        {/* Main Details & Booking Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Tabs */}
            <div className="flex items-center gap-6 border-b border-gray-200 text-sm font-bold">
              {["Aperçu", "Programme", "Inclus", "Guide", "Avis", "FAQ"].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 border-b-2 transition-all ${
                    activeTab === tab 
                      ? "border-[#0F382C] text-[#0F382C]" 
                      : "border-transparent text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Quick Info Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-white rounded-2xl border border-gray-200/80 shadow-sm text-center">
              <div className="space-y-1">
                <Clock className="w-5 h-5 text-[#10B981] mx-auto" />
                <span className="block text-[11px] text-gray-400 font-bold uppercase">Durée</span>
                <span className="block text-xs font-extrabold text-gray-900">{exp.duration}</span>
              </div>
              <div className="space-y-1">
                <Globe className="w-5 h-5 text-[#0F382C] mx-auto" />
                <span className="block text-[11px] text-gray-400 font-bold uppercase">Langues</span>
                <span className="block text-xs font-extrabold text-gray-900">{exp.languages.join(", ")}</span>
              </div>
              <div className="space-y-1">
                <Users className="w-5 h-5 text-[#0F382C] mx-auto" />
                <span className="block text-[11px] text-gray-400 font-bold uppercase">Taille groupe</span>
                <span className="block text-xs font-extrabold text-gray-900">{exp.groupSize}</span>
              </div>
              <div className="space-y-1">
                <ShieldCheck className="w-5 h-5 text-emerald-600 mx-auto" />
                <span className="block text-[11px] text-gray-400 font-bold uppercase">Annulation</span>
                <span className="block text-xs font-extrabold text-gray-900">Gratuite 24h avant</span>
              </div>
            </div>

            {/* About Experience Description */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-4">
              <h3 className="text-lg font-extrabold text-gray-900">
                À propos de cette expérience
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {exp.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-4">
              <h3 className="text-lg font-extrabold text-gray-900">
                Points forts
              </h3>
              <ul className="space-y-3">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#0F382C] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guide Profile */}
            <div className="bg-[#ECFDF5] p-6 rounded-2xl border border-[#A7F3D0] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img 
                  src={exp.guideAvatar} 
                  alt={exp.guideName} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <span className="text-[10px] font-extrabold text-[#0F382C] uppercase tracking-wider bg-white px-2 py-0.5 rounded-md">
                    Guide Certifié Afroku
                  </span>
                  <h4 className="text-base font-extrabold text-gray-900 mt-1">
                    {exp.guideName}
                  </h4>
                  <p className="text-xs text-gray-600">{exp.guideTitle}</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-[#0F382C] text-white text-xs font-bold rounded-xl hover:bg-[#1B5E46] transition-all">
                Contacter le guide
              </button>
            </div>

          </div>

          {/* Right Sticky Booking Widget */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xl space-y-6">
              
              <div className="pb-4 border-b border-gray-100">
                <span className="text-xs text-gray-400 block font-medium">À partir de</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black text-[#0F382C]">
                    {exp.price.toLocaleString()} FCFA
                  </span>
                  <span className="text-xs font-semibold text-gray-500">/ personne</span>
                </div>
              </div>

              {/* Date Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                  Sélectionner une date
                </label>
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between text-xs font-semibold text-gray-800">
                  <span className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-[#10B981]" />
                    {selectedDate}
                  </span>
                  <button className="text-[#0F382C] font-bold text-[11px] hover:underline">
                    Changer
                  </button>
                </div>
              </div>

              {/* Travelers Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                  Nombre de voyageurs
                </label>
                <select
                  value={travelersCount}
                  onChange={(e) => setTravelersCount(Number(e.target.value))}
                  className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 text-xs font-semibold text-gray-800 focus:outline-none"
                >
                  <option value={1}>1 voyageur ({exp.price.toLocaleString()} FCFA)</option>
                  <option value={2}>2 voyageurs ({(exp.price * 2).toLocaleString()} FCFA)</option>
                  <option value={3}>3 voyageurs ({(exp.price * 3).toLocaleString()} FCFA)</option>
                  <option value={4}>4 voyageurs ({(exp.price * 4).toLocaleString()} FCFA)</option>
                </select>
              </div>

              {/* Total Calculation */}
              <div className="pt-2 border-t border-gray-100 flex justify-between items-center text-sm font-bold">
                <span className="text-gray-600">Total ({travelersCount} pers.)</span>
                <span className="text-xl font-extrabold text-[#10B981]">
                  {totalAmount.toLocaleString()} FCFA
                </span>
              </div>

              {/* Booking Primary CTA Button */}
              <button
                onClick={handleBooking}
                className="w-full py-3.5 bg-[#10B981] hover:bg-[#059669] text-white text-base font-extrabold rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                Réserver maintenant
              </button>

              {/* Micro guarantees */}
              <div className="space-y-2 pt-2 text-center text-xs text-gray-500 font-medium">
                <div className="flex items-center justify-center gap-1.5 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Confirmation immédiate</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#0F382C]" />
                  <span>Paiement 100% sécurisé (MoMo / Carte)</span>
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
