/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      backgroundImage: {
        hero: "linear-gradient(30.29deg, #020206 9.9%, #2A2A3D 65.36%, #020206 111.76%);",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};
