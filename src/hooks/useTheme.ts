import { useEffect } from 'react';
import { useApp } from '../context/useApp';
import { appActions } from '../context/appActions';

export const useTheme = () => {
  const { state, dispatch } = useApp();
  const { theme } = state;

  useEffect(() => {
    // Apply theme to document on mount and when theme changes
    const root = document.documentElement;
    const body = document.body;
    
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      body.classList.add('dark');
      body.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      body.classList.add('light');
      body.classList.remove('dark');
    }
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    dispatch(appActions.setTheme(newTheme));
  };

  return { theme, toggleTheme };
};
