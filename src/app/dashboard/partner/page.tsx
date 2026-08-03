"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Package, 
  Calendar, 
  MessageSquare, 
  Star, 
  CreditCard, 
  BarChart3, 
  Settings, 
  LogOut, 
  TrendingUp, 
  Eye, 
  Users,
  Search,
  Bell,
  CheckCircle2
} from "lucide-react";

export default function PartnerDashboard() {
  const [activeTab, setActiveTab] = useState("vue-ensemble");

  return (
    <div className="min-h-screen bg-[#ECFDF5] flex text-gray-900 font-sans">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#0F382C] text-white flex flex-col justify-between p-5 hidden md:flex shrink-0">
        <div className="space-y-8">
          <Link href="/" className="inline-block px-2">
            <span className="text-2xl font-extrabold text-white tracking-tight">
              Afro<span className="text-[#10B981]">ku</span>
            </span>
            <span className="block text-[10px] text-emerald-200 font-bold tracking-widest uppercase">
              Espace Guide / Partenaire
            </span>
          </Link>

          <nav className="space-y-1.5 text-xs font-semibold">
            {[
              { id: "vue-ensemble", label: "Vue d'ensemble", icon: LayoutDashboard },
              { id: "offres", label: "Mes offres", icon: Package },
              { id: "reservations", label: "Réservations", icon: Calendar },
              { id: "calendrier", label: "Calendrier", icon: Calendar },
              { id: "messages", label: "Messages", icon: MessageSquare },
              { id: "avis", label: "Avis clients", icon: Star },
              { id: "paiements", label: "Paiements & Payouts", icon: CreditCard },
              { id: "statistiques", label: "Statistiques", icon: BarChart3 },
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

        <Link href="/" className="flex items-center gap-3 px-3.5 py-3 text-xs font-semibold text-red-300 hover:bg-white/5 rounded-xl transition-all">
          <LogOut className="w-4 h-4" />
          <span>Déconnexion</span>
        </Link>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-20 shadow-xs">
          <div>
            <h1 className="text-xl font-black text-gray-900">Bonjour, Jean Guide</h1>
            <p className="text-xs text-gray-500">Voici un aperçu de votre activité sur Afroku</p>
          </div>

          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-[#10B981] text-white text-xs font-bold rounded-xl shadow hover:bg-[#059669]">
              + Créer une offre
            </button>
            <div className="flex items-center gap-2.5 pl-2 border-l border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" 
                alt="Jean Guide" 
                className="w-9 h-9 rounded-full object-cover border-2 border-[#10B981]"
              />
              <span className="text-xs font-extrabold text-gray-800 hidden sm:inline">Jean Guide</span>
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
                <Users className="w-4 h-4 text-[#0F382C]" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-gray-900">45</span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+12%</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-gray-400">
                <span className="text-xs font-bold uppercase tracking-wider">Chiffre d'affaires</span>
                <TrendingUp className="w-4 h-4 text-[#10B981]" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-black text-[#0F382C]">1 250 000 FCFA</span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+15%</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-gray-400">
                <span className="text-xs font-bold uppercase tracking-wider">Vues</span>
                <Eye className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-gray-900">3 245</span>
                <span className="text-xs font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded">-8%</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-gray-400">
                <span className="text-xs font-bold uppercase tracking-wider">Note moyenne</span>
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-gray-900">4,8 / 5</span>
                <span className="text-xs text-gray-400 font-medium">(98 avis)</span>
              </div>
            </div>

          </div>

          {/* Section: Chart + Upcoming Bookings Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Chart Column */}
            <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-extrabold text-gray-900">
                  Réservations (30 derniers jours)
                </h2>
                <span className="text-xs text-gray-400 font-semibold">Mai 2026</span>
              </div>

              {/* Line Chart SVG Visual Mockup */}
              <div className="h-56 w-full pt-4">
                <svg className="w-full h-full" viewBox="0 0 500 150">
                  <path
                    d="M0,120 Q50,80 100,100 T200,40 T300,90 T400,30 T500,70"
                    fill="none"
                    stroke="#0F382C"
                    strokeWidth="3"
                  />
                  <path
                    d="M0,120 Q50,80 100,100 T200,40 T300,90 T400,30 T500,70 L500,150 L0,150 Z"
                    fill="url(#gradient)"
                    opacity="0.2"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#0F382C" />
                      <stop offset="100%" stopColor="#ffffff" />
                    </linearGradient>
                  </defs>
                  <circle cx="200" cy="40" r="5" fill="#10B981" />
                  <circle cx="400" cy="30" r="5" fill="#10B981" />
                </svg>
              </div>
            </div>

            {/* Upcoming Bookings List Column */}
            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-4">
              <h2 className="text-base font-extrabold text-gray-900">
                Prochaines réservations
              </h2>

              <div className="space-y-3">
                {[
                  { name: "Sophie Martin", tour: "Visite de Ganvié & Village lacustre", date: "18 Mai", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" },
                  { name: "James Anderson", tour: "Visite de Ganvié & Village lacustre", date: "19 Mai", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" },
                  { name: "Clara Bernard", tour: "Visite de Ganvié & Village lacustre", date: "21 Mai", avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=100&q=80" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2.5 bg-gray-50 rounded-xl">
                    <img src={item.avatar} alt={item.name} className="w-9 h-9 rounded-full object-cover" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-xs text-gray-900 truncate">{item.name}</h4>
                      <p className="text-[10px] text-gray-500 truncate">{item.tour}</p>
                    </div>
                    <span className="text-[10px] font-bold text-[#10B981] bg-[#FFF7ED] px-2 py-0.5 rounded">
                      {item.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </main>

      </div>
    </div>
  );
}
