"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Ticket, 
  Map, 
  Heart, 
  Star, 
  User, 
  Settings, 
  LogOut, 
  Calendar, 
  QrCode, 
  CheckCircle2,
  TrendingUp,
  Search,
  Bell
} from "lucide-react";

export default function TouristDashboard() {
  const [activeTab, setActiveTab] = useState("tableau-de-bord");

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex text-gray-900 font-sans">
      
      {/* Sidebar - Deep Forest Green */}
      <aside className="w-64 bg-[#0F382C] text-white flex flex-col justify-between p-5 hidden md:flex shrink-0">
        <div className="space-y-8">
          
          {/* Brand Logo */}
          <Link href="/" className="inline-block px-2">
            <span className="text-2xl font-extrabold text-white tracking-tight">
              Afro<span className="text-[#10B981]">ku</span>
            </span>
            <span className="block text-[10px] text-emerald-200 font-bold tracking-widest uppercase">
              Espace Voyageur
            </span>
          </Link>

          {/* Navigation Items */}
          <nav className="space-y-1.5 text-xs font-semibold">
            {[
              { id: "tableau-de-bord", label: "Tableau de bord", icon: LayoutDashboard },
              { id: "reservations", label: "Mes réservations", icon: Ticket },
              { id: "itineraires", label: "Mes itinéraires", icon: Map },
              { id: "favoris", label: "Favoris", icon: Heart },
              { id: "avis", label: "Avis", icon: Star },
              { id: "profil", label: "Profil", icon: User },
              { id: "parametres", label: "Paramètres", icon: Settings },
            ].map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all ${
                    isActive 
                      ? "bg-white/15 text-white font-bold shadow-sm" 
                      : "text-emerald-100/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Logout */}
        <Link href="/" className="flex items-center gap-3 px-3.5 py-3 text-xs font-semibold text-red-300 hover:bg-white/5 rounded-xl transition-all">
          <LogOut className="w-4 h-4" />
          <span>Déconnexion</span>
        </Link>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-20 shadow-xs">
          <div>
            <h1 className="text-xl font-black text-gray-900">Tableau de bord</h1>
            <p className="text-xs text-gray-500">Voici un aperçu de votre activité voyage</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
              <input 
                type="text" 
                placeholder="Rechercher..." 
                className="pl-9 pr-4 py-2 bg-gray-100 rounded-xl text-xs focus:outline-none w-48 text-gray-800"
              />
            </div>
            <button className="p-2 bg-gray-100 rounded-xl text-gray-600 relative">
              <Bell className="w-4 h-4" />
              <span className="w-2 h-2 rounded-full bg-[#10B981] absolute top-1.5 right-1.5" />
            </button>
            <div className="flex items-center gap-2.5 pl-2 border-l border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" 
                alt="User" 
                className="w-9 h-9 rounded-full object-cover border-2 border-[#0F382C]"
              />
              <span className="text-xs font-extrabold text-gray-800 hidden sm:inline">Dame Noma</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 space-y-8 max-w-6xl w-full">
          
          {/* KPI Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-gray-400">
                <span className="text-xs font-bold uppercase tracking-wider">Réservations</span>
                <Ticket className="w-4 h-4 text-[#0F382C]" />
              </div>
              <span className="text-2xl font-black text-gray-900 block">12</span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-gray-400">
                <span className="text-xs font-bold uppercase tracking-wider">À venir</span>
                <Calendar className="w-4 h-4 text-[#10B981]" />
              </div>
              <span className="text-2xl font-black text-gray-900 block">2</span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-gray-400">
                <span className="text-xs font-bold uppercase tracking-wider">Terminées</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-2xl font-black text-gray-900 block">10</span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-gray-400">
                <span className="text-xs font-bold uppercase tracking-wider">Dépenses</span>
                <TrendingUp className="w-4 h-4 text-purple-600" />
              </div>
              <span className="text-2xl font-black text-[#0F382C] block">350 000 FCFA</span>
            </div>

          </div>

          {/* Section: Next Booking */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-4">
            <h2 className="text-base font-extrabold text-gray-900">
              Prochaine réservation
            </h2>

            <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=200&q=80" 
                  alt="Ganvié" 
                  className="w-20 h-20 rounded-xl object-cover"
                />
                <div>
                  <span className="bg-[#ECFDF5] text-[#0F382C] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                    Confirmé
                  </span>
                  <h3 className="font-extrabold text-base text-gray-900 mt-1">
                    Visite de Ganvié & Village lacustre
                  </h3>
                  <p className="text-xs text-gray-500">18 Mai 2026 à 09h00 • 2 voyageurs</p>
                </div>
              </div>

              <button className="px-4 py-2.5 bg-[#0F382C] text-white text-xs font-bold rounded-xl flex items-center gap-2 hover:bg-[#1B5E46] transition-all shrink-0">
                <QrCode className="w-4 h-4" />
                <span>Voir mon billet</span>
              </button>
            </div>
          </div>

          {/* Section: Favorites */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-4">
            <h2 className="text-base font-extrabold text-gray-900">
              Mes favoris
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex items-center gap-3">
                <img 
                  src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=150&q=80" 
                  alt="Safari" 
                  className="w-14 h-14 rounded-lg object-cover"
                />
                <div>
                  <h4 className="font-bold text-xs text-gray-900">Safari au Parc de Pendjari</h4>
                  <p className="text-[11px] text-gray-500">Parc Pendjari, Bénin</p>
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex items-center gap-3">
                <img 
                  src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=150&q=80" 
                  alt="Ouidah" 
                  className="w-14 h-14 rounded-lg object-cover"
                />
                <div>
                  <h4 className="font-bold text-xs text-gray-900">Histoire & Culture de Ouidah</h4>
                  <p className="text-[11px] text-gray-500">Ouidah, Bénin</p>
                </div>
              </div>
            </div>
          </div>

        </main>

      </div>
    </div>
  );
}
