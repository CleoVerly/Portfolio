"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const BubbleCanvas = dynamic(() => import("@/components/BubbleCanvas"), {
  ssr: false,
});

const SwipeGate = dynamic(() => import("@/components/SwipeGate"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <BubbleCanvas />
      <SwipeGate />
      <Navbar />
      <main className="flex-1 relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <FeaturedProjects />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
