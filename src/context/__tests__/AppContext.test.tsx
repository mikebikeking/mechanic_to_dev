import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { AppProvider, useApp } from '../AppContext';

// jsdom doesn't have matchMedia
beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: query === '(prefers-color-scheme: dark)',
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  });
});

function wrapper({ children }: { children: React.ReactNode }) {
  return <AppProvider>{children}</AppProvider>;
}

describe('AppContext', () => {
  it('provides default values', () => {
    const { result } = renderHook(() => useApp(), { wrapper });

    expect(result.current.activeSection).toBe('home');
    expect(result.current.isMenuOpen).toBe(false);
    expect(['light', 'dark']).toContain(result.current.theme);
  });

  it('updates activeSection', () => {
    const { result } = renderHook(() => useApp(), { wrapper });

    act(() => { result.current.setActiveSection('projects'); });
    expect(result.current.activeSection).toBe('projects');
  });

  it('toggles menu', () => {
    const { result } = renderHook(() => useApp(), { wrapper });

    act(() => { result.current.setMenuOpen(true); });
    expect(result.current.isMenuOpen).toBe(true);

    act(() => { result.current.setMenuOpen(false); });
    expect(result.current.isMenuOpen).toBe(false);
  });

  it('updates theme', () => {
    const { result } = renderHook(() => useApp(), { wrapper });

    act(() => { result.current.setTheme('light'); });
    expect(result.current.theme).toBe('light');

    act(() => { result.current.setTheme('dark'); });
    expect(result.current.theme).toBe('dark');
  });

  it('throws when used outside provider', () => {
    expect(() => {
      renderHook(() => useApp());
    }).toThrow('useApp must be used within an AppProvider');
  });
});
