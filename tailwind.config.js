/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      streamer: ["pixeloid", "sans-serif"],
      criteriacf: ["criteriacf", "sans-serif"],
      iceberg: ["Iceberg", "sans-serif"],
    },
    extend: {
      screens: {
        phones: "500px",
        tab: "600px",
        mids: "1000px",
        desktop: "1270px",
      },
      backgroundImage: {
        herobgMini: 'url("/src/assets/heroBgVideo2mini.webm")',
        mobileHeroBg: 'url("/src/assets/mobileHeroBg.svg")',
        contributeBg: 'url("/src/assets/contributeBg.svg")',
        footerBg: 'url("/src/assets/footerBg.svg")',
        gradientBg: 'url("/src/assets/gradientBg.svg")',
      },
    },
  },
  plugins: [],
};
