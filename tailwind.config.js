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
        // Nova paleta conforme layout Figma
        'bg': '#FAFAFA',         // Background claro
        'fg': '#212020',         // Texto escuro
        'brand': '#7FC2B4',      // Verde água - Botões primários
        'brand-contrast': '#FFFFFF',
        'secondary': '#7FC2B4',  // Mesma cor do brand
        'accent': '#7FC2B4',     // Verde água
        'muted': '#F7F7F7',      // Background alternativo
        'info': '#0EA5E9',
        'success': '#16A34A',
        'warning': '#F59E0B',
        'danger': '#DC2626',
        'odontologia': '#7FC2B4',  // Verde água
        'hof': '#7FC2B4',          // Verde água
        'destaque': '#7FC2B4',     // Verde água
        // Cores do sistema (mapeadas para nova paleta)
        primary: {
          DEFAULT: '#7FC2B4', // Verde água
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#7FC2B4', // Verde água
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#7FC2B4', // Verde água
          foreground: '#FFFFFF',
        },
        neutral: {
          DEFAULT: '#FAFAFA', // Background claro
          foreground: '#212020', // Texto escuro
        },
        background: '#FAFAFA', // Background claro
        foreground: '#212020', // Texto escuro
        muted: {
          DEFAULT: '#F7F7F7', // Background alternativo
          foreground: '#212020', // Texto escuro
        },
        border: '#E5E7EB',
        input: '#E5E7EB',
        ring: '#7FC2B4', // Verde água
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#212020', // Texto escuro
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
        heading: ['Manrope', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'system-ui', 'sans-serif'], // Hero
        tangerine: ['Tangerine', 'cursive'],
        jost: ['Manrope', 'system-ui', 'sans-serif'],
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

