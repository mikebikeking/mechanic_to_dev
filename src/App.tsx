import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { BikePathBackground } from './components/BikePathBackground';
import { CursorTrail } from './components/CursorTrail';
import { LoadingAnimation } from './components/LoadingAnimation';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AppProvider } from './context/AppContext';
import { LazySection } from './components/LazySection';
import { LazyAbout, LazySkills, LazyProjects, LazyWorkshop, LazyExperience, LazyEducation, LazyContact } from './components/LazyComponents';


export function App() {
  return (
    <AppProvider>
      <ErrorBoundary>
        <LoadingAnimation />
        <div className="w-full min-h-screen bg-transparent dark:bg-transparent">
          <BikePathBackground />
          <CursorTrail />
        <div className="relative z-10">
          <Navigation />
          <Hero />
          <LazySection>
            <LazyAbout />
          </LazySection>
          <LazySection>
            <LazySkills />
          </LazySection>
          <LazySection>
            <LazyProjects />
          </LazySection>
          <LazySection>
            <LazyWorkshop />
          </LazySection>
          <LazySection>
            <LazyExperience />
          </LazySection>
          <LazySection>
            <LazyEducation />
          </LazySection>
          <LazySection>
            <LazyContact />
          </LazySection>
        </div>
        </div>
      </ErrorBoundary>
    </AppProvider>
  );
}