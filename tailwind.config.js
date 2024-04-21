/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin'
import animations from '@midudev/tailwind-animations'
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  
  theme: {
    extend: {}
  },
  
  plugins: [flowbite,animations],
}


