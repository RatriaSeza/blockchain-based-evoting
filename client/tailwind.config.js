/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        'card': '15px 15px 30px rgb(25, 25, 25), -15px -15px 30px rgb(60, 60, 60)',
        'card-sm': '10px 10px 20px rgb(25, 25, 25), -10px -10px 20px rgb(60, 60, 60)',
        'countdown': 'rgb(0,0,0,0.7) 5px 10px 50px ,rgb(0,0,0,0.7) -5px 0px 250px',
      },
      backgroundImage: {
        'countdown': 'linear-gradient(to right, rgb(20, 30, 48), rgb(36, 59, 85))'
      }
    },
  },
  plugins: [],
}

