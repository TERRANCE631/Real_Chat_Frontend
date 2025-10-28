import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "zentry": ["zentry", "sans-serif"],
        "general": ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "forest",
      "cyberpunk",
      "cupcake",
      "fantasy",
      "wireframe",
      "cmyk",
      "emerald",
      "nord",
      "halloween",
      "night",
      "silk",
      "coffee",
      "winter",
      "light",
      "valentine",
      "lemonade",
      "retro",
      "aqua",
      "dark",
      "lofi",
      "dim",
      "dracula",
      "corporate",
      "bumblebee",
      "business",
      "black",
      "acid",
      "luxury",
      "sunset",
      "garden",
      "autumn",
      "caramellatte",
      "pastel",
      "synthwave",
      "abyss"
    ]
  }
};
