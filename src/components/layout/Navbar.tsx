"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/explorer", label: "Explorer" },
  { href: "/evenements", label: "Événements" },
  { href: "/marketplace", label: "Artisanat" },
  { href: "/guides", label: "Guides" },
  { href: "/itineraires", label: "Itinéraires" },
  { href: "/blog", label: "Blog" },
];

interface NavbarProps {
  overlay?: boolean;
}

export function Navbar({ overlay = false }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!overlay) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [overlay]);

  return (
    <header
      className={`z-50 transition-all duration-500 ${
        overlay
          ? `fixed top-0 left-0 right-0 ${
              scrolled
                ? "bg-[#0F382C]/60 backdrop-blur-xl border-b border-white/10 shadow-lg"
                : "bg-transparent"
            }`
          : "sticky top-0 bg-[#0F382C]/60 backdrop-blur-xl border-b border-white/10 shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Afroku Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="/afroku-logo.png" 
              alt="Afroku Logo" 
              className="h-52 w-auto group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-wider">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative py-2 text-white/90 hover:text-[#10B981] transition-colors duration-300"
              >
                <span>{link.label}</span>
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#10B981] transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link 
              href="/connexion" 
              className="text-xs font-bold text-white border-white/30 hover:border-white px-4 py-2.5 rounded-full border transition-all hover:text-[#10B981]"
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
              className="p-2 rounded-xl text-white hover:bg-white/20 focus:outline-none transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-gray-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-3 py-2 rounded-xl text-base font-bold text-gray-800 hover:text-[#10B981] hover:bg-[#FFF7ED] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-gray-200 mt-3 pt-3 space-y-2">
            <Link 
              href="/connexion" 
              className="block px-3 py-2 rounded-xl text-base font-bold text-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Connexion
            </Link>
            <Link 
              href="/inscription" 
              className="block px-3 py-2 rounded-xl text-base font-bold text-white bg-[#0F382C] text-center"
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
