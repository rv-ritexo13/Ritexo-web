/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2fb',
          100: '#d5def5',
          200: '#a9bdea',
          300: '#7b98dd',
          400: '#4f74cf',
          500: '#3357b3',
          600: '#264391',
          700: '#1c336f',
          800: '#132349',
          900: '#0b162f',
          950: '#060d1c',
        },
        brand: {
          // bright blue
          50: '#eaf3ff',
          100: '#d3e6ff',
          200: '#a9ccff',
          300: '#74acff',
          400: '#3b9bff',
          500: '#1a7fff',
          600: '#0066e6',
          700: '#0052ba',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(11, 22, 47, 0.15)',
        'card-hover': '0 22px 48px -16px rgba(11, 22, 47, 0.28)',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(135deg, #0b162f 0%, #132349 45%, #1c336f 100%)',
        'brand-gradient': 'linear-gradient(135deg, #0066e6 0%, #06b6d4 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.8s ease-out both',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
