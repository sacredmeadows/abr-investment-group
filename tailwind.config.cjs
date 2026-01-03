/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f7f7f5",
          100: "#efefe9",
          200: "#e2e1d8",
          300: "#c8c6b9",
          400: "#9a9788",
          500: "#6f6c60",
          600: "#4e4c43",
          700: "#3b3932",
          800: "#26251f",
          900: "#161512"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
        hairline: "0 0 0 1px rgba(0,0,0,0.08)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};