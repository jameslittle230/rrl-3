module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      backgroundImage: ["active", "hover"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
