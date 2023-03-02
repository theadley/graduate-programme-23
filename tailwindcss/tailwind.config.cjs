/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        tim: {
          100: "#ff49db",
          200: "#ff7849",
        },
      },
    },
  },
  plugins: [],
};
