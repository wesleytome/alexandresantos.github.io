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
        // Paleta atual - TEMA NOVO
        'bg': '#F7F9FB',         // Base/Porcelain
        'fg': '#1F2937',         // Graphite
        'brand': '#99b8bd',      // Teal suave - Botões primários
        'brand-contrast': '#f4f4f4',
        'secondary': 'rgb(192, 152, 134)',  // Bege rosado - Botões secundários
        'accent': '#D4AF37',     // Soft Gold - Destaques
        'muted': '#EEF2F7',      // Cloud
        'info': '#0EA5E9',
        'success': '#16A34A',
        'warning': '#F59E0B',
        'danger': '#DC2626',
        'odontologia': '#99b8bd',  // Teal suave
        'hof': 'rgb(192, 152, 134)',          // Bege rosado
        'destaque': '#D4AF37',     // Champagne Gold
        // Cores do sistema (mapeadas para nova paleta)
        primary: {
          DEFAULT: '#99b8bd', // Teal suave
          foreground: '#f4f4f4',
        },
        secondary: {
          DEFAULT: 'rgb(192, 152, 134)', // Bege rosado
          foreground: '#f4f4f4',
        },
        accent: {
          DEFAULT: '#D4AF37', // Soft Gold
          foreground: '#FFFFFF',
        },
        neutral: {
          DEFAULT: '#F7F9FB', // Porcelain
          foreground: '#1F2937', // Graphite
        },
        background: '#F7F9FB', // Porcelain
        foreground: '#1F2937', // Graphite
        muted: {
          DEFAULT: '#EEF2F7', // Cloud
          foreground: '#1F2937', // Graphite
        },
        border: '#E5E7EB',
        input: '#E5E7EB',
        ring: '#1E3A5F', // Navy Serenity
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#1F2937', // Graphite
        },
        destructive: {
          DEFAULT: '#DC2626',
          foreground: '#FFFFFF',
        },
        // TEMA ANTERIOR - BASEADO NA IMAGEM DO HEADER (COMENTADO PARA REVERSÃO)
        // 'bg': '#FFFFFF',
        // 'fg': '#2D2D2D',
        // 'brand': '#5FB3B3',
        // 'secondary': '#C9A961',
        // 'accent': '#C9A961',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'serif'], // Hero
        tangerine: ['Tangerine', 'cursive'],
        jost: ['Jost', 'sans-serif'],
      },
      fontSize: {
        // Hero
        'hero': ['clamp(2.5rem, 5vw, 4.5rem)', {
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          fontWeight: '600',
        }],
        // Seções
        'section': ['clamp(1.75rem, 3vw, 2.5rem)', {
          lineHeight: '1.2',
          letterSpacing: '-0.01em',
          fontWeight: '600',
        }],
        // Subtítulos
        'subtitle': ['clamp(1.125rem, 2vw, 1.5rem)', {
          lineHeight: '1.4',
          letterSpacing: '-0.005em',
          fontWeight: '600',
        }],
        // Corpo
        'body': ['1rem', {
          lineHeight: '1.6',
          letterSpacing: '0.01em',
        }],
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
        '7': '7px',
      },
    },
  },
  plugins: [],
}

