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
        hero: "url(../Assets/HeroBg.svg)",
        BG: 'url(../Assets/bg.svg)',
      },
      screens: {
        'xs': '450px',
      }
    },
  },
  plugins: [],
};
