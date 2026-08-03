import { Navbar } from "@/components/layout/Navbar";
import { HeroSearch } from "@/components/home/HeroSearch";
import { Vision } from "@/components/home/Vision";
import { BeninExperienceSteps } from "@/components/home/BeninExperienceSteps";
import { Incontournables } from "@/components/home/Incontournables";
import { PopularExperiences } from "@/components/home/PopularExperiences";
import { EventsShowcase } from "@/components/home/EventsShowcase";
import { ArtisanatShowcase } from "@/components/home/ArtisanatShowcase";
import { WhyAfroku } from "@/components/home/WhyAfroku";
import { Testimonials } from "@/components/home/Testimonials";
import { Partners } from "@/components/home/Partners";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="page-content min-h-screen flex flex-col text-white font-sans antialiased">
      <Navbar overlay />
      <main className="flex-1">
        <HeroSearch />
        <Vision />
        <BeninExperienceSteps />
        <Incontournables />
        <PopularExperiences />
        <EventsShowcase />
        <ArtisanatShowcase />
        <WhyAfroku />
        <Testimonials />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
