/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './main.jsx'],
  content: [],
  theme: {
    extend: {
      backgroundColor: {
        'custom-color': '#2f3651',
        'second-color': '#24293e',
        'third-color': '#8ebbff',
      },
      fontFamily: {
        'custom': 'Poppins, sans-serif',
      }
    },
  },
  plugins: [],
}

