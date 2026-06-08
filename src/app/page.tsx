import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BentoSection from "@/components/BentoSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProcessSection from "@/components/ProcessSection";
import SkillsSection from "@/components/SkillsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 relative z-10">
        <HeroSection />
        <BentoSection />
        <ServicesSection />
        <FeaturedProjects />
        <ProcessSection />
        <SkillsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
