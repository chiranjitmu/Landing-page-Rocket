/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#e94c88",
        blue: "#1e0e62",
        button1: "#482be7",
        button2: "#1da1f2",
        signinbutton: "#25DAC5",
      },
      fontFamily: {
        'dm-sans': ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
};
