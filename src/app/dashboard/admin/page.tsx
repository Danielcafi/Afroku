"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  Compass, 
  Ticket, 
  CreditCard, 
  DollarSign, 
  Star, 
  FileText, 
  BarChart3, 
  Settings, 
  ShieldAlert, 
  LogOut, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  Search, 
  Bell,
  PieChart as PieIcon
} from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("tableau-de-bord");

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex text-gray-900 font-sans">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#0F382C] text-white flex flex-col justify-between p-5 hidden md:flex shrink-0">
        <div className="space-y-8">
          <Link href="/" className="inline-block px-2">
            <span className="text-2xl font-extrabold text-white tracking-tight">
              Afro<span className="text-[#10B981]">ku</span>
            </span>
            <span className="block text-[10px] text-purple-300 font-bold tracking-widest uppercase">
              Dashboard Admin
            </span>
          </Link>

          <nav className="space-y-1 text-xs font-semibold">
            {[
              { id: "tableau-de-bord", label: "Tableau de bord", icon: LayoutDashboard },
              { id: "utilisateurs", label: "Utilisateurs", icon: Users },
              { id: "partenaires", label: "Partenaires", icon: UserCheck },
              { id: "experiences", label: "Expériences", icon: Compass },
              { id: "reservations", label: "Réservations", icon: Ticket },
              { id: "transactions", label: "Transactions", icon: CreditCard },
              { id: "paiements", label: "Paiements", icon: DollarSign },
              { id: "avis", label: "Avis", icon: Star },
              { id: "contenus", label: "Contenus", icon: FileText },
              { id: "statistiques", label: "Statistiques", icon: BarChart3 },
              { id: "parametres", label: "Paramètres", icon: Settings },
              { id: "logs", label: "Logs", icon: ShieldAlert },
            ].map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all ${
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
        
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-20 shadow-xs">
          <div>
            <h1 className="text-xl font-black text-gray-900">Dashboard Admin</h1>
            <p className="text-xs text-gray-500">Supervision globale de la plateforme Afroku Bénin</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5 pl-2 border-l border-gray-200">
              <div className="w-9 h-9 rounded-full bg-purple-900 text-white font-black flex items-center justify-center text-xs">
                AD
              </div>
              <span className="text-xs font-extrabold text-gray-800 hidden sm:inline">Admin Afrik</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 space-y-8 max-w-6xl w-full">
          
          {/* KPI Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm space-y-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Utilisateurs</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-gray-900">12 543</span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+12%</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm space-y-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Réservations</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-gray-900">3 245</span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+18%</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm space-y-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Revenus Globaux</span>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-black text-[#0F382C]">125 500 000 F</span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+32%</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm space-y-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Partenaires Certifiés</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-gray-900">256</span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+8</span>
              </div>
            </div>

          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Donut Chart Visual Mockup */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-4">
              <h2 className="text-base font-extrabold text-gray-900">
                Réservations par région
              </h2>

              <div className="flex items-center justify-center py-6">
                <div className="relative w-44 h-44 rounded-full border-12 border-[#0F382C] border-t-[#10B981] border-r-amber-500 border-l-blue-600 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-xl font-black text-gray-900 block">3 245</span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Total</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-600">
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-[#0F382C]" /> Cotonou (42%)</div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-[#10B981]" /> Ouidah (28%)</div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-amber-500" /> Abomey (15%)</div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-blue-600" /> Natitingou (15%)</div>
              </div>
            </div>

            {/* Bar Chart Visual Mockup */}
            <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-4">
              <h2 className="text-base font-extrabold text-gray-900">
                Réservations (30 derniers jours)
              </h2>

              <div className="h-52 flex items-end justify-between gap-2 pt-6 px-2">
                {[40, 65, 30, 85, 90, 45, 70, 100, 80, 60, 75, 95].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                    <div 
                      style={{ height: `${h}%` }} 
                      className="w-full bg-[#0F382C] group-hover:bg-[#10B981] rounded-t-md transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Tables Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Table 1: Dernières réservations */}
            <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-4">
              <h2 className="text-base font-extrabold text-gray-900">
                Dernières réservations
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-gray-700">
                  <thead className="bg-gray-50 text-gray-400 font-bold uppercase text-[10px]">
                    <tr>
                      <th className="p-2.5 rounded-l-lg">Voyageur</th>
                      <th className="p-2.5">Lieu</th>
                      <th className="p-2.5">Montant</th>
                      <th className="p-2.5 rounded-r-lg">Statut</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 font-medium">
                    <tr>
                      <td className="p-2.5 font-bold text-gray-900">Sophie Martin</td>
                      <td className="p-2.5">Ganvié</td>
                      <td className="p-2.5 font-bold text-[#0F382C]">52 500 FCFA</td>
                      <td className="p-2.5"><span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded">Confirmé</span></td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-gray-900">James Anderson</td>
                      <td className="p-2.5">Pendjari</td>
                      <td className="p-2.5 font-bold text-[#0F382C]">90 000 FCFA</td>
                      <td className="p-2.5"><span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded">Confirmé</span></td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-gray-900">Clara Bernard</td>
                      <td className="p-2.5">Ouidah</td>
                      <td className="p-2.5 font-bold text-[#0F382C]">30 000 FCFA</td>
                      <td className="p-2.5"><span className="bg-amber-50 text-amber-700 font-bold px-2 py-0.5 rounded">En attente</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2: Demandes de partenaires */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-4">
              <h2 className="text-base font-extrabold text-gray-900">
                Demandes de partenaires
              </h2>

              <div className="space-y-3">
                {[
                  { name: "Abdel Bassa", region: "Natitingou", status: "S'afficher", color: "bg-blue-50 text-blue-700" },
                  { name: "Gaston Adjo", region: "Tori-Bossito", status: "À vérifier", color: "bg-amber-50 text-amber-700" },
                  { name: "Boris Safari", region: "Parakou", status: "À vérifier", color: "bg-amber-50 text-amber-700" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl text-xs">
                    <div>
                      <h4 className="font-bold text-gray-900">{item.name}</h4>
                      <p className="text-[11px] text-gray-500">{item.region}</p>
                    </div>
                    <span className={`px-2.5 py-1 rounded font-bold text-[11px] ${item.color}`}>
                      {item.status}
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
