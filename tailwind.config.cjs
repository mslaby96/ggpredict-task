/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ggpredict: {
          200: "#7993a3",
          400: "#1e2335",
          600: "#181c2c",
        },
      },
    },
  },
  plugins: [],
};
