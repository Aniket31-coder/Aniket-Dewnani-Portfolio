import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Hero } from "./sections/Hero";
import { NowStrip } from "./sections/NowStrip";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Awards } from "./sections/Awards";
import { Contact } from "./sections/Contact";
import { useCursor } from "./hooks/useCursor";
import { profile } from "./data/profile";
 
export default function App() {
  useCursor();
 
  return (
    <>
      <div className="cursor-blob" id="cursor" aria-hidden="true" />
 
      <Header />
 
      <main>
        <Hero />
        <NowStrip />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Awards />
        <Contact />
        <Footer name={profile.name} />
      </main>
    </>
  );
}
