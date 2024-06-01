export type GroupBookingFormData_Personal = {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
}
type GroupBookingFormData_Org = {
  // address: string
  schoolName: string
  businessPhone: string
  addressStreet: string
  addressCity: string
  addressPostcode: string
  addressState: string
  addressCountry: string
}

type GroupBookingFormData_Extra = {
  howDidYouHear: string
  // notes: string
  sendMarketingEmail: boolean
}
export type GroupBookingFormData = GroupBookingFormData_Personal &
  GroupBookingFormData_Org &
  GroupBookingFormData_Extra

export type GroupBookingSubformDataItem = {
  tourType: string
  attendanceNumber: number
  alternativeDates1: string
  alternativeDates2: string
  alternativeDates3: string
  onsiteTravelMethod: string
  specialReq: string
}

export type GroupBookingSubformOptions = {
  tourType: string
  tourNames: string[]
}
export const tourTypeMap = {
  school: 'School Tour',
  community: 'Community Tour'
}

type CustomerData = {
  mbrm_firstname: string
  mbrm_lastname: string
  mbrm_email: string
  mbrm_organizationname: string
  mbrm_postcode: string
  mbrm_state: string
  mbrm_street: string
  mbrm_city: string
  mbrm_country: string
  mbrm_mobilenumber: string
  mbrm_phonenumber: string
  mbrm_source: string
  mbrm_subscription: boolean
}

export const MapGroupBookingCustomer: Record<keyof GroupBookingFormData, keyof CustomerData> = {
  firstName: 'mbrm_firstname',
  lastName: 'mbrm_lastname',
  schoolName: 'mbrm_organizationname',
  email: 'mbrm_email',
  businessPhone: 'mbrm_phonenumber',
  phoneNumber: 'mbrm_mobilenumber',
  addressStreet: 'mbrm_street',
  addressCity: 'mbrm_city',
  addressPostcode: 'mbrm_postcode',
  addressState: 'mbrm_state',
  addressCountry: 'mbrm_country',
  howDidYouHear: 'mbrm_source',
  sendMarketingEmail: 'mbrm_subscription'
  // notes: 'mbrm_notes'
}

export const MapGroupBookingBooking: Record<
  keyof (GroupBookingSubformDataItem & { customerId: string }),
  string
> = {
  alternativeDates1: 'mbrm_tourdate1',
  alternativeDates2: 'mbrm_tourdate2',
  alternativeDates3: 'mbrm_tourdate3',
  attendanceNumber: 'mbrm_attendeesplanned',
  onsiteTravelMethod: 'mbrm_travelmethod',
  specialReq: 'mbrm_specialrequirement',
  customerId: 'mbrm_customerid',
  tourType: 'mbrm_tourid'
}
