import { PARTNERS } from "@/data/mockData";

export function Partners() {
  return (
    <section className="py-12 bg-[#F8FAFC] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F382C] tracking-tight">
          Nos partenaires
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-80 hover:opacity-100 transition-opacity pt-2">
          {PARTNERS.map((p, idx) => (
            <div key={idx} className="flex flex-col items-center group cursor-pointer">
              <span className="text-base sm:text-lg font-black text-gray-800 group-hover:text-[#E85D04] transition-colors">
                {p.name}
              </span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                {p.subtitle}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
