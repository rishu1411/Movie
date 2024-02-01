/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
