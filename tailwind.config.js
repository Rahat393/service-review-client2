/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        servicereviewtheme: {
          primary: '#30E3CA',
          secondary: '#11999E',
           
          "base-100": "#FFFFFF",  
        }
      }
    ]
  },
  plugins: [require("daisyui")],
}
