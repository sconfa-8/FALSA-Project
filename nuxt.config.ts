// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@vueuse/nuxt', '@nuxt/image', '@nuxtjs/tailwindcss'],
})
