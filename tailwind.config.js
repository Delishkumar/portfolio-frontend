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
        fire: {
          '0%, 100%': { transform: 'scale(1)', filter: 'brightness(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', filter: 'brightness(1.5)', opacity: '0.8' },
        },
        colorchange: {
          '0%': { color: '#ef4444' },    // red-500
          '25%': { color: '#10b981' },   // green-500
          '50%': { color: '#3b82f6' },   // blue-500
          '75%': { color: '#f59e0b' },   // amber-500
          '100%': { color: '#ef4444' },  // back to red
        },
        blink: {
          '0%, 100%': { Color: 'blue' },
          '50%': {Color: 'red' }, // or your preferred color
        },
        sway: {
          '0%': { transform: 'translateX(0) rotate(0deg)' },
          '25%': { transform: 'translateX(-15px) rotate(-5deg)' },
          '50%': { transform: 'translateX(0) rotate(0deg)' },
          '75%': { transform: 'translateX(15px) rotate(5deg)' },
          '100%': { transform: 'translateX(0) rotate(0deg)' },
        },
       
      },


      animation: {
        typing: 'typing 4s steps(21) infinite alternate',
        blink: 'blink 0.7s step-end infinite',
        typingWithBlink: 'typing 4s steps(21) infinite alternate, blink 0.7s step-end infinite',
        colorchange: 'colorchange 4s linear infinite',
        slowspin: 'spin 8s linear infinite',
        fire: 'fire 0.3s ease-in-out infinite',
        leafsway: 'sway 4s ease-in-out infinite',
        'spin-slow': 'spin 6s linear infinite',

      },
    },
  },
  plugins: [],
}
