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
      dropShadow: {
        light: '0 2px 4px rgba(0, 0, 0, 1)',
      },
      boxShadow: {
        'card': '15px 15px 30px rgb(25, 25, 25), -15px -15px 30px rgb(60, 60, 60)',
        'card-sm': '10px 10px 20px rgb(25, 25, 25), -10px -10px 20px rgb(60, 60, 60)',
        'dark-card': '0px 2px 2px 0px rgba(54, 54, 54, 0.5) inset'
      },
      backgroundImage: {
        'countdown': 'linear-gradient(to right, rgb(20, 30, 48), rgb(36, 59, 85))',
        'votecount': 'linear-gradient(rgb(85, 217, 198) 0%, rgb(181, 217, 130) 100%)',
        'button': 'linear-gradient(to right, rgb(85, 217, 198) 0%, rgb(181, 217, 130) 100%)',
        'button-hover': 'linear-gradient(to right, rgb(23, 23, 23) 0%, rgb(23, 23, 23) 100%)',
        'dark-card': 'linear-gradient(246deg, rgb(23, 23, 23) 0%, rgb(23, 23, 23) 100%)',
      }
    },
  },
  plugins: [],
}

