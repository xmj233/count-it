export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  fonts: {
    providers: {
      google: false,
      googleicons: false,
    },
  },
  ssr: false,
  devServer: { host: "0.0.0.0" },
  nitro: { preset: "static" },
});
