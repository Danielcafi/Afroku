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
      accent: "from-amber-500 to-orange-600",
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=600&q=80"
    },
    {
      num: "02",
      icon: Waves,
      title: "Cité Lacustre & Safaris",
      location: "Ganvié & Parc Pendjari",
      description: "Naviguez en pirogue à Ganvié (la Venise africaine) et observez éléphants et lions dans la Pendjari.",
      badge: "Nature & Aventure",
      accent: "from-emerald-400 to-teal-600",
      image: "/Ganvie.jpg"
    },
    {
      num: "03",
      icon: Sparkles,
      title: "Arts, Festivals & Made in Benin",
      location: "Tout le Bénin",
      description: "Achetez vos pass officiels pour les Vodun Days & WeLoveEya, et repartez avec l'artisanat sculpté à la main.",
      badge: "Festivals & Artisanat",
      accent: "from-orange-400 to-[#10B981]",
      image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Text */}
          <div className="lg:w-1/2 space-y-6 lg:sticky lg:top-32">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-amber-400 block">
              Un Séjour Inoubliable
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-lg leading-tight">
              Ne visitez pas le Bénin. <span className="text-[#10B981] italic">Vit-le.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed space-y-4">
              <span className="block">
                Explorer le Bénin, c&apos;est pousser la porte d&apos;un monde où <strong className="text-white">chaque geste est une tradition</strong> et <strong className="text-white">chaque sourire une histoire</strong>. Avec AfroKu, cette richesse prend vie sous vos yeux. Plus qu&apos;un simple guide, c&apos;est une invitation à <strong className="text-[#10B981]">ressentir le pays dans toute sa lumière et sa profondeur</strong>.
              </span>
              <span className="block">
                Des ruelles gorgées d&apos;histoire de <strong className="text-white">Ouidah</strong> aux majestueux <strong className="text-white">palais d&apos;Abomey</strong>, de l&apos;éco-cité lacustre de <strong className="text-white">Ganvié</strong> aux étals chatoyants de nos <strong className="text-white">marchés gourmands</strong>, le Bénin s&apos;éveille à chaque page.
              </span>
            </p>
            <Link
              href="/explorer"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-amber-400 hover:text-[#10B981] transition-colors group"
            >
              <span>Tout explorer</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right: Step Cards */}
          <div className="lg:w-1/2 space-y-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl flex flex-col sm:flex-row"
                  style={{ backdropFilter: "blur(20px)", background: "rgba(255,255,255,0.05)" }}
                >
                  {/* Image */}
                  <div className="relative h-64 sm:h-auto sm:w-72 shrink-0 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30" />
                    <span className={`absolute top-4 left-4 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-gradient-to-r ${step.accent} text-white shadow-lg`}>
                      {step.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col justify-center space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${step.accent} flex items-center justify-center shadow-lg shrink-0`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="text-white/40 text-[10px] font-mono font-bold tracking-widest block">Étape {step.num}</span>
                        <span className="text-amber-300 text-[10px] font-bold uppercase tracking-wider">{step.location}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-black text-white leading-snug">{step.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
