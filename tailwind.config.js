/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

 './app/**/*.{js,ts,jsx,tsx,mdx}',
 './pages/**/*.{js,ts,jsx,tsx,mdx}',
 './components/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    extend: {

keyframes: {
        tilt: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        tilt: 'tilt 1s ease-in-out infinite',
      },

    },
  },
  plugins: [],
}

