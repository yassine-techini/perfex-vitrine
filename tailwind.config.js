/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'perfex': {
          'bg': '#F5F5F0',
          'black': '#1a1a1a',
          'red': '#FF3D00',
          'green': '#00E676',
          'blue': '#2979FF',
          'orange': '#FF9100',
          'purple': '#D500F9',
          'teal': '#00BFA5',
        }
      },
      fontFamily: {
        'display': ['"Bebas Neue"', 'sans-serif'],
        'body': ['"DM Sans"', 'sans-serif'],
        'mono': ['"Space Mono"', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 20s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
