/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('../images/pattern-bg.svg')",
        "pattern-down": "url('../images/pattern-curve.svg')",
      },
      colors: {
        Dark_Blue: "hsl(240, 38%, 20%)",
        Grayish_Blue: "hsl(240, 18%, 77%)",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
