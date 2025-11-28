/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
   keyframes: {
    shine: {
      "0%": { transform: "translateX(-100%) skewX(-12deg)" },
      "100%": { transform: "translateX(200%) skewX(-12deg)" },
    },
  },
  animation: {
    shine: "shine 0.9s linear",
  },
      fontFamily: {
        poppin: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#218AB6',
        secondary: '#2B3546',
      
      },
    },
  },
 plugins: [
      
  ],
};
