/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'source-code-pro': ['Source Code Pro', 'Inter', 'sans-serif']
      },
      boxShadow: {
        'sharp-xl':[
          '0 0 0 1px rgba(0, 0, 0, 1)', // Black border
          '11px 11px 0 0 rgba(57, 57, 57, 1)' // Existing shadow
        ],
        'sharp-lg':[
          '0 0 0 1px rgba(0, 0, 0, 1)', // Black border
          '9px 9px 0 0 rgba(57, 57, 57, 1)' // Existing shadow
        ],
        'sharp-md':[
          '0 0 0 1px rgba(0, 0, 0, 1)', // Black border
          '6px 6px 0 0 rgba(57, 57, 57, 1)' 
        ],
        'sharp-sm': [
          '0 0 0 1px rgba(0, 0, 0, 1)', // Black border
          '4px 4px 0 0 rgba(57, 57, 57, 1)' // Existing shadow
        ],
        'sharp': [
          '0 0 0 1px rgba(0, 0, 0, 1)', // Black border
          '7px 7px 0 0 rgba(57, 57, 57, 1)' // Existing shadow
        ],
        
      },
      colors: {
        'custom-gray': '#f9f9f9',
        'quest-gray1': '#D9D9D9',
        'quest-gray2': '#393939',
        'quest-gray3': '#8C8C8C',
        'quest-gray4': '#757575'
      },
    },
  },
  plugins: [],
}