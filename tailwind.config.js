/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 4px 25px 0px #00000040',
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(131.54deg, #ADD9E8 15.8%, #D8D8D8 86.6%)',
      },
    },
  },
  plugins: [],
}