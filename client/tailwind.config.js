/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          deep:  '#0f3d25',
          dark:  '#1a6640',
          mid:   '#2a8050',
          light: '#3da06a',
        },
        gold: {
          DEFAULT: '#c8a84b',
          light:   '#e2c96a',
          pale:    '#f5ecc8',
        },
        rust:  '#7a2e1e',
        cream: {
          DEFAULT: '#f5f0e8',
          dark:    '#ede5d4',
        },
        ink: {
          DEFAULT: '#1a1208',
          mid:     '#3d2e1a',
          light:   '#7a6a52',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['Outfit', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: { from: { opacity: 0, transform: 'translateY(28px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
      },
    },
  },
  plugins: [],
}

