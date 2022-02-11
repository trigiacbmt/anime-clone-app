module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        anime_gray: {
          DEFAULT: "#282828"
        },
        dropdown_gray: {
          DEFAULT: "rgba(25, 25, 25, 0.9)"
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
