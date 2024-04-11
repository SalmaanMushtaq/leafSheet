/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        basic: "#ff9559",
        background: "rgb(44,44,44)",
        btnBackground: "rgb(7,7,7)",
        formTextColor: "#5F5F5F",
      },
    },
  },
  plugins: [],
};
