// import { ref } from 'vue'
// import { defineStore } from 'pinia'
// import axios, { type AxiosStatic } from 'axios'
// // import axios from 'axios'

// export const useAuthStore = defineStore('auth', () => {
//   const ModeUrlMap = {
//     production: 'dc',
//     test: 'dc-test',
//     development: 'dc-dev'
//   }
//   const clientAuth = ref()
//   const axiosService = ref()

//   async function authenticate() {
//     clientAuth.value = import.meta.env.VITE_SUBKEY

//     const modeUrl = import.meta.env.MODE as 'production' | 'test' | 'development'

//     axiosService.value = axios.create({
//       headers: { 'Ocp-Apim-Subscription-Key': clientAuth.value },
//       baseURL: `https://webdevapim.azure-api.net/${ModeUrlMap[modeUrl]}`
//     })
//   }

//   async function getClientAuth() {
//     if (!clientAuth.value) {
//       await authenticate()
//     }
//     return clientAuth.value
//   }

//   async function getAxios(): Promise<AxiosStatic> {
//     if (!axiosService.value) {
//       await authenticate()
//     }
//     return axiosService.value
//   }

//   return { getAxios, getClientAuth, ModeUrlMap }
// })
