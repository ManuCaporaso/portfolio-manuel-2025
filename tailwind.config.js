/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/layouts/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],

  // DaisyUI Configuración de temas
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
        },
      },
    ],
    darkTheme: "dark",
  },
}
