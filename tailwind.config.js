/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mimhar warm desert theme
        primary: {
          DEFAULT: '#D97706',
          light: '#F59E0B',
          dark: '#B45309',
        },
        sand: {
          DEFAULT: '#FCD34D',
          light: '#FEF3C7',
          dark: '#F59E0B',
        },
        sunset: '#FDBA74',
        emerald: {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#059669',
        },
        cream: '#FFF8E7',
        beige: '#EEDCC1',
        brown: {
          DEFAULT: '#3B2F2F',
          light: '#725E52',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
