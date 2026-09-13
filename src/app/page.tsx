import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import PartnerNetwork from "./components/PartnerNetwork";
import Pillars from "./components/Pillars";
import Institutions from "./components/Institutions";
import Education from "./components/Education";
import WorldsInDevelopment from "./components/WorldsInDevelopment";
import CharacterShowcase from "./components/CharacterShowcase";
import PublicRelease from "./components/PublicRelease";
import Readiness from "./components/Readiness";
import Research from "./components/Research";
import Team from "./components/Team";
import StudioGroup from "./components/StudioGroup";
import ContactSection from "./components/ContactSection";
import FooterContact from "./components/FooterContact";

export default function Page() {
  return (
    <div
      id="top"
      className="min-h-screen bg-gradient-to-b from-[#f7f3ee] via-white to-[#f7f3ee] text-black"
    >
      <NavBar />
      <Hero />
      <PartnerNetwork />
      <Pillars />
      <Institutions />
      <Education />
      <WorldsInDevelopment />
      <CharacterShowcase />
      <PublicRelease />
      <Readiness />
      <Research />
      <Team />
      <StudioGroup />
      <ContactSection />
      <FooterContact />
    </div>
  );
}
