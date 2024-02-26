/** @type {import('tailwindcss').Config} */

module.exports = {
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        love: ["TTLoveliesScript"],
        beloved: ["BelovedTeacher"],
        blogh: ["Blogh"],
        bluespirit: ["BlueSpirits"],
        bluespiritalt: ["BlueSpiritsAlt"],
        bridgeville: ["Bridgeville"],
        brightmelody: ["BrightMelody"],
        gordqucik: ["gordqucikblack"],
        murberry: ["Murberry"],
        sharkbit: ["Sharkbit"],
        starife: ["Starife"],
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("daisyui"),
  ],
  
};
