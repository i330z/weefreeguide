
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'WeeFreeGuide',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'this is the description of the website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/bootstrap-grid.min.css',
    '@/assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/jsonld'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@aceforth/nuxt-optimized-images',
    '@/modules/generator',
    ['@nuxtjs/google-analytics', {
      id: 'UA-197085723-1'
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    'vue-social-sharing/nuxt',
    '@nuxt/content',
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    hostname: 'https://www.weefreeguide.xyz/',
    gzip: true
  },

  

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  optimizedImages: {
    optimizeImages: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  // build: {
  //   babel: {
  //     presets(env, [ preset, options ]) {
  //       return ["module:@babel/plugin-proposal-private-methods", { "loose": true }]
  //     }
  //   }
  // }
}