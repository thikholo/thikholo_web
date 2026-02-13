/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      container: { center: true, padding: '1rem' },
      colors: {
        brand: {
          50: '#eff9ff',
          100: '#d8f0ff',
          200: '#b9e3ff',
          300: '#83d0ff',
          400: '#3ab5ff',
          500: '#0e9cff',
          600: '#007fe0',
          700: '#0066b6',
          800: '#065694',
          900: '#0a497a',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(2, 8, 23, 0.10)',
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
