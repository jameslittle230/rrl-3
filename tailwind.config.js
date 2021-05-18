module.exports = {
  mode: 'jit',
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: 'class', // or 'media' or 'class'
  plugins: [require("@tailwindcss/typography")],
};
