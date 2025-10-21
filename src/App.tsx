import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { BikePathBackground } from './components/BikePathBackground';
import { Workshop } from './components/Workshop';


export function App() {
  return <div className="w-full min-h-screen bg-transparent">
      <BikePathBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Workshop />
        <Experience />
        <Education />
        <Contact />
      </div>
    </div>;
}