import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-main-section":
          "linear-gradient(0deg, #D3A17E -21.17%, rgba(211, 161, 126, 0.00) 115.88%)",
        "gradient-new-collection":
          "linear-gradient(0deg, rgba(211, 161, 126, 0.40) -21.17%, rgba(211, 161, 126, 0.00) 115.88%)",
      },
      colors: {
        "black-900": "#000",
        "black-800": "#34251F",
        "black-200": "#D0D0D0",

        "black-100": "rgba(0, 0, 0, 0.39)",
        "black-0": "#FBFBFB",

        "people-say-card-bg": "rgba(219, 204, 191, 0.50)",
        "footer-bg": "#412F28",
        "deal-of-the-day-bg": "#8B6E5A",
        "root-bg": "#F9F9F9",
        "best-seller-product-bg": "#2C1915",
        "main-section-bg": "#EDC",
      },
      fontFamily: {
        main: "Frank Ruhl Libre",
        secondary: "Lato",
      },
    },
    container: {
      padding: {
        DEFAULT: "0",
        lg: "3rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
