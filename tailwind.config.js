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
        'fifth-color': '#ff5403',
      },
      fontFamily: {
        'custom': 'Poppins, sans-serif',
        'custom2': 'Marhey, sans-serif',
      },
      width: {
        1: '20rem',
        80: '34rem',
        70: '30rem',
        60: '25rem',
        50: '95vw'
      },
      height: {
        1: '20rem',
        71: '15rem',
        70: '12rem'
      },
      margin: {
        50: '-2.5rem',
        60: '-5rem',
        70: '-16rem'
      }
    },
  },
  plugins: [],
}

