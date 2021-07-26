module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "within-screen": "calc(100vh - 74px)",
      },
      maxWidth: {
        1048: "1048px",
      },
      boxShadow: {
        border: "inset 0 -1px #eaeaea;",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
