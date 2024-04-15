/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
    },
    extend: {
      fontFamily:{
        sans:['Josefin Sans','san-serif'],
        alata:['Alata','san-serif']
      }
    },
    letterSpacing:{
      widest:'0.3em'
    }
  },
  plugins: [],
}

