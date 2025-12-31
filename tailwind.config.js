/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3f0',
          100: '#e8e0d6',
          200: '#d4c4b0',
          300: '#b8a085',
          400: '#9d7d5f',
          500: '#8b6b4f',
          600: '#7a5a43',
          700: '#654a38',
          800: '#543e32',
          900: '#48352c',
          950: '#281c16',
        },
        accent: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        earth: {
          50: '#f6f5f3',
          100: '#e8e5df',
          200: '#d3ccc0',
          300: '#b8ad9b',
          400: '#9d8d75',
          500: '#8b7a62',
          600: '#7a6a56',
          700: '#655749',
          800: '#54493e',
          900: '#483f36',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}

