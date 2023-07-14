/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/*.html"],
  theme: {
    screens: {
      // => 0 ===> 640px All phone size including

      sm: "640px",
      // 640px ===> 768px Ipad Mini, Bigger Phone, etc

      md: "768px",
      // 768px ===> 1024px Ipad

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // 1280px ===> 1536px Macbook air, Laptops

      "2xl": "1536px",
      // desktop monitors
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primaryColor: "#242d52",
        secondaryColor: "#f25f3a",
      },
    },
  },
  plugins: [],
};
