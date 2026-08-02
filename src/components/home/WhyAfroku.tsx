import { ShieldCheck, UserCheck, Zap, Headphones } from "lucide-react";

export function WhyAfroku() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Paiement Sécurisé",
      description: "Payer en toute sécurité par Mobile Money (MTN / Moov) ou Carte Bancaire."
    },
    {
      icon: UserCheck,
      title: "Guides Certifiés",
      description: "Des guides locaux vérifiés et passionnés pour des parcours authentiques."
    },
    {
      icon: Zap,
      title: "Réservation Instantanée",
      description: "Confirmation immédiate et Billet digital avec QR Code utilisable hors-ligne."
    },
    {
      icon: Headphones,
      title: "Support 24/7",
      description: "Notre équipe locale est disponible à tout moment pour vous accompagner."
    }
  ];

  return (
    <section className="py-16 bg-[#0F382C] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Pourquoi choisir <span className="text-[#E85D04]">Afroku</span> ?
          </h2>
          <p className="text-emerald-100/80 text-sm">
            Une solution pensée pour simplifier votre expérience de voyage au Bénin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 hover:border-white/30 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E85D04] flex items-center justify-center text-white mb-4 shadow-lg">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-emerald-100/75 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
