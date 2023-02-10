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
      keyframes: {
        wave: {
          "0%": { transform: "rotate(3deg)" },
          "50%": { transform: "rotate(-3deg)" },
          "100%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
      },
      backgroundImage: {
        contact: "url('../public/img/contact.jpg')",
      },
    },
  },
  plugins: [],
};
