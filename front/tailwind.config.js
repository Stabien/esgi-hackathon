/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          blue: {
            50: '#85B7FF',
            100: '#355070',
          },
          pink: {
            50: '#FF9882',
            100: '#F09385'
          },
          pale_pink: '#FFEDEC',
          pale_blue: '#EDF4FF',
          dark_blue: '#00224B',
          pale_yellow: '#FFF8ED',
          grey: '#5D738D',
          pale_purple: '#E6E6F5',
      }
    },
  },
  plugins: [],
};
