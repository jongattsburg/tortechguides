/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
import withMT from "@material-tailwind/react/utils/withMT";
// it's only "relative" for navbar icon & and colors missing because must use withMT in config file AND extend colors w/default ...colors from tailwindcss/colors

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "var(--secondary)",
      },
    },
  },
  plugins: [],
});
