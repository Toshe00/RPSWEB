/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          shrikhand: ["Shrikhand", "cursive"], // Define the font
        },
        screens: {
          "2md": "1050px",
          "3xl" : "1750px" // Custom breakpoint at 1050px
      },
      },
    },
    plugins: [],
  };
  