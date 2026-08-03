import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Star, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function GuidesPage() {
  const guides = [
    {
      id: "1",
      name: "Jean Guede",
      specialty: "Histoire lacustre & Ganvié",
      location: "Cotonou / Abomey-Calavi",
      tours: 142,
      rating: 4.9,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      languages: ["Français", "Anglais", "Fon"]
    },
    {
      id: "2",
      name: "Marie Houeton",
      specialty: "Culture Vaudou & Route des Esclaves",
      location: "Ouidah",
      tours: 98,
      rating: 4.8,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      languages: ["Français", "Anglais"]
    },
    {
      id: "3",
      name: "Kora Bio",
      specialty: "Faune, Safaris & Atacora",
      location: "Natitingou / Pendjari",
      tours: 210,
      rating: 5.0,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      languages: ["Français", "Anglais", "Waama"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="bg-[#ECFDF5] text-[#0F382C] text-xs font-extrabold px-3 py-1 rounded-full border border-[#0F382C]/20">
            Guides Locaux Vérifiés
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0F382C]">
            Nos Guides Certifiés Afroku
          </h1>
          <p className="text-sm text-gray-600">
            Faites appel à des passionnés locaux pour explorer le Bénin en toute confiance et authenticité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guides.map((g) => (
            <div key={g.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-4 text-center">
                <div className="relative w-20 h-20 mx-auto">
                  <img src={g.avatar} alt={g.name} className="w-full h-full rounded-full object-cover border-4 border-[#0F382C]/10" />
                  <ShieldCheck className="w-6 h-6 text-[#E85D04] absolute bottom-0 right-0 bg-white rounded-full p-0.5 shadow" />
                </div>

                <div>
                  <h3 className="font-extrabold text-lg text-gray-900">{g.name}</h3>
                  <p className="text-xs font-bold text-[#E85D04]">{g.specialty}</p>
                  <p className="text-xs text-gray-500 flex items-center justify-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5" /> {g.location}
                  </p>
                </div>

                <div className="flex items-center justify-center gap-4 text-xs font-semibold text-gray-700 py-2 border-y border-gray-100">
                  <div className="flex items-center gap-1 font-bold text-gray-900">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span>{g.rating}</span>
                  </div>
                  <span>•</span>
                  <span>{g.tours} visites réalisées</span>
                </div>
              </div>

              <Link
                href="/explorer"
                className="w-full py-2.5 bg-[#0F382C] text-white text-xs font-bold rounded-xl text-center hover:bg-[#1B5E46] transition-all"
              >
                Réserver une visite guidée
              </Link>
            </div>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}
