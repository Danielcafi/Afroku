import { PARTNERS } from "@/data/mockData";

export function Partners() {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left: Partners Grid */}
          <div className="lg:w-2/3 flex flex-wrap items-center justify-center gap-5">
            {PARTNERS.map((p, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-1 px-6 py-4 rounded-2xl border border-white/8 hover:border-white/20 transition-all group cursor-pointer"
                style={{ backdropFilter: "blur(12px)", background: "rgba(255,255,255,0.04)" }}
              >
                <span className="text-base sm:text-lg font-black text-white/60 group-hover:text-white transition-colors">
                  {p.name}
                </span>
                <span className="text-[9px] font-bold text-white/30 uppercase tracking-wider">
                  {p.subtitle}
                </span>
              </div>
            ))}
          </div>

          {/* Right: Text */}
          <div className="lg:w-1/3 text-center lg:text-left space-y-3">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-white/40 block">
              Ils nous font confiance
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Nos <span className="text-[#E85D04]">partenaires</span>
            </h2>
          </div>

        </div>

      </div>
    </section>
  );
}
