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
  shortTitle: string;
  description: string;
  cta: { label: string; href: string };
};

const destinations: Destination[] = [
  {
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1400&q=80",
    badge: "Vodun Days 2027 & Route des Esclaves",
    tag: "Ouidah • Bénin",
    title: "Histoire, Mémoire & Cité Spirituelle",
    shortTitle: "Ouidah",
    description: "Célébrez les danses sacrées, explorez le Temple des Pythons et méditez devant la Porte du Non-Retour.",
    cta: { label: "Réserver l'Expérience", href: "/activites/histoire-culture-ouidah" },
  },
  {
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1400&q=80",
    badge: "La Cité Lacustre",
    tag: "Ganvié • Bénin",
    title: "La Venise de l'Afrique",
    shortTitle: "Ganvié",
    description: "Voguez entre les pilotis de la plus grande cité lacustre d'Afrique sur le lac Nokoué.",
    cta: { label: "Explorer Ganvié", href: "/explorer?dest=ganvie" },
  },
  {
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1400&q=80",
    badge: "Safari Wild",
    tag: "Parc Pendjari • Bénin",
    title: "La Grande Réserve du Nord",
    shortTitle: "Pendjari",
    description: "Safari au cœur de la réserve d'Afrique de l'Ouest : éléphants, lions et antilopes.",
    cta: { label: "Explorer la Pendjari", href: "/explorer?dest=pendjari" },
  },
  {
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1400&q=80",
    badge: "Patrimoine Royal",
    tag: "Abomey • Bénin",
    title: "Palais Royaux et Trésors Fon",
    shortTitle: "Abomey",
    description: "Visitez les palais classés UNESCO des rois du Dahomey et admirent les tentures appliquées.",
    cta: { label: "Découvrir Abomey", href: "/explorer?dest=abomey" },
  },
  {
    image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=1400&q=80",
    badge: "Terre des Tanéka",
    tag: "Tatoko • Bénin",
    title: "Tata Somba, Forteresses du Nord",
    shortTitle: "Tatoko",
    description: "Explorez les cases tours des montagnes de l'Atacora, habitations fortifiées uniques au monde.",
    cta: { label: "Explorer le Nord", href: "/explorer?dest=tatoko" },
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
    }, 5000);
  }, [current]);

  useEffect(() => {
    timer.current = setInterval(() => {
      setCurrent((c) => wrap(c + 1));
    }, 5000);
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
    <section className="relative z-10 pt-28 pb-20 px-4 overflow-hidden min-h-[680px] flex flex-col justify-center">

      <div className="relative z-10 max-w-7xl mx-auto space-y-14 w-full">
        <div className="text-center space-y-5 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-serif font-black tracking-tight text-white leading-none drop-shadow-2xl">
            Découvrez l&apos;Âme Sauvage & <br />
            <span className="text-[#E85D04] italic drop-shadow-[0_2px_20px_rgba(232,93,4,0.4)]">Sacrée du Bénin</span>
          </h1>
          <p className="text-base sm:text-xl text-white/70 font-medium max-w-2xl mx-auto leading-relaxed">
            Visitez Ganvié et la Pendjari, achetez vos pass pour les <strong className="text-white">Vodun Days</strong> et commandez l&apos;artisanat d&apos;art béninois avec confirmation instantanée.
          </p>
        </div>

        {/* Rotating 3-Capsule Carousel */}
        <div className="relative max-w-6xl mx-auto pt-2">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            {/* Left Pill */}
            <div
              key={`left-${indices[0]}`}
              className="md:col-span-1 relative h-[260px] md:h-[420px] rounded-[40px] overflow-hidden shadow-lg border-2 border-white/20 group cursor-pointer transition-all duration-700 ease-in-out"
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
              className="md:col-span-3 relative h-[380px] md:h-[520px] rounded-[50px] overflow-hidden shadow-2xl border-4 border-white/30 group"
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

              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black text-[#0F382C] shadow-md flex items-center gap-2 transition-all duration-500">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E85D04] animate-pulse" />
                {destinations[indices[1]].badge}
              </div>

              <div className="absolute bottom-8 left-8 right-8 text-white space-y-3">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block transition-all duration-500">{destinations[indices[1]].tag}</span>
                  <h3 className="text-2xl sm:text-4xl font-serif font-black transition-all duration-500">{destinations[indices[1]].title}</h3>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/20">
                  <p className="text-xs text-gray-200 max-w-md hidden sm:block transition-all duration-500">{destinations[indices[1]].description}</p>
                  <Link href={destinations[indices[1]].cta.href} className="px-6 py-3 bg-[#E85D04] hover:bg-[#D9531E] text-white text-xs font-extrabold rounded-full shadow-lg transition-all flex items-center gap-2">
                    <span>{destinations[indices[1]].cta.label}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Pill */}
            <div
              key={`right-${indices[2]}`}
              className="md:col-span-1 relative h-[260px] md:h-[420px] rounded-[40px] overflow-hidden shadow-lg border-2 border-white/20 group cursor-pointer transition-all duration-700 ease-in-out"
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
          <button type="button" onClick={prev} aria-label="Précédent" className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md shadow-lg flex items-center justify-center text-white transition-all cursor-pointer hidden md:flex">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button type="button" onClick={next} aria-label="Suivant" className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md shadow-lg flex items-center justify-center text-white transition-all cursor-pointer hidden md:flex">
            <ChevronRight className="w-5 h-5" />
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
                  i === current ? "w-8 bg-[#E85D04]" : "w-2.5 bg-[#D6CBBA] hover:bg-[#B8A98F]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div
          className="p-3 sm:p-4 rounded-full shadow-2xl max-w-3xl mx-auto"
          style={{ backdropFilter: "blur(20px)", background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}
        >
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3 px-4 w-full">
              <MapPin className="w-5 h-5 text-[#E85D04] shrink-0" />
              <input
                type="text"
                placeholder="Où souhaitez-vous aller au Bénin ? (Ganvié, Ouidah, Pendjari...)"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm font-semibold text-white focus:outline-none placeholder-white/40"
              />
            </div>
            <button type="submit" className="w-full sm:w-auto px-8 py-3 bg-[#E85D04] hover:bg-[#D9531E] text-white text-xs font-extrabold rounded-full shadow-md transition-all shrink-0 cursor-pointer flex items-center justify-center gap-2">
              <Search className="w-4 h-4" />
              <span>Rechercher</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
