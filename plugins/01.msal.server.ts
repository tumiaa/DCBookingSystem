import {
  ConfidentialClientApplication,
  type ClientCredentialRequest,
  type Configuration,
} from "@azure/msal-node";

export default defineNuxtPlugin({
  _name:'msal',
  name: "msal",
  async setup() {
    const {
      NUXT_AAD_ENDPOINT_BASE,
      NUXT_CLIENT_ID,
      NUXT_CLIENT_SECRET,
      NUXT_TENANT_ID,
      public: { NUXT_PUBLIC_ENV_URL },
    } = useRuntimeConfig();

    const msalConfig: Configuration = {
      auth: {
        clientId: NUXT_CLIENT_ID,
        authority: NUXT_AAD_ENDPOINT_BASE + "/" + NUXT_TENANT_ID,
        clientSecret: NUXT_CLIENT_SECRET,
      },
    };

    function getConfidentialClientApp(msalConfig: Configuration) {
      const confidentialClientApp = new ConfidentialClientApplication(
        msalConfig
      );

      return confidentialClientApp;
    }

    function getRequestToken() {
      const tokenReq: ClientCredentialRequest = {
        scopes: [NUXT_PUBLIC_ENV_URL + "/.default"],
      };
      return tokenReq;
    }

    const confidentialClientApp = await getConfidentialClientApp(msalConfig);
    const tokenReq = await getRequestToken();

    async function getToken() {
      return await confidentialClientApp.acquireTokenByClientCredential(
        tokenReq
      );
    }
    const token = await getToken();
    return {
      provide: {
        token,
      },
    };
  },
});
