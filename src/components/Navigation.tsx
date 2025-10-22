import { useEffect, useMemo } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { useApp } from '../context/useApp';
import { appActions } from '../context/appActions';
import { ThemeToggle } from './ThemeToggle';

export function Navigation() {
  const { state, dispatch } = useApp();
  const { isMenuOpen, activeSection } = state;

  const navItems = useMemo(() => [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'workshop', label: 'Workshop' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          dispatch(appActions.setActiveSection(navItems[i].id));
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems, dispatch]);

  const scrollToSection = (id: string) => {
    // Close mobile menu immediately
    dispatch(appActions.setMenuOpen(false));
    
    // Try multiple times to find the element (for lazy loading)
    let attempts = 0;
    const maxAttempts = 10;
    
    const tryScroll = () => {
      const element = document.getElementById(id);
      
      if (element) {
        // Element found - scroll to it
        const yOffset = -80; // Account for fixed navbar
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      } else if (attempts < maxAttempts) {
        // Element not found yet - try again
        attempts++;
        setTimeout(tryScroll, 100); // Increased delay for Contact section
      }
    };
    
    // Start trying
    tryScroll();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gunmetal/95 backdrop-blur-sm border-b border-blue-200 dark:border-blueprint/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Clickable to Home */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-heading text-blue-700 dark:text-gold hover:text-blue-600 dark:hover:text-torch transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Go to home"
            >
              MK
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <div className="flex items-baseline space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors min-h-[44px] flex items-center ${
                    activeSection === item.id
                      ? 'text-blue-700 dark:text-gold border-b-2 border-blue-700 dark:border-gold'
                      : 'text-gray-700 dark:text-textPrimary hover:text-blue-600 dark:hover:text-gold'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            {/* Theme Toggle - Desktop */}
            <ThemeToggle />
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => dispatch(appActions.setMenuOpen(!isMenuOpen))}
              className="text-gray-700 dark:text-textPrimary hover:text-blue-600 dark:hover:text-gold p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gunmetal border-t border-blue-200 dark:border-blueprint/20">
          <div className="px-2 pt-2 pb-3 space-y-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 text-base font-medium min-h-[48px] mobile-nav-link ${
                  activeSection === item.id
                    ? 'text-blue-700 dark:text-gold bg-blue-50 dark:bg-blueprint/10'
                    : 'text-gray-700 dark:text-textPrimary hover:text-blue-600 dark:hover:text-gold hover:bg-blue-50 dark:hover:bg-blueprint/5'
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