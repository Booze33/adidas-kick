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
        'sixth-color': 'linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)',
        'fourth-color': '#fff',
        'fifth-color': '#dde6ed',
      },
      fontFamily: {
        'custom': 'Poppins, sans-serif',
        'custom2': 'Marhey, sans-serif',
      },
      fontSize: {
        'custom': '2rem',
      },
      width: {
        1: '40vw',
        2: '75vw',
        3: '35vw',
        4: '15vw',
        90: '38rem',
        80: '40rem',
        70: '30rem',
        60: '25rem',
        50: '95vw',
        40: '60vw',
      },
      height: {
        1: '40vw',
        2: '22rem',
        3: '25rem',
        72: '18rem',
        71: '15rem',
        70: '16rem',
        69: '85vh',
      },
      padding: {
        10: '8rem',
      },
      margin: {
        5: '1rem',
        10: '6rem',
        20: '55vw',
        30: '13vw',
        40: '18vw',
        50: '-2.5rem',
        60: '-5rem',
        61: '-2.5rem',
        70: '-30rem',
        72: '-18rem',
        75: '-20rem',
        80: '-2rem'
      }
    },
  },
  plugins: [],
}

