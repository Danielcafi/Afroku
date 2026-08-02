"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, MapPin, Calendar, Users, Menu, X, UserCheck, Shield, User } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleMenuOpen, setRoleMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-3xl font-extrabold text-[#0F382C] tracking-tight">
              Afro<span className="text-[#E85D04]">ku</span>
            </span>
            <span className="hidden sm:inline-block bg-[#ECFDF5] text-[#0F382C] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#0F382C]/20">
              🇧🇯 Bénin
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
            <Link href="/explorer" className="hover:text-[#0F382C] transition-colors">
              Explorer
            </Link>
            <Link href="/explorer?cat=experiences" className="hover:text-[#0F382C] transition-colors">
              Expériences
            </Link>
            <Link href="/guides" className="hover:text-[#0F382C] transition-colors">
              Guides
            </Link>
            <Link href="/itineraires" className="hover:text-[#0F382C] transition-colors">
              Itinéraires
            </Link>
            <Link href="/culture" className="hover:text-[#0F382C] transition-colors">
              Culture
            </Link>
            <Link href="/blog" className="hover:text-[#0F382C] transition-colors">
              Blog
            </Link>
            <Link href="/partenaires" className="hover:text-[#0F382C] transition-colors">
              Partenaires
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Quick Demo Switcher for Dashboards */}
            <div className="relative">
              <button 
                onClick={() => setRoleMenuOpen(!roleMenuOpen)}
                className="text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg flex items-center gap-1.5 transition-all"
              >
                <span>Accès Démo</span>
                <span className="text-[10px]">▼</span>
              </button>

              {roleMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  <div className="px-3 py-1 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    Espaces Démo
                  </div>
                  <Link 
                    href="/dashboard/client" 
                    onClick={() => setRoleMenuOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 text-xs text-gray-700 hover:bg-[#ECFDF5] hover:text-[#0F382C]"
                  >
                    <User className="w-4 h-4 text-[#0F382C]" /> Espace Voyageur
                  </Link>
                  <Link 
                    href="/dashboard/partner" 
                    onClick={() => setRoleMenuOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 text-xs text-gray-700 hover:bg-[#ECFDF5] hover:text-[#0F382C]"
                  >
                    <UserCheck className="w-4 h-4 text-[#E85D04]" /> Espace Guide / Prestataire
                  </Link>
                  <Link 
                    href="/dashboard/admin" 
                    onClick={() => setRoleMenuOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 text-xs text-gray-700 hover:bg-[#ECFDF5] hover:text-[#0F382C]"
                  >
                    <Shield className="w-4 h-4 text-purple-600" /> Dashboard Admin
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/connexion" 
              className="text-sm font-semibold text-gray-800 hover:text-[#0F382C] px-4 py-2 rounded-lg border border-gray-200 hover:border-[#0F382C] transition-all"
            >
              Connexion
            </Link>

            <Link 
              href="/inscription" 
              className="text-sm font-semibold text-white bg-[#0F382C] hover:bg-[#1B5E46] px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all"
            >
              S'inscrire
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3">
          <Link 
            href="/explorer" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Explorer
          </Link>
          <Link 
            href="/explorer?cat=experiences" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Expériences
          </Link>
          <Link 
            href="/guides" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Guides
          </Link>
          <Link 
            href="/itineraires" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Itinéraires
          </Link>
          <Link 
            href="/dashboard/client" 
            className="block px-3 py-2 rounded-md text-base font-medium text-[#0F382C] bg-[#ECFDF5]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Espace Voyageur
          </Link>
          <Link 
            href="/dashboard/partner" 
            className="block px-3 py-2 rounded-md text-base font-medium text-[#E85D04] bg-[#FFF7ED]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Espace Guide / Prestataire
          </Link>
          <Link 
            href="/dashboard/admin" 
            className="block px-3 py-2 rounded-md text-base font-medium text-purple-700 bg-purple-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Espace Admin
          </Link>

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
            <Link 
              href="/connexion" 
              className="w-full text-center py-2.5 text-sm font-semibold text-gray-800 border border-gray-300 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Connexion
            </Link>
            <Link 
              href="/inscription" 
              className="w-full text-center py-2.5 text-sm font-semibold text-white bg-[#0F382C] rounded-lg shadow-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              S'inscrire
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
