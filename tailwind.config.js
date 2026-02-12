/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "20px",
      screens: {
        sm: "480px",
        md: "480px",
        lg: "480px",
        xl: "480px",
        "2xl": "480px",
      },
    },
    extend: {
      colors: {
        bg: "#1E1E1E",
        txt: "#FDFDFD",
        secondBg: "#101012",
        buttonTxt: "#FEFBFE",
        redBleed: "#F26666",
        red: "#DA3542",
      }
    }
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
}
