/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    screens: {
      sm: "369px",

      md: "429px",

      lg: "819px",

      xl: "1220px",

      "2xl": "1320px",
    },
    extend: {
      fontFamily: {
        Jost: ["Jost, sans-serif"],
        Lexend: ['"Lexend Deca", sans-serif'],
        Inter: ['"Inter", sans-serif'],
      },
      colors: {
        primary: "#12103e",
        second: "#ff6d5a",
        third: "#342ead",
        fourth: "#767682",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
