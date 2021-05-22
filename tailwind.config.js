module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "within-screen": "calc(100vh - 74px)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
