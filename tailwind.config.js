module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#DFA343",
        primary_intense: "#BF7316",
        primary_dark: "#C16108",
        secundary: "#78562D",
        secundary_intense: "#6B3A0B",
        neutral: "#37210C",
        neutral_intense: "#593100",
        neutral_dark: "#000000",
        cupom_primary: "#E48F2B",
        cupom_background: "#ECC8B0",
        cupom_brow: "#341900",
      },

      fontFamily: {
        roboto: ["Roboto Slab", "sans-serif"],
        arvo: ["Arvo", "sans-serif"],
        glocuester: ["Gloucester", "Arvo"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
