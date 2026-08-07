"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Search, MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Destination = {
  image: string;
  badge: string;
  tag: string;
  title: string;
  subtitle: string;
  shortTitle: string;
  cta: { label: string; href: string };
};

const destinations: Destination[] = [
  {
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1400&q=80",
    badge: "Histoire & Royaumes",
    tag: "Abomey • Bénin",
    title: "Rois, Palais & Trésors",
    subtitle: "Marchez sur les traces des rois du Dahomey. UNESCO classé.",
    shortTitle: "Abomey",
    cta: { label: "Voir les palais", href: "/explorer?dest=abomey" },
  },
  {
    image: "/penjari.jpg",
    badge: "Nature & Safari",
    tag: "Pendjari • Bénin",
    title: "Lions, Éléphants & Horizons",
    subtitle: "Safari en Afrique de l'Ouest. Faune sauvage, émotions fortes.",
    shortTitle: "Pendjari",
    cta: { label: "Partir en safari", href: "/explorer?dest=pendjari" },
  },
  {
    image: "/Ganvie.jpg",
    badge: "Culture Lacustre",
    tag: "Ganvié • Bénin",
    title: "Ville sur l'Eau",
    subtitle: "La Venise africaine. Vie sur pilotis, marchés flottants.",
    shortTitle: "Ganvié",
    cta: { label: "Explorer Ganvié", href: "/explorer?dest=ganvie" },
  },
];

const N = destinations.length;
const wrap = (i: number) => ((i % N) + N) % N;

export function HeroSearch() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [current, setCurrent] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval>>(null);

  const goTo = useCallback((index: number) => {
    if (index === current) return;
    clearInterval(timer.current!);
    setCurrent(index);
    timer.current = setInterval(() => {
      setCurrent((c) => wrap(c + 1));
    }, 6000);
  }, [current]);

  useEffect(() => {
    timer.current = setInterval(() => {
      setCurrent((c) => wrap(c + 1));
    }, 6000);
    return () => clearInterval(timer.current!);
  }, []);

  const prev = () => goTo(wrap(current - 1));
  const next = () => goTo(wrap(current + 1));

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/explorer?dest=${encodeURIComponent(destination)}`);
  };

  const indices = [wrap(current - 1), current, wrap(current + 1)];

  return (
    <section className="relative z-10 pt-20 pb-10 px-4 md:pt-28 md:pb-20 overflow-hidden min-h-[50vh] md:min-h-[680px] flex flex-col justify-center">

      <div className="relative z-10 max-w-7xl mx-auto space-y-14 w-full">
        
        {/* Hero Title - Fixed */}
        <div className="text-center space-y-5 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-black tracking-tight text-white leading-tight drop-shadow-2xl">
            Voyagez et Découvrez{" "}
            <span className="text-[#10B981] italic drop-shadow-[0_2px_20px_rgba(16,185,129,0.4)]">le Bénin</span>
          </h1>
          <p className="text-base sm:text-xl text-white/70 font-medium max-w-3xl mx-auto leading-relaxed">
            Tourisme, expatriation et affaires au Bénin : le guide complet. Décryptez le Bénin de 2026. Des safaris du Parc de la Pendjari au dynamisme de la Zone GDIZ, accédez aux guides terrain, aux produits locaux et à notre service vérifié pour réussir votre voyage touristique tout en gardant des souvenirs.
          </p>
        </div>

        {/* Rotating 3-Capsule Carousel */}
        <div className="relative max-w-6xl mx-auto pt-2">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            {/* Left Pill */}
            <div
              key={`left-${indices[0]}`}
              className="hidden md:block md:col-span-1 relative h-[420px] rounded-[40px] overflow-hidden shadow-lg border-2 border-white/20 group cursor-pointer transition-all duration-700 ease-in-out"
              style={{ opacity: 1 }}
              onClick={() => goTo(wrap(current - 1))}
            >
              {destinations.map((dest, i) => (
                <img
                  key={dest.shortTitle}
                  src={dest.image}
                  alt={dest.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 ${
                    i === indices[0] ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-3 right-3 text-white text-center">
                <span className="text-[9px] font-bold uppercase tracking-wider text-amber-300 block transition-all duration-500">{destinations[indices[0]].tag.split("•")[0].trim()}</span>
                <h3 className="font-serif font-bold text-base mt-0.5 transition-all duration-500">{destinations[indices[0]].shortTitle}</h3>
              </div>
            </div>

            {/* Center Pill */}
            <div
              key={`center-${indices[1]}`}
              className="col-span-1 md:col-span-3 relative h-[280px] sm:h-[340px] md:h-[520px] rounded-[30px] md:rounded-[50px] overflow-hidden shadow-2xl border-2 md:border-4 border-white/30 group"
            >
              {destinations.map((dest, i) => (
                <img
                  key={dest.shortTitle}
                  src={dest.image}
                  alt={dest.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                    i === indices[1] ? "opacity-100 scale-100" : "opacity-0 scale-110"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/90 backdrop-blur-md px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-black text-[#0F382C] shadow-md flex items-center gap-2 transition-all duration-500">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                {destinations[indices[1]].badge}
              </div>

              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 text-white space-y-2 md:space-y-3">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block transition-all duration-500">{destinations[indices[1]].tag}</span>
                  <h3 className="text-2xl sm:text-4xl font-serif font-black transition-all duration-500">{destinations[indices[1]].title}</h3>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/20">
                  <p className="text-xs text-gray-200 max-w-md hidden sm:block transition-all duration-500">{destinations[indices[1]].subtitle}</p>
                  <Link href={destinations[indices[1]].cta.href} className="px-5 py-2.5 md:px-6 md:py-3 bg-[#10B981] hover:bg-[#059669] text-white text-[10px] md:text-xs font-extrabold rounded-full shadow-lg transition-all flex items-center gap-2">
                    <span>{destinations[indices[1]].cta.label}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Pill */}
            <div
              key={`right-${indices[2]}`}
              className="hidden md:block md:col-span-1 relative h-[420px] rounded-[40px] overflow-hidden shadow-lg border-2 border-white/20 group cursor-pointer transition-all duration-700 ease-in-out"
              onClick={() => goTo(wrap(current + 1))}
            >
              {destinations.map((dest, i) => (
                <img
                  key={dest.shortTitle}
                  src={dest.image}
                  alt={dest.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 ${
                    i === indices[2] ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-3 right-3 text-white text-center">
                <span className="text-[9px] font-bold uppercase tracking-wider text-amber-300 block transition-all duration-500">{destinations[indices[2]].tag.split("•")[0].trim()}</span>
                <h3 className="font-serif font-bold text-base mt-0.5 transition-all duration-500">{destinations[indices[2]].shortTitle}</h3>
              </div>
            </div>
          </div>

          {/* Arrows */}
          <button type="button" onClick={prev} aria-label="Précédent" className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md shadow-lg flex items-center justify-center text-white transition-all cursor-pointer">
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button type="button" onClick={next} aria-label="Suivant" className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md shadow-lg flex items-center justify-center text-white transition-all cursor-pointer">
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {destinations.map((d, i) => (
              <button
                key={d.title}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Aller à ${d.tag}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  i === current ? "w-8 bg-[#10B981]" : "w-2.5 bg-[#D6CBBA] hover:bg-[#B8A98F]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div
          className="p-2 sm:p-4 rounded-full shadow-2xl max-w-3xl mx-auto"
          style={{ backdropFilter: "blur(20px)", background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}
        >
          <form onSubmit={handleSearch} className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 flex-1 min-w-0">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] shrink-0" />
              <input
                type="text"
                placeholder="Où souhaitez-vous aller au Bénin ?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm font-semibold text-white focus:outline-none placeholder-white/40 min-w-0"
              />
            </div>
            <button type="submit" className="shrink-0 w-11 h-11 sm:w-auto sm:h-auto sm:px-8 sm:py-3 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_28px_rgba(16,185,129,0.6)] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 bg-gradient-to-br from-[#10B981] to-[#059669] ring-2 ring-white/20 hover:ring-white/40">
              <Search className="w-5 h-5 sm:w-4 sm:h-4 text-white drop-shadow-md" />
              <span className="hidden sm:inline text-xs font-extrabold">Rechercher</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
