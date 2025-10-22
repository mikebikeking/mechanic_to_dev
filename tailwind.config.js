export default {
  darkMode: 'class',
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        gunmetal: '#1C1C1E',
        platinum: '#F5F5F7',
        gold: '#FFD60A',
        torch: '#FF6B35',
        blueprint: '#0A84FF',
        textPrimary: '#F5F5F7',
        textSecondary: '#8E8E93',
        // Light mode colors
        lightBg: '#FFFFFF',
        lightBgSecondary: '#F5F5F7',
        lightText: '#1C1C1E',
        lightTextSecondary: '#6E6E73',
      },
      fontFamily: {
        heading: ['Bebas Neue', 'Oswald', 'sans-serif'],
        body: ['Inter', 'Work Sans', 'sans-serif'],
        mono: ['Space Mono', 'JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
  
}
