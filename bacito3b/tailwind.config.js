/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4D869C",
        secondary: "#7AB2B2",
        based: "#EEF7FF",
        softblue: "#CDE8E5",

        latar0: "#A6CFE0",
        latar1: "#EAF5FE",
        input: "#CDE8E5",
        font_putih: "#FFFFFF",
        font_gelap: "#3A4A51",
        button: "#7AB2B2",
        icon: "#4D869C",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        kaisei: ["Kaisei Decol", "cursive"],
      },
      container: {
        padding: {
          center:true,
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
}

