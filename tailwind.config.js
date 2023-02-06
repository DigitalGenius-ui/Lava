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
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
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
        "0.9rem" : "0.9rem",
        "1.2rem": "1.2rem",
        "2rem": "2rem",
        "3rem": "3rem",
        xs: "3rem",
        "4rem": "4rem",
      },
      backgroundImage: {
        "banner-bg": "url('/images/web-banner.jpg')",
        "poster-1":
          "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7)),url('https://static.euronews.com/articles/stories/06/35/29/74/1440x810_cmsv2_aeacd0c1-3106-54ce-b1ba-04cb723194f8-6352974.jpg')",
        "poster-2":
          "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7)),url('https://www.ncl.com/sites/default/files/TravelBlog.Beach5_V2.jpg')",
        "poster-3":
          "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7)),url('https://nationaltoday.com/wp-content/uploads/2020/08/National-Beach-Day.jpg')",
      },
      fontFamily: {
        font: "font-family: 'Poppins', sans-serif;",
      },
    },
  },
  plugins: [],
};
