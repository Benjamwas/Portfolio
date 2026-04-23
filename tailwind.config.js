export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ✅ NEW PRIMARY SYSTEM
        burgundy: {
          50:  '#fdf2f4',
          100: '#fbe6ea',
          200: '#f5c2cc',
          300: '#ec8fa3',
          400: '#e05c7c',
          500: '#c73a5c',
          600: '#a52c49',
          700: '#7f2238',
          800: '#5a1727',
          900: '#3a0f19', // MAIN BACKGROUND
        },

        // ✅ KEEP GOLD (for headers & accents)
        gold: {
          400: '#E5C158',
          500: '#D4AF37',
          600: '#B5952F',
        },

        // ⚠️ KEEP NAVY ONLY FOR DARK MODE (optional)
        navy: {
          900: '#0A192F',
          800: '#112240',
          700: '#233554',
        },

        light: '#F8F9FC',
        dark: '#020617',
        charcoal: '#1E293B',
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },

      animation: {
        blob: 'blob 7s infinite',
      },

      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}