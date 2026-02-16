import { Navigation } from './components/layout/Navigation';
import { Hero } from './components/sections/Hero';
import { BikePathBackground } from './components/layout/BikePathBackground';
import { CursorTrail } from './components/layout/CursorTrail';
import { LoadingAnimation } from './components/layout/LoadingAnimation';
import { ErrorBoundary } from './components/layout/ErrorBoundary';
import { AppProvider } from './context/AppContext';
import { LazySection } from './components/layout/LazySection';
import { LazyAbout, LazySkills, LazyProjects, LazyWorkspace, LazyExperience, LazyEducation, LazyContact } from './components/LazyComponents';
import { PageTransition } from './components/layout/PageTransition';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { StructuredData } from './components/StructuredData';
import { Analytics } from "@vercel/analytics/react";

export function App() {
  useSmoothScroll();

  return (
    <AppProvider>
      <ErrorBoundary>
        <Analytics />
        <StructuredData />
        <LoadingAnimation />
        <ScrollProgress />
        <PageTransition>
          <div className="w-full min-h-screen bg-transparent dark:bg-transparent">
            <BikePathBackground />
            <CursorTrail />
            <div className="relative z-10">
              <Navigation />
              <main aria-label="Main Content">
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
