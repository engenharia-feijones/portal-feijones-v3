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
      },

      fontFamily: {
        roboto: ['Roboto Slab', 'sans-serif'],
        arvo: ['Arvo', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
