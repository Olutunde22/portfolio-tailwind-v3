import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TerminalWindow } from "@/components/terminal-window";
import { HeroSection } from "@/components/home/hero-section";
import { Ticker } from "@/components/home/ticker";
import { StatsSection } from "@/components/home/stats-section";
import { ExperienceSection } from "@/components/home/experience-section";
import { SkillsSection } from "@/components/home/skills-section";
import { ProjectsSection } from "@/components/home/projects-section";

export default function App() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-50 bg-[repeating-linear-gradient(0deg,rgb(var(--scanline)/var(--scanline-alpha))_0_1px,transparent_1px_3px)]"
      />

      <TerminalWindow>
        <Header />
        <main className="flex-1">
          <HeroSection />
          <Ticker />
          <StatsSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
        </main>
        <Footer />
      </TerminalWindow>
    </>
  );
}
