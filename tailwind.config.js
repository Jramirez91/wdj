module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: (theme) => ({
        "screen/2": "calc(100vh - 56px)",
      }),
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
       '50%': '200% 100%',
       '16': '4rem',
      }
    },
  },
  variants: { display: ["responsive", "hover", "focus"] },
  plugins: [],
};
