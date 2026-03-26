import HeroSection from "@/components/sections/hero-section";
import DescriptionSection from "@/components/sections/about-section";
import SportDesignSection from "@/components/sections/sport-design-section"
import BrochureDesignSection from "@/components/sections/brochure-design-section";
import LogoDesignSection from "@/components/sections/logo-design-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <DescriptionSection />
      <SportDesignSection />
      <BrochureDesignSection />
      <LogoDesignSection />
      <ContactSection />
    </main>
  );
}