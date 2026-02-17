export default {
  darkMode: 'class',
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        garage: {
          DEFAULT: '#0D0D0D',
          surface: '#141414',
          elevated: '#1A1A1A',
        },
        workshop: {
          DEFAULT: '#F2F0ED',
          surface: '#E8E6E3',
          elevated: '#FFFFFF',
        },
        safety: '#FF6B00',
        steel: '#A1A1AA',
        'steel-dark': '#71717A',
        'border-line': {
          dark: '#2A2A2A',
          light: '#D4D4D8',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],

}
