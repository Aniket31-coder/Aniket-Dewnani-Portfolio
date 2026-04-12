import { useReducedMotion } from "framer-motion";
import { profile } from "./data/profile";
 
import { getReveal } from "./motion/reveal";
import { Background } from "./layout/Background";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Section } from "./ui/Section";
 
import { AwardsSection } from "./sections/Awards";
import { HeroSection } from "./sections/Hero";
import { AboutSection } from "./sections/About";
import { ExperienceSection } from "./sections/Experience";
import { ProjectsSection } from "./sections/Projects";
import { SkillsSection } from "./sections/Skills";
import { LeadershipSection } from "./sections/Leadership";
import { ContactSection } from "./sections/Contact";
 
export default function App() {
  const prefersReducedMotion = useReducedMotion();
  const reveal = getReveal(!!prefersReducedMotion);
 
  return (
    <div className="relative min-h-screen overflow-x-clip
  bg-gradient-to-b from-zinc-50 via-slate-50 to-sky-50 text-zinc-900
  dark:from-[#050816] dark:via-[#060B22] dark:to-[#0A102B] dark:text-zinc-50">
      <Background />
      <Header />
 
      <main id="top" className="relative mx-auto max-w-6xl px-4">
        <HeroSection profile={profile} reveal={reveal} />
 
        <Section id="about" title="About">
          <AboutSection profile={profile} reveal={reveal} />
        </Section>
 
        <Section id="experience" title="Experience">
          <ExperienceSection profile={profile} reveal={reveal} />
        </Section>
 
        <Section id="projects" title="Projects">
          <ProjectsSection profile={profile} reveal={reveal} />
        </Section>
 
        <Section id="skills" title="Skills">
          <SkillsSection profile={profile} reveal={reveal} />
        </Section>
 
        <Section id="leadership" title="Leadership">
          <LeadershipSection profile={profile} reveal={reveal} />
        </Section>
 
        <Section id="awards" title="Awards">
          <AwardsSection profile={profile} reveal={reveal} />
        </Section>
 
        <Section id="contact" title="Contact">
          <ContactSection profile={profile} reveal={reveal} />
        </Section>
 
        <Footer name={profile.name} />
      </main>
    </div>
  );
}
