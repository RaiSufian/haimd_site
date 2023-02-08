/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        themeColor: "#FF8E5E",
        bg1: "#1669B4",
        bg2: "#67F5B1",
        bg3: "#FD97CE",
      },
    },
  },
  plugins: [],
};
