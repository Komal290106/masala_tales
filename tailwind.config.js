/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
   colors: {
        bgDark: "#0B2C3A",       // Deep Teal / Navy
        bgLight: "#123D4D",      // Lighter Teal
        accent: "#D45C33",       // Rust Orange
        accentDark: "#C24A2C",   // Dark Rust (hover state)
        gold: "#C6A35C",         // Muted Gold
        cream: "#F4F1E7",        // Soft Cream
        overlay: "rgba(11, 44, 58, 0.7)" // Teal Overlay
      },
      fontFamily: {
        'parisienne': ['Parisienne', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'cormorant': ['Cormorant Garamond', 'serif']
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'shimmer': 'shimmer 2s infinite',
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-in': 'slideIn 0.5s ease-out'
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        }
      }
    }
  },
  plugins: [],
};