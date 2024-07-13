/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'back-main-color':'#7E2553'
      },
     
    },
  
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: ["light"],
  },
 

}

