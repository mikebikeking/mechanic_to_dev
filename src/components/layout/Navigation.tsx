import { useEffect, useRef, useCallback } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ThemeToggle } from '../ui/ThemeToggle';
import { SECTION_IDS, type SectionId } from '../../context/types';

const NAV_ITEMS: { id: SectionId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export function Navigation() {
  const { isMenuOpen, setMenuOpen, activeSection, setActiveSection } = useApp();
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + 100;

        for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
          const section = document.getElementById(SECTION_IDS[i]);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(SECTION_IDS[i]);
            break;
          }
        }
        ticking.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const scrollToSection = useCallback((id: SectionId) => {
    setMenuOpen(false);

    let attempts = 0;
    const tryScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else if (attempts < 10) {
        attempts++;
        setTimeout(tryScroll, 100);
      }
    };

    tryScroll();
  }, [setMenuOpen]);

  return (
    <nav aria-label="Main Navigation" className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-surface)]/95 backdrop-blur-sm border-b border-[var(--color-border)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-heading text-[var(--color-text-primary)] hover:text-safety transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Go to home"
            >
              MK
            </button>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <div className="flex items-baseline space-x-8">
              {NAV_ITEMS.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors min-h-[44px] flex items-center ${
                    activeSection === item.id
                      ? 'text-safety border-b-2 border-safety'
                      : 'text-[var(--color-text-primary)] hover:text-safety'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="text-[var(--color-text-primary)] hover:text-safety p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[var(--color-surface)] border-t border-[var(--color-border)]">
          <div className="px-2 pt-2 pb-3 space-y-2">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 text-base font-medium min-h-[48px] ${
                  activeSection === item.id
                    ? 'text-safety'
                    : 'text-[var(--color-text-primary)] hover:text-safety'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
