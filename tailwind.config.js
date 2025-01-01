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
        'custom2': '5px 5px 45px 0px #9B9B9B40',
        'custom3': '4.05px 4.05px 12.14px 0px rgba(0, 0, 0, 0.25)',
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