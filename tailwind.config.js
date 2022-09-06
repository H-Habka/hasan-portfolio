/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        //green
        // one : '#243119',
        // two : '#629460',
        // three: '#96BE8C',
        // four : '#ACECA1',
        // five : '#C9F2C7',

        //blue
        one: "#342328",
        two: "#746a77",
        three: "#9FA4A9",
        four: "#AFBFC0",
        five: "#C2D3CD",
      },
      zIndex: {
        1: "1",
      },
      borderRadius: {
        "1/2": "50%",
      },
    },
  },
  plugins: [],
};

// one : '#2C2A4A',
// two : '#4F518C',
// three: '#907AD6',
// four : '#7FDEFF',
// five : '#DABFFF'
