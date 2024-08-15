// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@vesp/nuxt-fontawesome", "@nuxt/image", "nuxt-swiper"],
  fontawesome: {
    icons: {
      solid: ["cog", "fa-xmark", "fa-image", "fa-plus"],
    },
  },
});
