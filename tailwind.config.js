const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
        black: colors.black,
      },
    },
  },
  plugins: [],
};
