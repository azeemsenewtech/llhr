/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
