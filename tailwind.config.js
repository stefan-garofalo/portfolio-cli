/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: '#abb2bf',
        dark: '#282c34',
        red: '#e06c75',
        yellow: '#e5c07b',
        green: '#98c379',
        turquoise: '#56b6c2',
        blue: '#61afef',
        purple: '#c678dd',
      }
    },
  },
  plugins: [],
}
