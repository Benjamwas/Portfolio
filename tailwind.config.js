
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A192F', // Primary
          800: '#112240', // Slightly lighter for cards in dark mode
          700: '#233554',
        },
        royal: '#1F3C88', // Secondary
        gold: {
          400: '#E5C158',
          500: '#D4AF37', // Accent
          600: '#B5952F',
        },
        light: '#F8F9FC', // Light bg
        dark: '#020617', // Dark bg
        charcoal: '#1E293B', // Text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 7s infinite',
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
