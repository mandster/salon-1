/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D2042D',
        linen: '#F0ECE2',
        textDark: '#1C1C1E',
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
