// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@vesp/nuxt-fontawesome",
    "@nuxt/image",
    "nuxt-swiper",
    // "nuxt-security",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
  ],
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
  },
  fontawesome: {
    icons: {
      solid: [
        "cog",
        "fa-xmark",
        "fa-image",
        "fa-plus",
        "fa-chevron-right",
        "fa-chevron-left",
        "fa-thumbs-up",
        "fa-comment",
        "fa-share",
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiBase: "http://localhost:8000/api",
    },
  },
});
