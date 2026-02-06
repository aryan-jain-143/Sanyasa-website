/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        noir: '#060606',
        champagne: '#d9c5a1',
        pearl: '#f5f1ea'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif']
      },
      boxShadow: {
        luxe: '0 10px 40px rgba(0, 0, 0, 0.45)'
      }
    }
  },
  plugins: []
}
