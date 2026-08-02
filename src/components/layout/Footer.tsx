import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#111827] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-extrabold text-white tracking-tight">
                Afro<span className="text-[#E85D04]">ku</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              La plateforme de référence pour découvrir, réserver et vivre des expériences culturelles, touristiques et artistiques authentiques au Bénin.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0F382C] transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0F382C] transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0F382C] transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0F382C] transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links 1: Explorer */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Explorer
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href="/explorer" className="hover:text-white transition-colors">Destinations</Link></li>
              <li><Link href="/explorer?cat=activites" className="hover:text-white transition-colors">Activités</Link></li>
              <li><Link href="/guides" className="hover:text-white transition-colors">Guides certifiés</Link></li>
              <li><Link href="/itineraires" className="hover:text-white transition-colors">Itinéraires</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog Culture</Link></li>
            </ul>
          </div>

          {/* Links 2: À propos */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              À propos
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href="/a-propos" className="hover:text-white transition-colors">Qui sommes-nous ?</Link></li>
              <li><Link href="/devenir-partenaire" className="hover:text-white transition-colors">Devenir partenaire</Link></li>
              <li><Link href="/cgu" className="hover:text-white transition-colors">Conditions d'utilisation</Link></li>
              <li><Link href="/confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Newsletter
            </h4>
            <p className="text-xs text-gray-400">
              Recevez nos bons plans, nouveautés et offres exclusives.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="w-full px-3.5 py-2.5 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E85D04]"
              />
              <button 
                type="submit"
                className="w-full py-2.5 px-4 bg-[#E85D04] hover:bg-[#D9531E] text-white text-sm font-semibold rounded-lg shadow transition-all"
              >
                S'abonner
              </button>
            </form>
          </div>

        </div>

        {/* Bottom credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 Afroku. Tous droits réservés.</p>
          <p className="flex items-center gap-1">
            Conçu avec <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" /> au Bénin
          </p>
        </div>
      </div>
    </footer>
  );
}
