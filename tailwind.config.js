module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        ultgray: "#939597",
        illumi: "#F5DF4D",
      },
      screens: {
        pic: "1145px",
      },
    },
  },
  variants: {
    extend: {
      textDecoration: ["hover"],
      margin: ["hover"],
      transform: ["hover"],
    },
  },
  plugins: [],
};
