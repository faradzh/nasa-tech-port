// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  buildModules: [
    // Simple usage
    "@nuxtjs/date-fns",
  ],
  build: {
    transpile: ["@vuepic/vue-datepicker"],
  },
});
