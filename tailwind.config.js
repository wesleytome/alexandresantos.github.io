/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta elegante para estética
        'charcoal': '#2C2C2C',
        'pearl-white': '#FAFAFA',
        'soft-blush': '#F5E6E0',
        'warm-beige': '#E8DDD4',
        'rose-gold': '#D4A574',
        'soft-gray': '#8B8B8B',
        // Cores do sistema
        primary: {
          DEFAULT: '#2C2C2C', // Charcoal Elegant
          foreground: '#FAFAFA', // Pearl White
        },
        secondary: {
          DEFAULT: '#E8DDD4', // Warm Beige
          foreground: '#2C2C2C', // Charcoal
        },
        accent: {
          DEFAULT: '#D4A574', // Rose Gold
          foreground: '#FFFFFF',
        },
        neutral: {
          DEFAULT: '#FAFAFA', // Pearl White
          foreground: '#2C2C2C', // Charcoal
        },
        background: '#FAFAFA', // Pearl White
        foreground: '#2C2C2C', // Charcoal
        muted: {
          DEFAULT: '#F5E6E0', // Soft Blush
          foreground: '#2C2C2C', // Charcoal
        },
        border: '#8B8B8B', // Soft Gray
        input: '#8B8B8B', // Soft Gray
        ring: '#2C2C2C', // Charcoal
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#2C2C2C', // Charcoal
        },
        destructive: {
          DEFAULT: '#EF4444',
          foreground: '#FFFFFF',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
    },
  },
  plugins: [],
}

