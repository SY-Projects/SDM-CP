module.exports = {
  content: ["./components/**/*.{html,js,jsx}", "./pages/**/*.{html,js,jsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "2/3": "66.666667%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
