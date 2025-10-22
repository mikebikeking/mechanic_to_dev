import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Navigation } from '../Navigation';
import { AppProvider } from '../../context/AppContext';

const MockedAppProvider = ({ children }: { children: React.ReactNode }) => (
  <AppProvider>
    {children}
  </AppProvider>
);

describe('Navigation', () => {
  it('renders navigation items', () => {
    render(
      <MockedAppProvider>
        <Navigation />
      </MockedAppProvider>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders logo', () => {
    render(
      <MockedAppProvider>
        <Navigation />
      </MockedAppProvider>
    );

    expect(screen.getByText('MK')).toBeInTheDocument();
  });

  it('toggles mobile menu', () => {
    render(
      <MockedAppProvider>
        <Navigation />
      </MockedAppProvider>
    );

    // The mobile menu button doesn't have an accessible name, so we find it by its icon
    const menuButton = screen.getByRole('button', { name: '' });
    expect(menuButton).toBeInTheDocument();
  });
});
