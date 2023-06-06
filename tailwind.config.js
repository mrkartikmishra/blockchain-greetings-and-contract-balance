/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#27374D",
        secondary: "#526D82",
        tertiary: "#9DB2BF",
        gray: "#DDE6ED",
        white: "#fff",
        black: "#282A3A",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
