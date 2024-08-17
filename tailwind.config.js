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
        lightShade: {
          100: "#fefefe",
          200: "#fdfcfc",
          300: "#fcfbfb",
          400: "#fbf9f9",
          500: "#faf8f8",
          600: "#c8c6c6",
          700: "#969595",
          800: "#646363",
          900: "#323232",
        },
        lightAccent: {
          100: "#ebf2f7",
          200: "#d7e5ee",
          300: "#c4d8e6",
          400: "#b0cbdd",
          500: "#9cbed5",
          600: "#7d98aa",
          700: "#5e7280",
          800: "#3e4c55",
          900: "#1f262b",
        },
        mainBrand: {
          100: "#f4d4cc",
          200: "#e8a999",
          300: "#dd7e66",
          400: "#d15333",
          500: "#c62800",
          600: "#9e2000",
          700: "#771800",
          800: "#4f1000",
          900: "#280800",
        },
        darkAccent: {
          100: "#d0dde9",
          200: "#a1bad3",
          300: "#7198bd",
          400: "#4275a7",
          500: "#135391",
          600: "#0f4274",
          700: "#0b3257",
          800: "#08213a",
          900: "#04111d",
        },
        darkShade: {
          100: "#f4e9d2",
          200: "#e9d2a5",
          300: "#debc79",
          400: "#d3a54c",
          500: "#c88f1f",
          600: "#a07219",
          700: "#785613",
          800: "#50390c",
          900: "#281d06",
        },
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
        slideDownAndAppear: "slideDownAndAppear 1s ease-in-out",
        slideDown: "slideDown 1s ease-in-out",
        slideUpAndAppear: "slideUpAndAppear 1s ease-in-out",
        slideUp: "slideUp 1s ease-in-out",
        appearAndWiggle:
          "wigle 1s ease-in-out, slideDownAndAppear 1s ease-in-out",
      },
      keyframes: {
        wigle: {
          "0%,100%": { transform: "rotate(0deg)", opacity: 1, scale: 1 },
          "50%": { transform: "rotate(180deg)", opacity: 0.8, scale: 1.1 },
        },
        slideDownAndAppear: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideUpAndAppear: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      aspectRatio: {
        "16/9": "16 / 9",
      },
      transitionDelay: {
        2000: "2000ms",
        3000: "3000ms",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
