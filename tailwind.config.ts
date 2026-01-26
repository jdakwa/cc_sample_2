import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['var(--font-display)', 'serif'],
        'body': ['var(--font-body)', 'sans-serif'],
        'luxury': ['var(--font-luxury)', 'serif'],
      },
      colors: {
        luxury: {
          // Refined color palette
          gold: '#C9A961', // Muted, sophisticated gold
          dark: '#0A0A0A', // Near-black
          charcoal: '#2C2C2C', // Deep gray
          stone: '#E8E6E1', // Off-white
          light: '#FAFAF9', // Warm white
          border: '#E5E3DE', // Subtle border
          text: '#1A1A1A', // Primary text
          'text-muted': '#6B6B6B', // Secondary text
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
      },
      maxWidth: {
        'container': '1320px',
        'content': '1200px',
        '7xl': '80rem',
      },
      padding: {
        'container-padding-x': 'var(--container-padding-x)',
      },
      borderRadius: {
        'luxury': '12px',
        'luxury-lg': '16px',
      },
      boxShadow: {
        'luxury': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        'luxury-md': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'luxury-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.06), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'luxury-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
      transitionDuration: {
        'luxury': '320ms',
        'luxury-slow': '420ms',
      },
    },
  },
  plugins: [],
}
export default config
