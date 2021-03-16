module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        'mercos-purple': '#663991',
        'mercos-green': '#00cc62',
        'mercos-footer': '#494a5e',
        'mercos-font-color': '#212529'
      }
    }
  },
  variants: {},
  plugins: []
}
