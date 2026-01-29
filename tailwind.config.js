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
        tgBg: "var(--tg-theme-bg-color)",
        tgTxt: "var(--tg-theme-text-color)",
        tgScBg: "var(--tg-theme-secondary-bg-color)",
        tgSecSep: "var(--tg-theme-section-separator-color",
        tgBtn: "var(--tg-theme-button-color)",
        tgBtnTxt: "var(--tg-theme-button-text-color)"
      }
    }
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
}
