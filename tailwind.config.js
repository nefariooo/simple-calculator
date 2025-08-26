module.exports = {
  content: [
    "./src/**/*.{html,js}",   // all HTML + JS inside src
    "./scripts/**/*.{js}"     // your script.js file
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
