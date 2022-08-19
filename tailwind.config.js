/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-dark": "#e03051",
        "main-mid": "#e0307b",
        "main-mid-1": "#e554ad",
        "main-light": "#e3a8cc",
      },
      fontFamily: {
        muthiara: ["MUTHIARA", "cursive"],
        poppins: ["POPPINS", "cursive"],
        poppinsLight: ["POPPINS-LIGHT", "cursive"],
        poppinsSemiBold: ["POPPINS-SEMI-BOLD", "cursive"],
      },
    },
  },
  plugins: [],
};
/*
e03051 darkest
e0307b
e554ad
e3a8cc lightest
*/
