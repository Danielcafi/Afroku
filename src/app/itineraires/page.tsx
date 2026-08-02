import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Map, Clock, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ItinerairesPage() {
  const circuits = [
    {
      title: "Circuit 3 Jours : Histoire & Lagunes",
      cities: "Cotonou • Ouidah • Ganvié",
      duration: "3 Jours / 2 Nuits",
      price: "65 000 FCFA",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Circuit 7 Jours : Grand Tour du Bénin",
      cities: "Cotonou • Abomey • Natitingou • Pendjari",
      duration: "7 Jours / 6 Nuits",
      price: "185 000 FCFA",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="bg-[#FFF7ED] text-[#C2410C] text-xs font-extrabold px-3 py-1 rounded-full border border-[#FFEDD5] flex items-center gap-1.5 w-max mx-auto">
            <Sparkles className="w-3.5 h-3.5" />
            Sur-Mesure & Clé en Main
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0F382C]">
            Itinéraires Recommandés au Bénin
          </h1>
          <p className="text-sm text-gray-600">
            Découvrez nos circuits prêts à réserver ou générez votre parcours personnalisé.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {circuits.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all group flex flex-col">
              <div className="relative h-60 w-full overflow-hidden">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-[#0F382C] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {c.duration}
                </span>
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#E85D04] uppercase tracking-wide">{c.cities}</span>
                  <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-[#E85D04] transition-colors">{c.title}</h3>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-[10px] text-gray-400 block font-medium">À partir de</span>
                    <span className="text-lg font-black text-[#0F382C]">{c.price}</span>
                  </div>
                  <Link href="/explorer" className="px-4 py-2 bg-[#E85D04] text-white text-xs font-bold rounded-xl flex items-center gap-1">
                    <span>Explorer ce circuit</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}
