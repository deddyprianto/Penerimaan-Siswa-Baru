module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        400: "400px",
      },
      gridTemplateRows: {
        8: "70px 1fr 70px",
      },
      gridTemplateColumns: {
        13: "100px 1fr 2fr",
        14: "270px 1fr",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "translateX(-40%)" },
          "100%": { transform: "translateX(40%)" },
        },
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
