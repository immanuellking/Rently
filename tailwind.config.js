/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        brightBlue: "#2E48DA",
        brightGreen: "#3DDC97",
      },
    },
  },
  plugins: [],
};
