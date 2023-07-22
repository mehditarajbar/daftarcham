/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"

  ],
  theme: {
    extend: {
      keyframes:{
          'fade-in-down':{
              "from":{
                transform:"translateY(-0.75rem)",
                opacity:'0'
              },
              "to":{
                transform:"translateY(0rem)",
                opacity:'1'
              },
          },
          'fade-out-top':{
            "from":{
              transform:"translateY(0rem)",
              opacity:'1'
            },
            "to":{
              transform:"translateY(-0.75rem)",
              opacity:'0'
            },
          },
      },
      animation:{
        'fade-in-down':"fade-in-down 0.2s ease-in-out both"
      },
    },
  },
  darkMode: "class",
  plugins: [
    require('@tailwindcss/forms'),
    require("tw-elements/dist/plugin.cjs")
  ],
}

