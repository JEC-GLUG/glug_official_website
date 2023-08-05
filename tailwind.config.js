/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#010c4f",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        glugBlue: "#1B9FDC",
        navbarBG: "#060c19",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        
      },
      fontFamily: {
        "display": ["Oswald"],
        "russo": "Russo One",
      },
    },
  },
  plugins: [],
}

