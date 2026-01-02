/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // We can extend colors here if needed, but we are using 
      // standard Tailwind colors (Slate, Emerald, Blue) for reliability.
    },
  },
  plugins: [],
}