/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        'primary-dark': '#4338CA',
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
        background: '#F9FAFB',
      }
    },
  },
  plugins: [],
}