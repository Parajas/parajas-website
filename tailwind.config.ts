import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
				sans: "Montserrat, sans-serif",
			},

      colors: {
        gray: {
          900: '#121214',
          800: '#202024',
          400: '#7c7c8a',
          200: '#c4c4cc',
          100: '#e1e1e6',
        },

        black: {
          900: "#000",
          800: "#464646",
          700: "#A3A3A3",
          400: "#ECECEC",
          100: "#F6F6F6",
        },
      }
    },
  },
  plugins: [],
} satisfies Config;
