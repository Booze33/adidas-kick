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
        'fourth-color': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 47%, rgba(0,212,255,1) 100%)',
      },
      fontFamily: {
        'custom': 'Poppins, sans-serif',
        'custom2': 'Marhey, sans-serif',
      }
    },
  },
  plugins: [],
}

