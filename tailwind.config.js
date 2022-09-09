/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        container: "calc(100% - 44px",
      },
    },
  },
  plugins: [],
};
