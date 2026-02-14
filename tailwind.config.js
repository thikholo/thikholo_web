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
      keyframes: {
        'text-pulse': {
          '0%, 100%': { opacity: '1', textShadow: '0 0 20px rgba(14, 156, 255, 0.15)' },
          '50%': { opacity: '0.92', textShadow: '0 0 32px rgba(14, 156, 255, 0.25)' },
        },
        cursor: {
          '0%, 45%': { opacity: '1' },
          '50%, 95%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'text-pulse': 'text-pulse 3s ease-in-out infinite',
        cursor: 'cursor 1s step-end infinite',
      },
    },
  },
  plugins: [],
}
