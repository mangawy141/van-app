/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-color-main": "#ffffff",
        "text-color-secondary": "#161616",
        "text-color-third": "#000000",
        "body-bg-color": "#fff7ed",
        "box-bg-color": "#ffffff",
        "link-text-color-light": "#4d4d4d",
        "nav-text-color": "#1c1c1c",
        "nav-secondary-text-color": "#4d4d4d",
        "link-text-color-heavy": "#201f1d",
        "footer-bg-color": "#252525",
        "footer-text-color": "#aaaaaa",
        "rectangle-bg-color-light-brown": "#ffcc8d",
        "rectangle-bg-color-brown-lighter": "#ffead0",
        "rectangle-bg-color-medium-brown": "#ffddb2",
        "btn-bg-color": "#ff8c38",
        "btn-luxury-bg-color": "#161616",
        "btn-simple-bg-color": "#e17654",
        "btn-rugged-bg-color": "#115e59",
        "btn-filter-bg-color": "#ffead0",
        "btn-text-color": "#ffffff",
        "btn-text-color-secondary": "#ffead0",
      },
    },
  },
  plugins: [],
};
