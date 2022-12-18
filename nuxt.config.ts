// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Ecommerce',
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        { src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js' },
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        // { rel: 'stylesheet', href: 'https://awesome-lib.css' },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/img/logo.png',
        },
      ],
      noscript: [
        // <noscript>Javascript is required</noscript>
        { children: 'Javascript is required' },
      ],
    },
  },
  runtimeConfig: {
    // Private runtime config
    // apiSecret: 123
    public: {
      // Public runtime config
      // apiBase: '/api'
    },
  },
});
