/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customWhite: "#fff",
        banner: "#2c2c2c",
        darkText: "#646464",
        artBg: "#393939",
        subBg: "#2e2e2e",
      },
      spacing: {
        "0.4rem": "0.4rem",
        1: "1rem",
        2: "2rem",
        3: "3rem",
        5: "5rem",
        10: "10rem",
        16: "16rem",
      },
      fontSize: {
        "0.9rem": "0.9rem",
        "1.2rem": "1.2rem",
        "2rem": "2rem",
        "3rem": "3rem",
        xs: "3rem",
        "4rem": "4rem",
      },
      backgroundImage: {
        "banner-bg": "url('/images/web-banner.jpg')",
      },
      fontFamily: {
        font: "font-family: 'Poppins', sans-serif;",
      },
      boxShadow: {
        box: "3px 24px 21px -17px rgba(0, 0, 0, 0.75)",
      },
      gridTemplateColumns: {
        card : "repeat(auto-fit, minmax(210px, 1fr))"
      }
    },
  },
  plugins: [],
};
