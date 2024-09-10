/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      Rampart: ["Rampart One", "cursive"],
    Prompt: ["Prompt", "san-serif"],
    'poppins': ['Poppins', 'sans-serif'],
    body: ['Comfortaa']
    }
    
  },
  plugins: [],
}
