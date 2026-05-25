import AboutSection from "@/sections/AboutSection";
import HeroSection from "@/sections/HeroSection";
import ProjectsSection from "@/sections/ProjectsSection";
import StatsSection from "@/sections/StatsSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <StatsSection />
    </main>
  );
}
