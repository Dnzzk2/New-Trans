/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", "[class~='dark']"],
  content: [
    "./src/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "../../components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
