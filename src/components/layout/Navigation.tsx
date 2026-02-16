import { useEffect, useRef, useCallback } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';
import { ThemeToggle } from '../ui/ThemeToggle';
import { GearShift } from '../ui/GearShift';
import { SECTION_IDS, type SectionId } from '../../context/types';

const NAV_ITEMS: { id: SectionId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'workspace', label: 'Workspace' },
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
    <nav aria-label="Main Navigation" className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gunmetal/95 backdrop-blur-sm border-b border-blue-200 dark:border-blueprint/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <motion.button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-heading text-blue-700 dark:text-gold hover:text-blue-600 dark:hover:text-torch transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center gap-2 group"
              aria-label="Go to home"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95, y: 2 }}
              transition={{ duration: 0.2 }}
            >
              <GearShift size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              MK
            </motion.button>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <div className="flex items-baseline space-x-8">
              {NAV_ITEMS.map(item => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors min-h-[44px] flex items-center gap-2 group ${
                    activeSection === item.id
                      ? 'text-blue-700 dark:text-gold border-b-2 border-blue-700 dark:border-gold'
                      : 'text-gray-700 dark:text-textPrimary hover:text-blue-600 dark:hover:text-gold'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95, y: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <GearShift
                    size={14}
                    variant="compact"
                    className={activeSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 transition-opacity'}
                  />
                  {item.label}
                </motion.button>
              ))}
            </div>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-textPrimary hover:text-blue-600 dark:hover:text-gold p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gunmetal border-t border-blue-200 dark:border-blueprint/20">
          <div className="px-2 pt-2 pb-3 space-y-2">
            {NAV_ITEMS.map(item => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 text-base font-medium min-h-[48px] mobile-nav-link flex items-center gap-2 group ${
                  activeSection === item.id
                    ? 'text-blue-700 dark:text-gold bg-blue-50 dark:bg-blueprint/10'
                    : 'text-gray-700 dark:text-textPrimary hover:text-blue-600 dark:hover:text-gold hover:bg-blue-50 dark:hover:bg-blueprint/5'
                }`}
                whileTap={{ scale: 0.98, x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <GearShift
                  size={14}
                  variant="compact"
                  className={activeSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 transition-opacity'}
                />
                {item.label}
              </motion.button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
