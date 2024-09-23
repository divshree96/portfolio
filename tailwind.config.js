/** @type {import('tailwindcss').Config} */

export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      "primary": "#53656a",
      "secondary": "#9A7AF1",
      "tartiary": "#707070",
      "pink": "#EE9AE5"
    },
    boxShadow: {
      "3xl": "0px 10px 50px 0px rgba(0, 0, 0, 0.15)",
    },
    animation: {
      slide: 'slide 15s infinite linear',
      slideReverse: 'slideReverse 15s infinite linear',
    },
    keyframes: {
      slide: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      slideReverse: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0)' },
      }
    }
  },
};
export const variants = {};
export const plugins = [];
