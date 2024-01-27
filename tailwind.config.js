/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        theme1bg: "hsl(222, 26%, 31%)",
        theme1Keypadbg: "hsl(223, 31%, 20%)",
        theme1Screenbg: "hsl(224, 36%, 15%)",
        theme1Delbg: "hsl(225, 21%, 49%)",
        theme1KeyShadow: "hsl(224, 28%, 35%)",
        theme1ToggleKeybg: "hsl(6, 63%, 50%)",
        theme1ToggleKeybgHover: "hsla(6, 80%, 68%, 1)",
        theme1ToggleShadow: "hsl(6, 70%, 34%)",
        theme1ButtonKeybg: "hsl(30, 25%, 89%)",
        theme1ResetShadow: "hsl(28, 16%, 65%)",
        theme1Text: "hsl(221, 14%, 31%)",
        //okey
        theme2bg: "hsl(0, 0%, 90%)",
        theme2Keypadbg: "hsl(0, 5%, 81%)",
        theme2Screenbg: "hsl(0, 0%, 93%)",
        theme2Delbg: "hsl(185, 42%, 37%)",
        theme2KeyShadow: "hsl(185, 58%, 25%)",
        theme2ToggleKeybg: "hsl(25, 98%, 40%)",
        theme2ToggleShadow: "hsl(25, 99%, 27%)",
        theme2ButtonKeybg: "hsl(45, 7%, 89%)",
        theme2ResetShadow: "hsl(35, 11%, 61%)",
        theme2Text: "hsl(60, 10%, 19%)",
        //okey
        theme3bg: "hsl(268, 75%, 9%)",
        theme3Keypadbg: "hsl(268, 71%, 12%)",
        theme3Delbg: "hsl(281, 89%, 26%)",
        theme3KeyShadow: "hsl(285, 91%, 52%)",
        theme3ToggleKeybg: "hsl(176, 100%, 44%)",
        theme3ToggleShadow: "hsl(177, 92%, 70%)",
        theme3ButtonKeybg: "hsl(268, 47%, 21%)",
        theme3ButtonKeyShadow: "hsl(290, 70%, 36%)",
        theme3TextYellow: "hsl(52, 100%, 62%)",
        theme3TextBlue: "hsl(198, 20%, 13%)",
      },
      fontFamily: {
        sans: "League Spartan",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
