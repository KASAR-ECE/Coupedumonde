/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#58A4B0",
        customBlue2: "#A9BCD0",
        customGrey: "#D8DBE2",
        customGrey2: "#373F51",
        customBlack: "#1B1B1E",
        kasar1: "#7D4FFE",
        kasar2: "#C49FFF",
        kasar3: "#FFD0E6",
        kasar4: "#FF9CB6",
        kasar5: "#F08488",
        win: "#7CFC00",
        draw: "#00BFFF",
        error: "#FF0000",
        valide: "#98FB98",
      },
    },
  },
  plugins: [],
};
