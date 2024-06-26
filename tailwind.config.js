/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clashSemibold: ["clash-semibold", "sans-serif"],
        geistSemibold: ["geist-semibold", "sans-serif"],
        geist: ["geist", "sans-serif"],
        geistLight: ["geist-light", "sans-serif"],
      },
      colors: {
        secondary: "#021927",
        primary: "#D55707",
      },
    },
  },
  plugins: [],
};
