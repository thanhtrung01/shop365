/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    // screens: {
    //   mobile: { min: '350px', max: '600px' },
    //   tablet: { min: '601px', max: '1024px' },
    //   pc: { min: '1024px', max: '3000px' }
    // }
  },
  
  
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin')
  ]
}

