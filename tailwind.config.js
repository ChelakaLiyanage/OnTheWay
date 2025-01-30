/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#DFF2EB",
        secondary: "#B9E5E8",
        lightBlue: "#7AB2D3",
        darkBlue: "#4A628A",
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
      fontFamily: {
        jua: ["Jua-Regular", "sans-serif"],
        kiteOne: ["KiteOne-Regular", "sans-serif"],
        montserrat: ["Montserrat-VariableFont_wght", "sans-serif"],
        openSans: ["OpenSans-VariableFont_wdth,wght", "sans-serif"],
        pattaya: ["Pattaya-Regular", "sans-serif"],
        pBlack: ["Poppins-Black", "sans-serif"],
        pMedium: ["Poppins-Medium", "sans-serif"],
        pRegular: ["Poppins-Regular", "sans-serif"],
        pSemiBold: ["Poppins-SemiBold", "sans-serif"],
        proBold: ["ProzaLibre-Bold", "sans-serif"],
        proMediumItalic: ["ProzaLibre-MediumItalic", "sans-serif"],
        proMedium: ["ProzaLibre-Medium", "sans-serif"],
        proRegular: ["ProzaLibre-Regular", "sans-serif"],
        proSemiBold: ["ProzaLibre-SemiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
