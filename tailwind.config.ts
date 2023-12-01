import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        blob: "blob 10s infinite ease-in-out",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1) rotate(0deg)",
          },
          "25%": {
            transform: "translate(30px, -50px) scale(1.1) rotate(90deg)",
          },
          "50%": {
            transform: "translate(-20px, 20px) scale(0.9) rotate(180deg)",
          },
          "75%": {
            transform: "translate(0px, 0px) scale(1) rotate(270deg)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1) rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
