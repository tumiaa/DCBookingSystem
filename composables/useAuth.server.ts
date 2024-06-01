// import * as msal from "@azure/msal-node";
// import type { RuntimeConfig } from "nuxt/schema";

// export async function useAuth() {
//   const {
//     NUXT_AAD_ENDPOINT_BASE,
//     NUXT_CLIENT_ID,
//     NUXT_CLIENT_SECRET,
//     NUXT_TENANT_ID,
//     public: { NUXT_PUBLIC_ENV_URL },
//   } = useRuntimeConfig();

//   if (
//     !NUXT_AAD_ENDPOINT_BASE ||
//     !NUXT_CLIENT_ID ||
//     !NUXT_CLIENT_SECRET ||
//     !NUXT_TENANT_ID
//   ) {
//     console.error(
//       "cannot find one of",
//       NUXT_AAD_ENDPOINT_BASE,
//       NUXT_CLIENT_ID,
//       NUXT_CLIENT_SECRET,
//       NUXT_TENANT_ID
//     );
//   } else {
//     const msalConfig: msal.Configuration = {
//       auth: {
//         clientId: NUXT_CLIENT_ID,
//         authority: NUXT_AAD_ENDPOINT_BASE + "/" + NUXT_TENANT_ID,
//         clientSecret: NUXT_CLIENT_SECRET,
//       },
//     };

//     function getConfidentialClientApp(msalConfig: msal.Configuration) {
//       const confidentialClientApp = new msal.ConfidentialClientApplication(
//         msalConfig
//       );

//       return confidentialClientApp;
//     }

//     function getRequestToken() {
//       const tokenReq: msal.ClientCredentialRequest = {
//         scopes: [NUXT_PUBLIC_ENV_URL + "/.default"],
//       };
//       return tokenReq;
//     }

//     const confidentialClientApp = await getConfidentialClientApp(msalConfig);
//     const tokenReq = await getRequestToken();

//     async function getToken() {
//       return await confidentialClientApp.acquireTokenByClientCredential(
//         tokenReq
//       );
//     }

//     return { token: await getToken() };
//   }
// }
