/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'monster-dark': '#0f172a',
        'monster-card': '#1e293b',
        'monster-accent': '#3b82f6',
        'monster-success': '#22c55e',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
