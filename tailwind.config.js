/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    colors: {
      OrangeBG: "#FF8200",
      GreenTitleBG: "#15E635",
      TextColor: "#FFFFFF",
      BtnColor: "#424242",
      BtnColorHover: "#353535",
    },
    dropShadow: {
      outline: "0 1.2px 1.2px rgba(0,0,0,1)",
      contH1: "0 5px 0 rgba(0,0,0,0.4)",
    },
  },
  plugins: [],
};
