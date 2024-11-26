/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '320px',
      // => @media (min-width: 320px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: "#4D869C",
        secondary: "#7AB2B2",
        based: "#EEF7FF",
        softblue: "#CDE8E5",
        bluesoft: "#EAF5FE",
        birufoter : "#A6CFE0",

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
  plugins: [require("daisyui")],
}

