"use client";

import Link from "next/link";
import { Heart, Globe, Share2, Mail, Phone, MapPin, MessageCircle, Send, AtSign } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="relative z-10 pt-24 pb-10 border-t border-white/10"
      style={{ backdropFilter: "blur(30px)", background: "rgba(5,20,14,0.75)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section: Brand + Nav Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 pb-16 border-b border-white/8">

          {/* Brand Block — spans 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1C4334] to-[#0F382C] flex items-center justify-center text-amber-300 font-serif font-black text-xl shadow-xl border border-amber-500/20 group-hover:scale-105 transition-transform">
                  <span className="tracking-tighter">AK</span>
                </div>
                <div>
                  <span className="text-3xl font-serif font-black tracking-tight text-white">
                    Afro<span className="text-[#E85D04]">.Ku</span>
                  </span>
                  <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest -mt-0.5">
                    Bénin • Culture & Safaris
                  </p>
                </div>
              </div>
            </Link>

            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              La plateforme de référence pour découvrir, réserver et vivre des expériences culturelles, touristiques, d&apos;artisanat et d&apos;événementiel au Bénin.
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-white/40 text-xs font-medium">
              <MapPin className="w-4 h-4 text-[#E85D04]" />
              <span>Cotonou, République du Bénin</span>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { icon: MessageCircle, label: "Instagram" },
                { icon: AtSign, label: "Facebook" },
                { icon: Send, label: "Twitter" },
                { icon: Globe, label: "Site Web" },
                { icon: Mail, label: "Email" },
                { icon: Phone, label: "Téléphone" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  title={label}
                  className="w-9 h-9 rounded-xl border border-white/10 hover:border-[#E85D04]/50 hover:bg-[#E85D04]/10 flex items-center justify-center text-white/40 hover:text-[#E85D04] transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Column: Explorer */}
          <div className="space-y-5">
            <h4 className="text-xs font-black text-white uppercase tracking-[0.2em]">Explorer</h4>
            <ul className="space-y-3 text-sm text-white/45">
              {[
                { href: "/explorer", label: "Destinations" },
                { href: "/evenements", label: "Événements & Festivals" },
                { href: "/marketplace", label: "Artisanat Made in Bénin" },
                { href: "/guides", label: "Guides certifiés" },
                { href: "/itineraires", label: "Itinéraires" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white hover:pl-1 transition-all duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Column: À propos */}
          <div className="space-y-5">
            <h4 className="text-xs font-black text-white uppercase tracking-[0.2em]">À propos</h4>
            <ul className="space-y-3 text-sm text-white/45">
              {[
                { href: "/a-propos", label: "Qui sommes-nous ?" },
                { href: "/devenir-partenaire", label: "Devenir partenaire" },
                { href: "/cgu", label: "Conditions d'utilisation" },
                { href: "/confidentialite", label: "Politique de confidentialité" },
                { href: "/faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white hover:pl-1 transition-all duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Column: Contact */}
          <div className="space-y-5">
            <h4 className="text-xs font-black text-white uppercase tracking-[0.2em]">Contact</h4>
            <ul className="space-y-3 text-sm text-white/45">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#E85D04] mt-0.5 shrink-0" />
                <span>contact@afroku.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#E85D04] mt-0.5 shrink-0" />
                <span>+229 XX XX XX XX</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E85D04] mt-0.5 shrink-0" />
                <span>Cotonou, Bénin</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-5">
            <h4 className="text-xs font-black text-white uppercase tracking-[0.2em]">Newsletter</h4>
            <p className="text-xs text-white/40 leading-relaxed">
              Recevez nos bons plans, nouveautés et offres exclusives directement dans votre boîte mail.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-[#E85D04]/50"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
              />
              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#E85D04] hover:bg-[#D9531E] text-white text-xs font-extrabold rounded-xl shadow-lg transition-all cursor-pointer"
              >
                S&apos;abonner
              </button>
            </form>
          </div>
        </div>

        {/* Divider Stats row */}
        <div className="py-10 grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-white/8">
          {[
            { value: "12 000+", label: "Voyageurs satisfaits" },
            { value: "250+", label: "Expériences disponibles" },
            { value: "50+", label: "Guides certifiés" },
            { value: "100%", label: "Paiement sécurisé" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <span className="text-2xl sm:text-3xl font-black text-white block">{stat.value}</span>
              <span className="text-xs text-white/40 font-medium mt-1 block">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/30 gap-4">
          <p>© 2026 Afroku. Tous droits réservés.</p>
          <p className="flex items-center gap-1.5">
            Conçu avec <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400 inline" /> au Bénin
          </p>
        </div>
      </div>
    </footer>
  );
}
