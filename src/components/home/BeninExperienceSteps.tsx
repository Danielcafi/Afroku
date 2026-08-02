import { Landmark, Waves, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export function BeninExperienceSteps() {
  const steps = [
    {
      num: "01",
      icon: Landmark,
      title: "Mémoire & Espaces Sacrés",
      location: "Ouidah & Abomey",
      description: "Parcourez la Route des Esclaves, le Temple des Pythons sacrés et les Palais Royaux du Dahomey classés UNESCO.",
      badge: "Histoire & Vaudou",
      color: "from-amber-500/20 to-orange-500/10",
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=600&q=80"
    },
    {
      num: "02",
      icon: Waves,
      title: "Cité Lacustre & Safaris",
      location: "Ganvié & Parc Pendjari",
      description: "Naviguez en pirogue à Ganvié (la Venise africaine) et observez éléphants et lions dans la faune sauvage de la Pendjari.",
      badge: "Nature & Aventure",
      color: "from-emerald-500/20 to-teal-500/10",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=600&q=80"
    },
    {
      num: "03",
      icon: Sparkles,
      title: "Arts, Festivals & Made in Benin",
      location: "Tout le Bénin",
      description: "Achetez vos pass officiels pour les Vodun Days & WeLoveEya, et repartez avec l'artisanat sculpté à la main.",
      badge: "Festivals & Artisanat",
      color: "from-orange-500/20 to-[#E85D04]/10",
      image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="bg-[#ECFDF5] text-[#0F382C] text-xs font-extrabold px-3 py-1 rounded-full border border-[#0F382C]/20 uppercase tracking-widest">
            Un Séjour Inoubliable
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F382C] tracking-tight">
            L'Expérience Bénin en 3 Temps
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Une immersion complète entre patrimoine spirituel, biodiversité préservée et festivals vibrants.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
                  
                  {/* Step Number Badge */}
                  <span className="absolute top-4 left-4 font-mono font-black text-3xl text-white/90 drop-shadow">
                    {step.num}
                  </span>

                  <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#0F382C] text-[10px] font-extrabold px-2.5 py-1 rounded-full">
                    {step.badge}
                  </span>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                      {step.location}
                    </span>
                    <h3 className="text-lg font-black leading-snug">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  <Link
                    href="/explorer"
                    className="inline-flex items-center gap-2 text-xs font-extrabold text-[#E85D04] hover:text-[#D9531E] transition-colors pt-2 group/link"
                  >
                    <span>Explorer ces destinations</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
