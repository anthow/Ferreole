module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
                "cociter": "url('https://res.cloudinary.com/liono/image/upload/v1647268427/pexels-pixabay-414837_qthgdi.jpg')",       
      },
      colors: {
        'primary-color': '#666666',
        'secondary-color': '#4D4D4D',
        'tertiary-color':'#333333',
        'quaternary-color':'#CCCCCC',
        'quinary-color':'#333333',

      },
      minHeight: {
        '9/10': '90vh',
      }
      
    },
  },
  plugins: [],
}