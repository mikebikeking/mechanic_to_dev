import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { BikePathBackground } from './components/BikePathBackground';
import { CursorTrail } from './components/CursorTrail';
import { LoadingAnimation } from './components/LoadingAnimation';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AppProvider } from './context/AppContext';
import { LazySection } from './components/LazySection';
import { LazyAbout, LazySkills, LazySkillsMatch, LazyProjects, LazyWorkspace, LazyExperience, LazyEducation, LazyContact } from './components/LazyComponents';
import { PageTransition } from './components/PageTransition';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { ScrollProgress } from './components/ScrollProgress';
import { LogoAnimation } from './components/LogoAnimation';
import { StructuredData } from './components/StructuredData';
import { Analytics } from "@vercel/analytics/react";

export function App() {
  useSmoothScroll();
  
  return (
    <AppProvider>
      <ErrorBoundary>
        <Analytics />
        <StructuredData />
        <LogoAnimation />
        <LoadingAnimation />
        <ScrollProgress />
        <PageTransition>
          <div className="w-full min-h-screen bg-transparent dark:bg-transparent">
            <BikePathBackground />
            <CursorTrail />
          <div className="relative z-10">
            <Navigation />
            <main role="main" aria-label="Main Content">
              <Hero />
              <LazySection>
                <LazyAbout />
              </LazySection>
              {/* <LazySection>
                <LazySkillsMatch />
              </LazySection> */}
              <LazySection>
                <LazySkills />
              </LazySection>
              <LazySection>
                <LazyProjects />
              </LazySection>
              <LazySection>
                <LazyWorkspace />
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
            </main>
        </div>
          </div>
        </PageTransition>
      </ErrorBoundary>
    </AppProvider>
  );
}