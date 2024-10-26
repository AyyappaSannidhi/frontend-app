/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize:{
        'xxs': '0.625rem',
      }
    },
    screens: {
      lg: "1024px", // Custom breakpoint for larger screens
    },
  },
  plugins: [],
};