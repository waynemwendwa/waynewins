import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import MobileSection from "@/components/MobileSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import "@/portfolio.css";
import "@/cosmic.css";
import "@/liquid-glass.css";
import CosmicBackground from "@/components/CosmicBackground";
import CosmicInteractions from "@/components/CosmicInteractions";
export default function Index() {
  return (
    <div className="portfolio">
      <CosmicBackground />
      <CosmicInteractions />
      <HeroSection />
      <main>
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <MobileSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
