/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#DDBEA8",
        secondary: "#160F29",
        dark: "#41375D",
        mid: "#65A6A3",
        light: "#DFEAEA",
        lightest: "#FFFFFF",
      },
      textColor: {
        primary: "#DDBEA8",
        secondary: "#160F29",
        dark: "#41375D",
        mid: "#65A6A3",
        light: "#DFEAEA",
        lightest: "#FFFFFF",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      lato: ["Lato", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
