/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "10px",
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
        tgBg: "var(--tg-theme-bg-color)",
        tgTxt: "var(--the-theme-text-color)"
      }
    }
  },
  plugins: [],
}
