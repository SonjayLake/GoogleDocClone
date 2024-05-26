/** @type {import('tailwindcss').Config} */
module.exports = {
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
      colors: {
        "toolbar-grey": "#e5e7eb",
      },
      spacing: {
        percent_100: "100%",
        percent_95: "95%",
        percent_90: "90%",
        percent_80: "80%",
        forty_pixels: "40px",
      },
    },
  },
  plugins: [],
};
