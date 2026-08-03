export function Vision() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div
          className="rounded-[40px] overflow-hidden border border-white/10 p-10 sm:p-16 lg:p-20"
          style={{ backdropFilter: "blur(20px)", background: "rgba(255,255,255,0.05)" }}
        >
          
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#10B981] block">
              Notre Vision
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Un Pont de Lumière entre <br />
              <span className="text-[#10B981] italic">l&apos;Héritage et l&apos;Avenir</span>
            </h2>
          </div>

          {/* L'Étincelle */}
          <div className="space-y-6 mb-16">
            <h3 className="text-2xl sm:text-3xl font-black text-white">L&apos;Étincelle</h3>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-4xl">
              Tout a commencé par une <strong className="text-white">conviction profonde</strong>, une étincelle allumée à <strong className="text-[#10B981]">Porto-Novo</strong> : le Bénin possède des <strong className="text-white">richesses inestimables</strong> qui ne demandent qu&apos;à être révélées au monde. <strong className="text-white">AfroKu</strong> est né pour être ce <strong className="text-[#10B981]">révélateur</strong>, ce guide lumineux dans le paysage digital.
            </p>
          </div>

          {/* Notre Engagement */}
          <div className="space-y-6 mb-16">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Notre Engagement : <span className="text-[#10B981]">Illuminer pour Transformer</span>
            </h3>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-4xl">
              Bien plus qu&apos;un portail digital, AfroKu est un <strong className="text-white">architecte de perception</strong>. Notre vocation est d&apos;<strong className="text-[#10B981]">illuminer les multiples facettes</strong> du Bénin pour <strong className="text-white">transformer le regard</strong> porté sur notre pays. Nous ne faisons pas qu&apos;effleurer la surface ; nous plongeons dans <strong className="text-[#10B981]">l&apos;essence même</strong> de ce qui nous rend uniques.
            </p>
          </div>

          {/* Ce que nous faisons briller */}
          <div className="space-y-8 mb-16">
            <h3 className="text-2xl sm:text-3xl font-black text-white">Ce que nous faisons <span className="text-[#10B981]">Briller</span></h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Patrimoine */}
              <div className="p-6 rounded-3xl border border-white/10 hover:border-[#10B981]/30 transition-all" style={{ background: "rgba(255,255,255,0.03)" }}>
                <h4 className="text-lg font-black text-[#10B981] mb-3">Le Scintillement de notre Patrimoine</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Nous capturons l&apos;<strong className="text-white">éclat de nos rituels endogènes</strong>, la <strong className="text-white">vibration de nos traditions millénaires</strong> et la <strong className="text-white">force de notre histoire</strong>.
                </p>
              </div>

              {/* Talents */}
              <div className="p-6 rounded-3xl border border-white/10 hover:border-[#10B981]/30 transition-all" style={{ background: "rgba(255,255,255,0.03)" }}>
                <h4 className="text-lg font-black text-[#10B981] mb-3">La Lumière sur nos Talents</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Des créateurs de la savane aux <strong className="text-white">entrepreneurs des villes</strong>, nous mettons en lumière la <strong className="text-white">créativité débordante</strong> et l&apos;<strong className="text-white">audace</strong> des femmes et des hommes du Nord comme du Sud.
                </p>
              </div>

              {/* Terroirs */}
              <div className="p-6 rounded-3xl border border-white/10 hover:border-[#10B981]/30 transition-all" style={{ background: "rgba(255,255,255,0.03)" }}>
                <h4 className="text-lg font-black text-[#10B981] mb-3">L&apos;Éclat de nos Terroirs</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Goûtez à l&apos;<strong className="text-white">authenticité</strong> d&apos;une <strong className="text-white">gastronomie béninoise</strong> riche et savoureuse, et découvrez un <strong className="text-white">tourisme communautaire</strong> respectueux et immersif.
                </p>
              </div>

            </div>
          </div>

          {/* Conclusion */}
          <div className="p-8 rounded-3xl border border-[#10B981]/20 text-center" style={{ background: "rgba(16,185,129,0.05)" }}>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              AfroKu <strong className="text-white">tisse des liens authentiques</strong>, des <strong className="text-[#10B981]">ponts de lumière</strong> entre les citoyens, les passionnés et le monde. Nous <strong className="text-white">co-créons un récit béninois puissant</strong>, fier, et résolument tourné vers <strong className="text-[#10B981]">l&apos;avenir</strong>.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
