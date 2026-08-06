import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import LearningJourney from '@/components/LearningJourney';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achivements';

export default function Home() {
  return (
    <main className="bg-brand-dark text-gray-100 selection:bg-indigo-500/30">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <LearningJourney />
      <Achievements/>
      <Contact />
      <Footer />
    </main>
  );
}
