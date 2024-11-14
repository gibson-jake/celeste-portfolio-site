/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        tagColor: '#40ACBA',
      },
      keyframes: {
        'heartbeat': {
          "75%": {
            transform: "scale(1.5)",
          },
          "90%": {
            transform: "scale(1)",
            opacity: '0'
          }
        },
        'fadeIn': {
          "0%": {
            opacity: '0',
          },
          "100%": {
            opacity: '1',
          }
        },
        'slideLeft': {
          from: { transform: 'translateX(0)'},
          to: { transform: 'translateX(-50%)'},
        },
      },
      animation: {
        'heartbeat': 'heartbeat 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'fadeIn': 'fadeIn 5s cubic-bezier(0.2, 0, 0.2, 1)',
        'carouselSlide': 'slideLeft 45s linear infinite',
      },
    },
  },
  plugins: [],
};
