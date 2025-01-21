/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      green: "hsla(103, 11%, 45%, 1)",
      "quick-silver": "hsla(0, 0%, 65%, 1)",
      "davys-grey": "hsl(36, 3%, 34%)",
      "smoky-black-1": "hsla(40, 12%, 5%, 1)",
      "smoky-black-2": "hsla(30, 8%, 5%, 1)",
      "smoky-black-3": "hsla(0, 3%, 7%, 1)",
      "eerie-black-1": "hsla(210, 4%, 9%, 1)",
      "eerie-black-2": "hsla(210, 4%, 11%, 1)",
      "eerie-black-3": "hsla(180, 2%, 8%, 1)",
      "eerie-black-4": "hsla(0, 0%, 13%, 1)",
      white: " #fffdf1",
      "white-alpha-80": "hsla(0, 0%, 100%, 0.8)",
      "white-alpha-20": "hsla(0, 0%, 100%, 0.2)",
      "white-alpha-10": " hsla(0, 0%, 100%, 0.1)",
      black: " hsla(0, 0%, 0%, 1)",
      "black-alpha-80": " hsla(0, 0%, 0%, 0.8)",
      "black-alpha-15": " hsla(0, 0%, 0%, 0.15)",
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
    },
    extend: {
      content: {
        "subtitle-icon": "url('/images/separator.svg')",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      backgroundImage: {
        "product-sections":
          "linear-gradient(hsla(0, 0%, 13%, .7), hsla(0, 0%, 13%, .9)),url('/images/pic-main-new.webp')",
      },
      dropShadow: {
        image: "0 35px 35px rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
};
