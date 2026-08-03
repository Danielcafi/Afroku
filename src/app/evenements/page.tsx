"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EVENTS } from "@/data/mockData";
import { Ticket, Calendar, MapPin, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function EvenementsPage() {
  const router = useRouter();

  const handleBuyTicket = (eventTitle: string, price: number) => {
    router.push(`/reservation?exp=${encodeURIComponent(eventTitle)}&travelers=1&date=Festival`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#ECFDF5]">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-gray-950 via-[#0F382C] to-gray-900 text-white py-14 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <span className="bg-[#10B981] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Billetterie Officielle Bénin
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Événements & Festivals Internationaux
          </h1>
          <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Réservez vos tickets officiels pour les <strong>Vodun Days</strong> à Ouidah, le festival <strong>WeLoveEya</strong> à Cotonou et le FITHEB avec confirmation instantanée par Pass QR Code.
          </p>
        </div>
      </section>

      {/* Events List */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {EVENTS.map(event => (
            <div 
              key={event.id}
              className="bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-2xl transition-all overflow-hidden flex flex-col justify-between group"
            >
              {/* Event Image Banner */}
              <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
                
                {event.badge && (
                  <span className="absolute top-3 left-3 bg-[#10B981] text-white text-xs font-extrabold px-3 py-1 rounded-full shadow">
                    {event.badge}
                  </span>
                )}

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-xs font-bold text-amber-300 block uppercase tracking-wider">
                    {event.category}
                  </span>
                  <h3 className="text-xl font-black leading-snug group-hover:text-amber-300 transition-colors">
                    {event.title}
                  </h3>
                </div>
              </div>

              {/* Event Info Details */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="space-y-1.5 text-xs font-semibold text-gray-700">
                    <div className="flex items-center gap-2 text-[#0F382C]">
                      <Calendar className="w-4 h-4 text-[#10B981]" />
                      <span>{event.dates}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-[#0F382C]" />
                      <span>{event.venue}</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Ticket Price & Purchase */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 block font-medium">Billet Pass Général</span>
                    <span className="text-xl font-black text-[#0F382C]">
                      {event.ticketPrice.toLocaleString()} FCFA
                    </span>
                  </div>

                  <button
                    onClick={() => handleBuyTicket(event.title, event.ticketPrice)}
                    className="px-4 py-2.5 bg-[#0F382C] hover:bg-[#1B5E46] text-white text-xs font-bold rounded-xl shadow transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Ticket className="w-4 h-4 text-[#10B981]" />
                    <span>Acheter mon Pass</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="bg-[#ECFDF5] p-6 rounded-2xl border border-[#A7F3D0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-[#0F382C] shrink-0" />
            <div>
              <h4 className="font-extrabold text-sm text-gray-900">Billets Digitaux Sécurisés QR Code</h4>
              <p className="text-xs text-gray-600">Recevez vos pass immédiatement par SMS et Email dès validation Mobile Money.</p>
            </div>
          </div>
          <Link href="/dashboard/client" className="px-4 py-2.5 bg-[#0F382C] text-white text-xs font-bold rounded-xl shrink-0">
            Voir mes billets
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
