/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Habilitar dark mode con clase
  theme: {
    extend: {
      colors: {
        // Colores personalizados para el dashboard
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        dark: {
          bg: '#0f172a',
          card: '#1e293b',
          border: '#334155',
        }
      }
    },
  },
  plugins: [],
}