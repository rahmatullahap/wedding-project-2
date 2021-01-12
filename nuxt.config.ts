import { Configuration } from '@nuxt/types';
import dotenv from 'dotenv-defaults';

// configure dotenv
dotenv.config({
  defaults: '.env.defaults'
});

// using timestamp to semver version
const createVersion = () => {
  const now = new Date();
  const time = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  return `${now.getFullYear()}.${now.getMonth()}.${now.getDate()}.${time}`;
};

export const CACHE_VERSION = createVersion();

const config: Configuration = {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  server: {
    port: 5011,
    host: '0.0.0.0'
  },
  generate: {
    fallback: '404.html'
  },
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: 'Wedding Hasna & Rahmat',
    title: 'Wedding Hasna & Rahmat',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `/favicon.ico?${CACHE_VERSION}`
      }
    ]
  },
  /**
   * workbox configuration
   * https://pwa.nuxtjs.org/modules/workbox.html
   */
  pwa: {
    workbox: {
      pagesURLPattern: '^((?!(_db|changes)).)*$',
      workboxURL:
        'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js',
      cacheNames: {
        suffix: CACHE_VERSION
      }
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#000000' },
  /*
   ** Global CSS
   */
  css: ['@/assets/style/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/lodash',
    {
      src: '~/plugins/sw-hook',
      ssr: false
    }
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: [{ path: '~/components', extensions: ['vue'] }],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/axios'],
  /*
   ** Nuxt.js axios
   */
  axios: {
    // proxy: true
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build',
    '@nuxtjs/axios',
    '~/modules/backend-api'
  ],
  /**
   * typesript configurations
   */
  typescript: {
    typeCheck: {
      eslint: true
    }
  },
  /**
   * api configurations
   */
  backend: {
    apiUrl: process.env.API_URL,
    subscriptionUrl: process.env.SUBSCRIPTION_URL
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/style/variables.scss'],
    defaultAssets: {
      font: {
        family: 'Roboto'
      },
      icons: 'mdi'
    },
    optionsPath: './vuetify.options.ts'
  },
  /*
   ** Build configuration
   */
  build: {
    /**
     * You can extend webpack config here
     *
     */
    extend(config, { isClient }) {
      // Extend only webpack config for client-bundle
      if (isClient) {
        config.devtool = '#source-map';
      }
      config.node = {
        fs: 'empty'
      };
    }
  }
};

export default config;
