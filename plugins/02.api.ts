// export default defineNuxtPlugin(() => {
//     const { session } = useUserSession()

// import { useAuth } from "~/composables/useAuth";

//     const api = $fetch.create({
//       baseURL: 'https://api.nuxt.com',
//       onRequest({ request, options, error }) {
//         if (session.value?.token) {
//           const headers = options.headers ||= {}
//           if (Array.isArray(headers)) {
//             headers.push(['Authorization', `Bearer ${session.value?.token}`])
//           } else if (headers instanceof Headers) {
//             headers.set('Authorization', `Bearer ${session.value?.token}`)
//           } else {
//             headers.Authorization = `Bearer ${session.value?.token}`
//           }
//         }
//       },
//       async onResponseError({ response }) {
//         if (response.status === 401) {
//           await navigateTo('/login')
//         }
//       }
//     })

//     // Expose to useNuxtApp().$api
//     return {
//       provide: {
//         api
//       }
//     }
//   })
export default defineNuxtPlugin({
  name: "api",
  // dependsOn:['msal'],
  async setup() {
    const runtimeConfig = useRuntimeConfig();
    const token = useNuxtApp().$token?.accessToken;
    // console.log(token)
    // const auth  = await useAuth();
    // const token = auth?.token;

    const api = $fetch.create({
      baseURL:
        runtimeConfig.public.NUXT_PUBLIC_ENV_URL + runtimeConfig.NUXT_API_PATH,

      onRequest({ request, options, error }) {
        const headers = (options.headers ||= {});
        //if we are given headers arr, add auth to header arr
        if (Array.isArray(headers)) {
          headers.push(["Authorization", `Bearer ${token}`]);
        }
        // if we are given header type obj, set the authorization header to auth
        else if (headers instanceof Headers) {
          headers.set("Authorization", `Bearer ${token}`);
        }
        //otherwise, just set the obj authorization key's value to auth
        else {
          headers.Authorization = `Bearer ${token}`;
        }

        console.log(request)
      },
    });

    return {
      provide: {
        api,
      },
    };
  },
});
