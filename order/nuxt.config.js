export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'OrderEasily',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Faça pedidos facilmente, sem complicação.',
      },
      {
        hid: 'author',
        name: 'author',
        content: 'DevGuerreiro <devcorujam@gmail.com>',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // element-ui components
    '@/node_modules/element-ui/packages/theme-chalk/src/dropdown.scss',
    '@/node_modules/element-ui/packages/theme-chalk/src/dropdown-menu.scss',
    '@/node_modules/element-ui/packages/theme-chalk/src/dropdown-item.scss',
    '@/node_modules/element-ui/packages/theme-chalk/src/table.scss',
    '@/node_modules/element-ui/packages/theme-chalk/src/table-column.scss',
    '@/node_modules/element-ui/packages/theme-chalk/src/input.scss',
    // element-ui icons
    '@/node_modules/element-ui/packages/theme-chalk/src/icon.scss',
    // project css
    '@/assets/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/element-ui'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components/',
      prefix: 'Mercos',
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
