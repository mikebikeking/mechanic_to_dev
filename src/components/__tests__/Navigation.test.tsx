import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Navigation } from '../layout/Navigation';
import { AppProvider } from '../../context/AppContext';

beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: query === '(prefers-color-scheme: dark)',
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      onchange: null,
      dispatchEvent: vi.fn(),
    })),
  });
});

function wrapper({ children }: { children: React.ReactNode }) {
  return <AppProvider>{children}</AppProvider>;
}

describe('Navigation', () => {
  it('renders the nav landmark', () => {
    render(<Navigation />, { wrapper });
    expect(screen.getByRole('navigation', { name: 'Main Navigation' })).toBeInTheDocument();
  });

  it('renders logo button', () => {
    render(<Navigation />, { wrapper });
    expect(screen.getByRole('button', { name: 'Go to home' })).toBeInTheDocument();
  });

  it('renders mobile menu toggle with accessible label', () => {
    render(<Navigation />, { wrapper });
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument();
  });
});
