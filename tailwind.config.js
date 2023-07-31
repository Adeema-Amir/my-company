/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      height:{
        "497px":"497px",
        "705px":"705px",
      },
      width:{
        "431px":"431px",
        "364px":"364px",
        "76.666667%":"76.666667%",
      },
      margin:{
        "-6px":"-6px",
        "10px":"10px",
        "3px":"3px",
        "21px":"21px",
        "16px":"16px",
        "12px":"12px",
        "4px":"4px",
        "19px":"19px",
        "40px":"40px",
        "195px":"195px",
        "1.25":"1.25",
      },
      left:{
        "133px":"133px",
        "118px":"118px",
      },
      right:{
        "-13px":"-13px",
        "-14px":"-14px",
      },
    },
  },
  plugins: [],
}
