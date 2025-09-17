/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6366f1',
          dark: '#818cf8',
        },
        dark: {
          bg: '#0f172a',
          surface: '#1e293b',
          text: '#f8fafc',
        },
        light: {
          bg: '#f8fafc',
          surface: '#ffffff',
          text: '#0f172a',
        },
      },
    },
  },
  plugins: [],
};
