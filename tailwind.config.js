/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      // fontFamily: {
      //   'poppins': ['Poppins', 'sans-serif'],
      // },
      backgroundImage: {
        'veggiebg' : "url('../assets/img/get-start.png')",
      },
      container: {
        padding: '8rem'
      },
    },
  },
  plugins: [],
}
