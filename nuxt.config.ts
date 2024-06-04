// https://nuxt.com/docs/api/configuration/nuxt-config
import api from './plugins/02.api'
export default defineNuxtConfig({
  devtools: { enabled: true },
  future:{
    // typescriptBundlerResolution:true
  },

  modules: ["@pinia/nuxt", "@nuxt/eslint",'@nuxt/devtools','@nuxt/test-utils/module'],
  eslint: {
    //custom opts here
  },
  css:['~/assets/base.css','~/assets/main.css'],
  imports: {
    dirs: [
      "composables",
      "composables/*/index.{ts,js,mjs,mts}",
      "composables/**",
      "components",
      "components/*/index.{ts,js,mjs,mts}",
      "components/**",
      "types",
      "types/*.{ts,d.ts}"
    ],
  },
  runtimeConfig: {
    public: { NUXT_PUBLIC_ENV_URL: process.env.NUXT_PUBLIC_ENV_URL },
   

    NUXT_AAD_ENDPOINT_BASE: process.env.NUXT_AAD_ENDPOINT_BASE,
   
    NUXT_TENANT_ID: process.env.NUXT_TENANT_ID,
    NUXT_CLIENT_ID: process.env.NUXT_CLIENT_ID,
    NUXT_CLIENT_SECRET: process.env.NUXT_CLIENT_SECRET,
  },
});
