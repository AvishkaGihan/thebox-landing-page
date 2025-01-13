/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#2947a9",
        secondary: "#F9995D",
        "accent-blue": "#3559C7",
        neutral: {
          100: "#E0E3EB",
          400: "#858EAD",
          700: "#3D445C",
          800: "#292E3D",
          900: "#14171F",
        },
      },
    },
  },
  plugins: [],
};
