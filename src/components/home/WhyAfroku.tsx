import { ShieldCheck, UserCheck, Zap, Headphones } from "lucide-react";

export function WhyAfroku() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Paiement Securise",
      description: "Payer en toute securite par Mobile Money (MTN / Moov) ou Carte Bancaire.",
      accent: "from-emerald-400 to-teal-600",
      glow: "rgba(52,211,153,0.15)"
    },
    {
      icon: UserCheck,
      title: "Guides Certifies",
      description: "Des guides locaux verifies et passionnes pour des parcours authentiques.",
      accent: "from-amber-400 to-orange-500",
      glow: "rgba(245,158,11,0.15)"
    },
    {
      icon: Zap,
      title: "Reservation Instantanee",
      description: "Confirmation immediate et Billet digital avec QR Code utilisable hors-ligne.",
      accent: "from-[#E85D04] to-red-600",
      glow: "rgba(232,93,4,0.15)"
    },
    {
      icon: Headphones,
      title: "Support 24/7",
      description: "Notre equipe locale est disponible a tout moment pour vous accompagner.",
      accent: "from-violet-400 to-purple-600",
      glow: "rgba(139,92,246,0.15)"
    }
  ];

  return (
    <section className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Features Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-7 rounded-3xl border border-white/10 hover:border-white/25 transition-all duration-500 hover:-translate-y-2 text-center"
                  style={{
                    backdropFilter: "blur(20px)",
                    background: "rgba(255,255,255,0.05)",
                    "--glow-color": item.glow
                  } as React.CSSProperties}
                >
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ boxShadow: `0 0 60px ${item.glow}` }}
                  />
                  <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${item.accent} flex items-center justify-center shadow-xl mb-5`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-base font-black text-white mb-3">{item.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

          {/* Right: Text */}
          <div className="lg:w-1/3 space-y-6 lg:sticky lg:top-32">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-amber-400 block">
              Notre Promesse
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-lg leading-tight">
              Pourquoi choisir <span className="text-[#E85D04] italic">Afroku</span> ?
            </h2>
            <p className="text-white/55 text-base leading-relaxed">
              Une solution pensee pour simplifier votre experience de voyage au Benin
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
