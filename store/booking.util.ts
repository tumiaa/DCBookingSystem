import type {
  CustomerData,
  GroupBookingFormData,
  GroupBookingSubformDataItem
} from '@/types/booking'

/**
 * Changes an object's keynames to something else, using the given map object.
 * e.g. {mykey: myvalue} with the map {mykey: 'yourkey'} returns {yourkey: myvalue}
 * @param map object that contains the map between the two keynames
 * @param object the object you want to change the keys of
 * @returns the object now with new keynames
 */
function useKeyMap<T extends Record<string, any>, R extends string>(
  map: Record<keyof T, R>,
  object: T
): Record<R, any> {
  const mappedData = {} as Record<keyof typeof map, any>
  for (const key in object) {
    const mappedKey = map[key]

    mappedData[mappedKey] = object[key]
  }
  return mappedData
}

/**
 * Takes in an object and an optional omit string array,
 * and returns an array of strings to make the filter query string
 * @param data an object
 * @param omit a string array of keynames to omit
 * @returns a filtered string array of the given object, in the form of 'keyname eq keyvalue'
 */
function createFilters(data: Record<string, any>, omit?: string[]) {
  const dataArr = Object.entries(data)
  const args: string[] = []

  dataArr.forEach(([k, v]) => {
    //don't include it if it's blank or if it's in the omit list
    if (v && v != '' && !omit?.includes(k)) {
      //create the key eq value string
      const query = `${k} eq ${typeof v == 'string' ? `'${v}'` : v} and `

      args.push(query)
    }
  })
  //remove the and from the last one
  args[args.length - 1] = args[args.length - 1].split(' and ')[0]
  return args
}


/**
 * Takes in a string array and returns a string
 * @param stringArr 
 * @returns 
 */
function parseFilters(stringArr: string[]) {
  // let filterStr = ''

  // stringArr.forEach((str: string) => {
  //   filterStr = filterStr + str
  // })
  // return filterStr
  return stringArr.join(' ')
}

function getPostData<T extends Record<string, any>>(
  rawData: T,
  dataMap: Record<string, string>,
  omits?: string[]
) {
  const data = useKeyMap(dataMap as Record<keyof T, string>, rawData)
  const filters = parseFilters(createFilters(data, omits))
  return { data, filters }
}

export const createEmailBody = (
  bookingData: GroupBookingFormData,
  subBookingData: GroupBookingSubformDataItem,
  ctxData: Record<string, string>
) => {
  const { ctxEmailDCSignature, ctxEmailNewBookingBodyAck, ctxEmailSalutation } = ctxData
  const greetings = `<p>${ctxEmailSalutation} ${bookingData.firstName},</p>`
  const bookingInfo = [
    //TODO: this won't work because tourType is the id, not the name
    `Tour name: ${subBookingData.tourType}`,
    `Tour attendees planned: ${subBookingData.attendanceNumber}`,
    `1st preferred date: ${subBookingData.alternativeDates1}`,
    `2nd preferred date: ${subBookingData.alternativeDates2}`,
    `3rd preferred date: ${subBookingData.alternativeDates3}`,
    `Organisation name: ${bookingData.schoolName}`,
    `Mobile number: ${bookingData.phoneNumber}`,
    `Phone number: ${bookingData.businessPhone}`,
    `Street: ${bookingData.addressStreet}`,
    `City: ${bookingData.addressCity}`,
    `State: ${bookingData.addressState}`,
    `Postcode: ${bookingData.addressPostcode}`,
    `Country: ${bookingData.addressCountry}`
  ]

  const bookingInfoList = `<ul>${bookingInfo.map((m) => `<li>${m}</li>`)}</ul>`

  return `<head><body>${greetings}${ctxEmailNewBookingBodyAck}${bookingInfoList}<br><br>${ctxEmailDCSignature}</body></head>`
}

export { parseFilters, createFilters, useKeyMap, getPostData }
