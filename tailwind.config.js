/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderColor: {
        based: "#bababa",
        v_purple: "#7d41ff",
        b_purple: "#4a249d",
      },
    },
  },
  plugins: [],
};
