/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    fontFamily: {
      readex: ["Readex Pro"],
      unbounded : ['Unbounded', 'cursive']
    },
    extend: {
      colors: {
       taupe : "#b2a59f",
       spaceblue : "#023459",
       caribbean : "#1e646e",
       peacock : "#002c2f",
      }
    },
  },
  plugins: [],
}
