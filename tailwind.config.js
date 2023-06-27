const lineClamp = require('@tailwindcss/line-clamp');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        dt: 'url(/assets/main/bg-dt.png)',
        mbl: 'url(/assets/main/bg-mbl.png)',
      },
      colors: {
        footer: '#343434',
      },
      height: {
        inherit: 'inherit',
      },
      width: {
        inherit: 'inherit',
      },
    },
  },
  plugins: [lineClamp],
};
