/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        container: "calc(100% - 44px",
      },
    },
    screens: {
      small: "768px",
      tablet: "850px",
      middle: "800px",
      desktop: "1024px",
    },
  },
  plugins: [],
};
