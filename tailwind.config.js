/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      header: "#3D6666",
      darkGreen: "#00474B",
      activeGreen: "#26C2AE",
      bgGreen: "#C5E4E7;",
      inputGreen: "#F3F9FA",
      grey: "#7F9D9F",
      hoverGreen: "#9FE8DF",
      red: "rgb(200 0 55)",
    },
    letterSpacing: {
      widest: ".5em",
    },
    maxWidth: {
      xs: "9rem",
      xl: "500px",
      lg: "600px",
      xlg: "900px",
      btnxl: "7rem",
    },
  },
  plugins: [],
};
