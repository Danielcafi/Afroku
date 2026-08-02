"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingBag, Ticket, Menu, X, UserCheck, Shield, User, Sparkles } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleMenuOpen, setRoleMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E5DEC9]/60 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Official Afroku Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            
            {/* Dual African Mask Icon Badge */}
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#1C4334] to-[#0F382C] flex items-center justify-center text-amber-300 font-serif font-black text-xl shadow-md border border-amber-500/30 group-hover:scale-105 transition-transform">
              <span className="tracking-tighter">AK</span>
            </div>

            <div className="flex flex-col">
              <span className="text-2xl font-serif font-black tracking-tight text-[#1A2621]">
                Afro<span className="text-[#E85D04]">.Ku</span>
              </span>
              <span className="text-[9px] font-bold text-[#8C6B40] uppercase tracking-widest -mt-1">
                Bénin • Culture & Safaris
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-gray-800">
            <Link href="/explorer" className="hover:text-[#E85D04] transition-colors">
              Explorer
            </Link>
            <Link href="/evenements" className="hover:text-[#E85D04] transition-colors flex items-center gap-1.5 text-[#E85D04]">
              <Ticket className="w-4 h-4" />
              <span>Événements</span>
            </Link>
            <Link href="/marketplace" className="hover:text-[#0F382C] transition-colors flex items-center gap-1.5 text-[#0F382C]">
              <ShoppingBag className="w-4 h-4" />
              <span>Artisanat</span>
            </Link>
            <Link href="/guides" className="hover:text-[#E85D04] transition-colors">
              Guides
            </Link>
            <Link href="/itineraires" className="hover:text-[#E85D04] transition-colors">
              Itinéraires
            </Link>
            <Link href="/blog" className="hover:text-[#E85D04] transition-colors">
              Blog
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Quick Demo Switcher */}
            <div className="relative">
              <button 
                onClick={() => setRoleMenuOpen(!roleMenuOpen)}
                className="text-xs font-bold text-gray-700 bg-white/80 hover:bg-white px-3.5 py-2 rounded-full border border-[#DCD3BE] flex items-center gap-2 shadow-xs transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#E85D04]" />
                <span>Espaces Démo</span>
                <span className="text-[10px]">▼</span>
              </button>

              {roleMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#DCD3BE] py-2 z-50">
                  <div className="px-3 py-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Choisir un rôle
                  </div>
                  <Link 
                    href="/dashboard/client" 
                    onClick={() => setRoleMenuOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-gray-800 hover:bg-[#ECFDF5] hover:text-[#0F382C]"
                  >
                    <User className="w-4 h-4 text-[#0F382C]" /> Espace Voyageur
                  </Link>
                  <Link 
                    href="/dashboard/partner" 
                    onClick={() => setRoleMenuOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-gray-800 hover:bg-[#FFF7ED] hover:text-[#E85D04]"
                  >
                    <UserCheck className="w-4 h-4 text-[#E85D04]" /> Espace Artisans & Guides
                  </Link>
                  <Link 
                    href="/dashboard/admin" 
                    onClick={() => setRoleMenuOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-gray-800 hover:bg-purple-50 hover:text-purple-700"
                  >
                    <Shield className="w-4 h-4 text-purple-600" /> Dashboard Admin
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/connexion" 
              className="text-xs font-bold text-gray-900 hover:text-[#E85D04] px-4 py-2.5 rounded-full border border-gray-300 transition-all"
            >
              Connexion
            </Link>

            <Link 
              href="/inscription" 
              className="text-xs font-extrabold text-white bg-[#0F382C] hover:bg-[#1C4334] px-5 py-2.5 rounded-full shadow-md transition-all"
            >
              S'inscrire
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-800 hover:bg-gray-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-gray-200 px-4 pt-2 pb-6 space-y-3">
          <Link 
            href="/explorer" 
            className="block px-3 py-2 rounded-xl text-base font-bold text-gray-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            Explorer
          </Link>
          <Link 
            href="/evenements" 
            className="block px-3 py-2 rounded-xl text-base font-bold text-[#E85D04] bg-[#FFF7ED]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Vodun Days & Événements
          </Link>
          <Link 
            href="/marketplace" 
            className="block px-3 py-2 rounded-xl text-base font-bold text-[#0F382C] bg-[#ECFDF5]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Artisanat Made in Benin
          </Link>
          <Link 
            href="/dashboard/client" 
            className="block px-3 py-2 rounded-xl text-base font-bold text-[#0F382C]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Espace Voyageur
          </Link>
        </div>
      )}
    </header>
  );
}
