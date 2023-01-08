module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`,
    `nuxt.config.{js,ts}`,
  ],
  important: true,
  theme: {
    fontFamily: {
      body: ['"Roboto"', 'Poppins', 'Nunito', 'sans-serif'],
    },
    extend: {
      colors: {
        victoria: {
          50: '#f3f0fd',
          100: '#e8e3fc',
          200: '#d7cdf8',
          300: '#c1aef3',
          400: '#af8eeb',
          500: '#a172e2',
          600: '#9657d4',
          700: '#8448ba',
          800: '#6a3d96',
          900: '#58387a',
        },
      },
    },
  },
  variants: {},
}
