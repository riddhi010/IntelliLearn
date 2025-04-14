/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0E0F10",  // Dark background
        secondary: "#D6B07D", // Gold accent
        light: "#E3E4E6", // Light gray text
      },
    },
  },
  plugins: [],
};
