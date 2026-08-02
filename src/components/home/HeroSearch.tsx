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
  price: string;
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
    price: "À partir de 20 000 FCFA",
    description: "Célébrez les danses sacrées, explorez le Temple des Pythons et méditez devant la Porte du Non-Retour.",
    cta: { label: "Réserver l'Expérience", href: "/activites/histoire-culture-ouidah" },
  },
  {
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1400&q=80",
    badge: "La Cité Lacustre",
    tag: "Ganvié • Bénin",
    title: "La Venise de l'Afrique",
    shortTitle: "Ganvié",
    price: "25 000 FCFA",
    description: "Voguez entre les pilotis de la plus grande cité lacustre d'Afrique sur le lac Nokoué.",
    cta: { label: "Explorer Ganvié", href: "/explorer?dest=ganvie" },
  },
  {
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1400&q=80",
    badge: "Safari Wild",
    tag: "Parc Pendjari • Bénin",
    title: "La Grande Réserve du Nord",
    shortTitle: "Pendjari",
    price: "45 000 FCFA",
    description: "Safari au cœur de la réserve d'Afrique de l'Ouest : éléphants, lions et antilopes.",
    cta: { label: "Explorer la Pendjari", href: "/explorer?dest=pendjari" },
  },
  {
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1400&q=80",
    badge: "Patrimoine Royal",
    tag: "Abomey • Bénin",
    title: "Palais Royaux et Trésors Fon",
    shortTitle: "Abomey",
    price: "15 000 FCFA",
    description: "Visitez les palais classés UNESCO des rois du Dahomey et admirent les tentures appliquées.",
    cta: { label: "Découvrir Abomey", href: "/explorer?dest=abomey" },
  },
  {
    image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=1400&q=80",
    badge: "Terre des Tanéka",
    tag: "Tatoko • Bénin",
    title: "Tata Somba, Forteresses du Nord",
    shortTitle: "Tatoko",
    price: "35 000 FCFA",
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
  const [sliding, setSliding] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval>>(null);

  const rotate = useCallback(() => {
    if (sliding) return;
    setSliding(true);
    setTimeout(() => {
      setCurrent((c) => wrap(c + 1));
      setSliding(false);
    }, 500);
  }, [sliding]);

  useEffect(() => {
    timer.current = setInterval(rotate, 4500);
    return () => clearInterval(timer.current!);
  }, [rotate]);

  const goTo = (index: number) => {
    if (index === current || sliding) return;
    clearInterval(timer.current!);
    setSliding(true);
    setTimeout(() => {
      setCurrent(index);
      setSliding(false);
      timer.current = setInterval(rotate, 4500);
    }, 500);
  };

  const prev = () => goTo(wrap(current - 1));
  const next = () => goTo(wrap(current + 1));

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/explorer?dest=${encodeURIComponent(destination)}`);
  };

  const indices = [wrap(current - 1), current, wrap(current + 1)];

  return (
    <section className="relative bg-[#FAF7F2] text-gray-900 pt-10 pb-20 px-4 overflow-hidden border-b border-[#E5DEC9]/50">
      <div className="absolute inset-0 bg-[radial-gradient(#D6CBBA_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#E85D04]/10 via-amber-200/20 to-emerald-200/10 rounded-full blur-3xl pointer-events-none" />

      <img
        src="/afroku-logo.png"
        alt=""
        aria-hidden="true"
        className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-auto opacity-[0.06] pointer-events-none select-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight text-[#1A2621] leading-none">
            Découvrez l&apos;Âme Sauvage & <br />
            <span className="text-[#E85D04] italic">Sacrée du Bénin</span>
          </h1>
          <p className="text-sm sm:text-lg text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Visitez Ganvié et la Pendjari, achetez vos pass pour les <strong>Vodun Days</strong> et commandez l&apos;artisanat d&apos;art béninois avec confirmation instantanée.
          </p>
        </div>

        {/* Rotating 3-Capsule Carousel */}
        <div className="relative max-w-6xl mx-auto pt-2">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            {/* Left Pill */}
            <div
              key={`left-${indices[0]}`}
              className="md:col-span-1 relative h-[260px] md:h-[380px] rounded-[40px] overflow-hidden shadow-lg border-2 border-white group cursor-pointer animate-[slideInLeft_0.5s_ease-out]"
              onClick={() => goTo(wrap(current - 1))}
            >
              <img src={destinations[indices[0]].image} alt={destinations[indices[0]].title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-3 right-3 text-white text-center">
                <span className="text-[9px] font-bold uppercase tracking-wider text-amber-300 block">{destinations[indices[0]].tag.split("•")[0].trim()}</span>
                <h3 className="font-serif font-bold text-base mt-0.5">{destinations[indices[0]].shortTitle}</h3>
                <span className="text-[11px] font-bold text-emerald-300 block">{destinations[indices[0]].price}</span>
              </div>
            </div>

            {/* Center Pill */}
            <div
              key={`center-${indices[1]}`}
              className="md:col-span-3 relative h-[380px] md:h-[480px] rounded-[50px] overflow-hidden shadow-2xl border-4 border-white group animate-[slideInCenter_0.5s_ease-out]"
            >
              <img src={destinations[indices[1]].image} alt={destinations[indices[1]].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/20 to-transparent" />

              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black text-[#0F382C] shadow-md flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E85D04] animate-pulse" />
                {destinations[indices[1]].badge}
              </div>

              <div className="absolute bottom-8 left-8 right-8 text-white space-y-3">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block">{destinations[indices[1]].tag}</span>
                  <h3 className="text-2xl sm:text-4xl font-serif font-black">{destinations[indices[1]].title}</h3>
                  <span className="text-[11px] font-bold text-emerald-300 block">{destinations[indices[1]].price}</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/20">
                  <p className="text-xs text-gray-200 max-w-md hidden sm:block">{destinations[indices[1]].description}</p>
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
              className="md:col-span-1 relative h-[260px] md:h-[380px] rounded-[40px] overflow-hidden shadow-lg border-2 border-white group cursor-pointer animate-[slideInRight_0.5s_ease-out]"
              onClick={() => goTo(wrap(current + 1))}
            >
              <img src={destinations[indices[2]].image} alt={destinations[indices[2]].title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-3 right-3 text-white text-center">
                <span className="text-[9px] font-bold uppercase tracking-wider text-amber-300 block">{destinations[indices[2]].tag.split("•")[0].trim()}</span>
                <h3 className="font-serif font-bold text-base mt-0.5">{destinations[indices[2]].shortTitle}</h3>
                <span className="text-[11px] font-bold text-emerald-300 block">{destinations[indices[2]].price}</span>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button type="button" onClick={prev} aria-label="Précédent" className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white backdrop-blur-md shadow-lg flex items-center justify-center text-gray-900 transition-all cursor-pointer hidden md:flex">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button type="button" onClick={next} aria-label="Suivant" className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white backdrop-blur-md shadow-lg flex items-center justify-center text-gray-900 transition-all cursor-pointer hidden md:flex">
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
        <div className="bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-full shadow-xl border border-[#DCD3BE] max-w-3xl mx-auto text-gray-800">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3 px-4 w-full">
              <MapPin className="w-5 h-5 text-[#E85D04] shrink-0" />
              <input
                type="text"
                placeholder="Où souhaitez-vous aller au Bénin ? (Ganvié, Ouidah, Pendjari...)"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm font-semibold text-gray-900 focus:outline-none placeholder-gray-400"
              />
            </div>
            <button type="submit" className="w-full sm:w-auto px-8 py-3 bg-[#0F382C] hover:bg-[#1C4334] text-white text-xs font-extrabold rounded-full shadow-md transition-all shrink-0 cursor-pointer flex items-center justify-center gap-2">
              <Search className="w-4 h-4 text-[#E85D04]" />
              <span>Rechercher</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
