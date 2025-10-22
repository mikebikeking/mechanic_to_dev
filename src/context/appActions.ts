import { AppAction } from './types';

export const appActions = {
  setLoading: (loading: boolean): AppAction => ({
    type: 'SET_LOADING',
    payload: loading,
  }),
  setActiveSection: (section: string): AppAction => ({
    type: 'SET_ACTIVE_SECTION',
    payload: section,
  }),
  setMenuOpen: (open: boolean): AppAction => ({
    type: 'SET_MENU_OPEN',
    payload: open,
  }),
  setTheme: (theme: 'light' | 'dark'): AppAction => ({
    type: 'SET_THEME',
    payload: theme,
  }),
  setError: (error: string): AppAction => ({
    type: 'SET_ERROR',
    payload: error,
  }),
  clearError: (): AppAction => ({
    type: 'CLEAR_ERROR',
  }),
};
