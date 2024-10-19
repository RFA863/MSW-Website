/** @type {import('tailwindcss').Config} */

import flowbite from "flowbite-react/tailwind";
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {

        moveCard: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },

      },
      animation: {

        moveCard: 'moveCard 10s linear infinite',

      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
