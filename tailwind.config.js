// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0ch' },
          '100%': { width: '21ch' }, // adjust based on text length
        },
        blink: {
          '0%, 100%': { Color: 'blue' },
          '50%': {Color: 'red' }, // or your preferred color
        },
      },
      animation: {
        typing: 'typing 4s steps(21) infinite alternate',
        blink: 'blink 0.7s step-end infinite',
        typingWithBlink: 'typing 4s steps(21) infinite alternate, blink 0.7s step-end infinite',
      },
    },
  },
  plugins: [],
}
