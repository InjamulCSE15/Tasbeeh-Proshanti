import { type Config } from "tailwindcss";
import daisyui from "npm:daisyui";

export default {
  darkMode: "class", // Crucial for manual toggling
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  plugins: [daisyui], 
  theme: {
    extend: {
      fontFamily: {
        // This creates classes like 'font-english', 'font-bengali', and 'font-arabic'
        english: ["Inter", "sans-serif"],
        bengali: ["'Hind Siliguri'", "sans-serif"],
        arabic: ["Amiri", "serif"],
      },
    },
  },
} satisfies Config;