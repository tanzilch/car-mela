/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Make sure you include the file extensions used in your project
  ],
  theme: {
    container: {
      "max-width": "1920px",
      center: true,
      padding: {
        DEFAULT: "1rem", // Default padding for all breakpoints
        // sm: "2rem", // Padding for sm screens and up
        // md: "3rem", // Padding for md screens and up
        // lg: "3rem", // Padding for lg screens and up
        // xl: "3rem", // Padding for xl screens and up
      },
    },

    extend: {
      colors: {
        btnColor: "#ED1C25",
        cardBg: "#F3F4F6",
        footerBg: "#111827",
      },
      backgroundImage: {
        headerBg: "url('/assets/images/heroBg.svg')",
        aboutBg: "url('/assets/images/AboutBg.png')",
        // buttonPlay: "url('/assets/icons/playIcon.png')",
      },
    },
    fontFamily: {
      Roboto: ["Roboto", "sans"],
      Courgette: ["Courgette", "verdana"],
      fontFamily: {
        sans: ['Anek Bangla', 'sans-serif'], // Add Anek Bangla as default sans font
        bangla: ["Anek Bangla", "sans-serif"], // Optional custom font class
      },
    },
  },
  plugins: [],
};
