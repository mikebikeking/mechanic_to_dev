/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useCallback, ReactNode } from 'react';
import type { SectionId, Theme } from './types';

function getInitialTheme(): Theme {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'dark';
}

interface AppContextValue {
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;
  isMenuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const value: AppContextValue = {
    activeSection,
    setActiveSection: useCallback((s: SectionId) => setActiveSection(s), []),
    isMenuOpen,
    setMenuOpen: useCallback((o: boolean) => setMenuOpen(o), []),
    theme,
    setTheme: useCallback((t: Theme) => setTheme(t), []),
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
