/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./atoms/**/*vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: { spacing: {
        1: "8px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
        8: "64px",
      },
      fontFamily: {
        Josefin: ["Josefin", "Sans-serif"],
      },
      colors: {
        white: "#FFFFFF",
        clearBlue: "#01FFFF",
        darkBlue: "#111726",
        seaBlue: "#0A1737",
        transpSeaBlue: "#0A173780",
        transpDarkBlue: "#11172680",
        lightGrey: "#FFFFFF80"
      },
      },
  },
  plugins: [],
}

