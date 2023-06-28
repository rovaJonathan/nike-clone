/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '0.5rem',
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}
