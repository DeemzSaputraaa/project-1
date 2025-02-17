/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Bricolage Grotesque Variable",
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        textJudul: "#3D5A80",
        grey1: "#DEE2E6",
        white: "#fff",
        dark: "#000000",
        blueJDN: "#339cd1",
        primaryColor: "rgb(99, 102, 241)",
        secondaryColor: "rgb(161, 163, 247)",
        primaryText: "rgb(255,255,255)",
        secondaryText: "rgb(174, 178, 183)",
        bgDark1: "rgb(31, 32, 35)",
        bgDark2: "rgb(38, 39, 43)",
        bgDark3: "rgb(48, 49, 54)",
        bgDark3Hover: "#5C677D",
        bgDarkTransparent: "rgb(31, 32, 35, 0.7)",
        bgDarkTransparentDarker: "rgb(0,0,0,0.5)",
        bgDarkTransparentLighter: "rgb(48, 49, 54, 0.7)",
        mainBorder: "rgb(255,255,255,0.15)",
        mainBorderDarker: "rgb(255,255,255,0.07)",
        quoteIconColor: "rgb(178, 184, 205)",
        bgContent: "#58A4B0",
        bgContent2: "#2B303A",
        // backgroundImage: "../assets/images/gedung.jpg",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
