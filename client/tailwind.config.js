/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        mirage: "#181A20",
        smokeyGrey: "#717171",
        whiteLilac: "#F7F7F7",
        sunriseOrange: "#EB6753",
        dark: "#2B2B2B",
        grey: "#989898",
        slate: "#BEBDBD"
      }
    },
  },
  plugins: [],
}
