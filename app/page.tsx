import HeroSection from "@/components/sections/hero-section";
import DescriptionSection from "@/components/sections/about-section";
import ProjectSection from "@/components/sections/project-section"
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <DescriptionSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}