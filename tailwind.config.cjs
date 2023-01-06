/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    rtl: true,
    themes: [
      {
        default: {
          "primary": "#0234aa",
          "secondary": "#463AA1",
          "accent": "#C149AD",
          "neutral": "#021431",
          "base-100": "#FFFFFF",
          "info": "#93E6FB",
          "success": "#80CED1",
          "warning": "#EFD8BD",
          "error": "#E58B8B",
        },
      },
      "dark",
    ]
  },
  plugins: [require('daisyui')],
}
