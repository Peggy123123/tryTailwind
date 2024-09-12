/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#f5f5f5",
          200: "#e4e3e1",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};
