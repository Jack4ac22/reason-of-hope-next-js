/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      colors: {
        lightShade: "#F8F6F6",
        lightAccent: "#AFB7C5",
        mainBrand: "#645D64",
        darkAccent: "#8993BB",
        darkShade: "#222541",
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
      transitionDuration: {
        2000: "2000ms",
      },
      animation: {
        "spin-slow": "spin 3s linar infinite",
        wigle: "wigle 1s ease-in-out infinite",
      },
      keyframes: {
        wigle: {
          "0%,100%": { transform: "rotate(0deg)", opacity: 1, scale: 1 },
          "50%": { transform: "rotate(180deg)", opacity: 0.8, scale: 1.1 },
        },
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
