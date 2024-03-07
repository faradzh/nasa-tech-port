// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxt/test-utils/module"],
  buildModules: [
    // Simple usage
    "@nuxtjs/date-fns",
  ],
  build: {
    transpile: ["@vuepic/vue-datepicker"],
  },
  app: {
    head: {
      title: "Nasa TechPort",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
});
