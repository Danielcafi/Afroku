import { Navbar } from "@/components/layout/Navbar";
import { HeroSearch } from "@/components/home/HeroSearch";
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
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans antialiased">
      <Navbar />
      <main className="flex-1">
        <HeroSearch />
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
