// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/',
    buildAssetsDir: 'assets',
  },
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    'nuxt-og-image'
  ],
  colorMode: {
    preference: 'light'
  },
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  devtools: {
    enabled: true
  },
  typescript: {
    strict: false
  }
})
