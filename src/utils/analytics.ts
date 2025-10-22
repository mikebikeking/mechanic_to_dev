// Analytics utility for tracking user interactions
// Helps you understand which projects/sections get the most attention

interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const trackEvent = ({ category, action, label, value }: AnalyticsEvent): void => {
  // Google Analytics (if you add it later)
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }

  // Console log for development (remove in production)
  if (import.meta.env.DEV) {
    console.log('📊 Analytics Event:', { category, action, label, value });
  }
};

// Pre-defined tracking functions
export const analytics = {
  // Project interactions
  projectView: (projectName: string) => {
    trackEvent({
      category: 'Projects',
      action: 'view',
      label: projectName,
    });
  },
  
  projectLiveClick: (projectName: string) => {
    trackEvent({
      category: 'Projects',
      action: 'click_live',
      label: projectName,
    });
  },
  
  projectCodeClick: (projectName: string) => {
    trackEvent({
      category: 'Projects',
      action: 'click_code',
      label: projectName,
    });
  },

  // Contact interactions
  contactFormSubmit: () => {
    trackEvent({
      category: 'Contact',
      action: 'form_submit',
    });
  },
  
  resumeDownload: () => {
    trackEvent({
      category: 'Contact',
      action: 'resume_download',
    });
  },
  
  socialClick: (platform: string) => {
    trackEvent({
      category: 'Social',
      action: 'click',
      label: platform,
    });
  },

  // Navigation
  sectionView: (sectionName: string) => {
    trackEvent({
      category: 'Navigation',
      action: 'section_view',
      label: sectionName,
    });
  },

  // Theme
  themeToggle: (newTheme: string) => {
    trackEvent({
      category: 'Settings',
      action: 'theme_toggle',
      label: newTheme,
    });
  },
};

// Page view tracking
export const trackPageView = (path: string): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID || '', {
      page_path: path,
    });
  }
};

