/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'back-main-color':'#1A1A1A'
      }
    },
    
  },
  plugins: [],
}

