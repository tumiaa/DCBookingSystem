// import { defineStore } from 'pinia'
// import {
//   MapGroupBookingBooking,
//   MapGroupBookingCustomer,
//   type CustomerData,
//   type GroupBookingFormData,
//   type GroupBookingSubformDataItem
// } from '@/types/booking.d'
// // import { useAuthStore } from './auth'
// import type {
//   FormQSelect,
//   SelectOptions,
//   SelectOptionsValues
// } from '@/components/form-item/FormItem'
// import { getPostData, useKeyMap } from './booking.util'
// import { groupBookingFieldData } from '@/components/booking-forms/GroupBookingFormFields'

// export const useBookingStore = defineStore('booking', () => {
//   async function getTourNames(type: string): Promise<SelectOptionsValues> {
//     const axios = await useAuthStore().getAxios()
//     const { data } = await axios.get(`/getTourNames/${type}`)
//     // return data
//     return data.map((m: any) => ({ displayValue: m.mbrm_tourname, value: m.mbrm_tournumber }))
//   }

//   function parseCustomerPostData(postDataRaw: GroupBookingFormData): CustomerData {
//     return useKeyMap(MapGroupBookingCustomer, postDataRaw)
//   }

//   async function getCustomerId(
//     customerDataFilters: string
//   ): Promise<
//     { mbrm_customernumber: string; mbrm_source: string; mbrm_subscription: boolean } | undefined
//   > {
//     const axios = await useAuthStore().getAxios()

//     const {
//       data: { value: result }
//     } = await axios.get(`/getCustomerId`, {
//       params: {
//         filter: customerDataFilters,
//         select: 'mbrm_customernumber, mbrm_source, mbrm_subscription'
//       }
//     })

//     if (Array.isArray(result)) {
//       if (result.length == 0) {
//         //no customers found
//         return undefined
//       }
//       if (result.length == 1) {
//         return result[0]
//       } else {
//         //multiple customers found, throw error
//         throw new Error('Found more than one result')
//       }
//     } else {
//       throw new Error('Invalid result')
//     }
//   }

//   async function createCustomer(
//     customerPostData: CustomerData
//   ): Promise<
//     { mbrm_customernumber: string; mbrm_source: string; mbrm_subscription: boolean } | undefined
//   > {
//     const axios = await useAuthStore().getAxios()
//     try {
//       return await axios.post('/createCustomer', customerPostData)
//     } catch (e) {
//       console.error(e)
//     }
//   }

//   async function updateCustomer(updateData: { mbrm_subscription: boolean }) {
//     const axios = await useAuthStore().getAxios()
//     //TODO: make this endpoint
//     try {
//       return await axios.patch('/updateCustomer', updateData)
//     } catch (e) {
//       console.error(e)
//     }
//   }

//   async function createGroupBooking(
//     data: Record<keyof GroupBookingFormData, any>,
//     customerId: string
//   ) {
//     const axios = await useAuthStore().getAxios()
//     //TODO: make this endpoint
//     try {
//       await axios.post('/createBooking', { ...data, mbrm_customerId: customerId })
//     } catch (e) {
//       console.error(e)
//     }
//   }
//   async function submitGroupBooking(
//     formData: GroupBookingFormData,
//     subformData: GroupBookingSubformDataItem[]
//   ) {
//     const customerPostData = getPostData(formData, MapGroupBookingCustomer, [
//       'mbrm_subscription',
//       'mbrm_source'
//     ]) as { filters: string; data: CustomerData }

//     try {
//       //get customer
//       let customerData = await getCustomerId(customerPostData.filters)

//       //if not exist, make one
//       if (!customerData) {
//         customerData = await createCustomer(customerPostData.data)
//       }

//       if (
//         customerData &&
//         customerData.mbrm_subscription &&
//         customerData.mbrm_subscription != formData.sendMarketingEmail
//       ) {
//         //if subscription choice is different, update data
//         await updateCustomer({ mbrm_subscription: customerData.mbrm_subscription })
//       }

//       if (customerData?.mbrm_customernumber) {
//         subformData.forEach(async (booking) => {
//           const bookingObj = getPostData(booking, MapGroupBookingBooking)
//           await createGroupBooking(bookingObj.data, customerData.mbrm_customernumber)
//         })
//       }
//     } catch (e) {
//       console.error(e)
//     }
//   }

//   return {
//     submitGroupBooking,
//     getTourNames,
//     parseCustomerPostData,
//     getCustomerId
//   }
// })
