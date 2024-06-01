import type { CustomerData } from '@/types/booking'

export const mappedCustomerData: CustomerData = {
  mbrm_firstname: 'John',
  mbrm_lastname: 'Doe',
  mbrm_email: 'john@example.com',
  mbrm_mobilenumber: '0433123555',
  mbrm_organizationname: "Scholar's Academy",
  mbrm_phonenumber: '966753337',
  mbrm_street: '105 Happy Avenue',
  mbrm_city: 'Penrith',
  mbrm_postcode: '2140',
  mbrm_state: 'NSW',
  mbrm_country: 'Australia',
  mbrm_source: 'Friend',
  mbrm_subscription: true
}

export const mappedCustomerData_withEmpty: CustomerData = {
  mbrm_firstname: 'John',
  mbrm_lastname: 'Doe',
  mbrm_email: 'john@example.com',
  mbrm_mobilenumber: '0433123555',
  mbrm_organizationname: "Scholar's Academy",
  mbrm_phonenumber: '',
  mbrm_street: '105 Happy Avenue',
  mbrm_city: 'Penrith',
  mbrm_postcode: '2140',
  mbrm_state: 'NSW',
  mbrm_country: 'Australia',
  mbrm_source: '',
  // mbrm_notes: '',
  mbrm_subscription: true
}

export const customerDataFilterArr = [
  "mbrm_firstname eq 'John' and ",
  "mbrm_lastname eq 'Doe' and ",
  "mbrm_email eq 'john@example.com' and ",
  "mbrm_mobilenumber eq '0433123555' and ",
  "mbrm_organizationname eq 'Scholar's Academy' and ",
  "mbrm_phonenumber eq '966753337' and ",
  "mbrm_street eq '105 Happy Avenue' and ",
  "mbrm_city eq 'Penrith' and ",
  "mbrm_postcode eq '2140' and ",
  "mbrm_state eq 'NSW' and ",
  "mbrm_country eq 'Australia' and ",
  "mbrm_source eq 'Friend' and ",
  'mbrm_subscription eq true'
]

export const customerDataFilterArr_withEmpty = [
  "mbrm_firstname eq 'John' and ",
  "mbrm_lastname eq 'Doe' and ",
  "mbrm_email eq 'john@example.com' and ",
  "mbrm_mobilenumber eq '0433123555' and ",
  "mbrm_organizationname eq 'Scholar's Academy' and ",
  "mbrm_street eq '105 Happy Avenue' and ",
  "mbrm_city eq 'Penrith' and ",
  "mbrm_postcode eq '2140' and ",
  "mbrm_state eq 'NSW' and ",
  "mbrm_country eq 'Australia' and ",
  'mbrm_subscription eq true'
]

export const customerDataFilterArr_withOmit = [
  "mbrm_firstname eq 'John' and ",
  "mbrm_lastname eq 'Doe' and ",
  "mbrm_email eq 'john@example.com' and ",
  "mbrm_mobilenumber eq '0433123555' and ",
  "mbrm_organizationname eq 'Scholar's Academy' and ",
  "mbrm_street eq '105 Happy Avenue' and ",
  "mbrm_city eq 'Penrith' and ",
  "mbrm_postcode eq '2140' and ",
  "mbrm_state eq 'NSW' and ",
  "mbrm_country eq 'Australia'"
]
export const customerDataFilterStr = `mbrm_firstname eq 'John' and mbrm_lastname eq 'Doe' and mbrm_email eq 'john@example.com' and mbrm_mobilenumber eq '0433123555' and mbrm_organizationname eq 'Scholar's Academy' and mbrm_phonenumber eq '966753337' and mbrm_street eq '105 Happy Avenue' and mbrm_city eq 'Penrith' and mbrm_postcode eq '2140' and mbrm_state eq 'NSW' and mbrm_country eq 'Australia' and mbrm_source eq 'Friend' and mbrm_subscription eq true`

export const customerDataFilterStr_withEmpty = `mbrm_firstname eq 'John' and mbrm_lastname eq 'Doe' and mbrm_email eq 'john@example.com' and mbrm_mobilenumber eq '0433123555' and mbrm_organizationname eq 'Scholar's Academy' and mbrm_street eq '105 Happy Avenue' and mbrm_city eq 'Penrith' and mbrm_postcode eq '2140' and mbrm_state eq 'NSW' and mbrm_country eq 'Australia' and mbrm_subscription eq true`
export const customerDataFilterStr_withOmit = `mbrm_firstname eq 'John' and mbrm_lastname eq 'Doe' and mbrm_email eq 'john@example.com' and mbrm_mobilenumber eq '0433123555' and mbrm_organizationname eq 'Scholar's Academy' and mbrm_street eq '105 Happy Avenue' and mbrm_city eq 'Penrith' and mbrm_postcode eq '2140' and mbrm_state eq 'NSW' and mbrm_country eq 'Australia'`

const mappedBookingData = {
  mbrm_attendeesplanned: 20,
  mbrm_travelmethod: 'We will bring a bus',
  mbrm_specialrequirement: 'Yes',
  mbrm_tourdate1: '1/1/2011',
  mbrm_tourdate2: '2/2/2022',
  mbrm_tourdate3: '3/3/2033',
  mbrm_tourid: 'My Tour'
}
const mappedBookingData_withEmpty = {
  mbrm_attendeesplanned: 20,
  mbrm_travelmethod: 'We will bring a bus',
  mbrm_specialrequirement: '',
  mbrm_tourdate1: '1/1/2011',
  mbrm_tourdate2: '2/2/2022',
  mbrm_tourdate3: '3/3/2033',
  mbrm_tourid: 'My Tour'
}

const bookingDataFilterArr = [
  "mbrm_tourdate1 eq '1/1/2011' and ",
  "mbrm_tourdate2 eq '2/2/2022' and ",
  "mbrm_tourdate3 eq '3/3/2033' and ",
  'mbrm_attendeesplanned eq 20 and ',
  "mbrm_specialrequirement eq 'Yes' and ",
  "mbrm_travelmethod eq 'We will bring a bus' and ",
  "mbrm_tourid eq 'My Tour'"
]
const bookingDataFilterArr_withEmpty = [
  'mbrm_attendeesplanned eq 20 and ',
  "mbrm_travelmethod eq 'We will bring a bus' and ",
  "mbrm_tourdate1 eq '1/1/2011' and ",
  "mbrm_tourdate2 eq '2/2/2022' and ",
  "mbrm_tourdate3 eq '3/3/2033' and ",
  "mbrm_tourid eq 'My Tour'"
]
const bookingDataFilterArr_withOmit = [
  'mbrm_attendeesplanned eq 20 and ',
  "mbrm_travelmethod eq 'We will bring a bus' and ",
  "mbrm_tourdate2 eq '2/2/2022' and ",
  "mbrm_tourdate3 eq '3/3/2033' and ",
  "mbrm_tourid eq 'My Tour'"
]

const bookingDataFilterStr =
  "mbrm_attendeesplanned eq 20 and mbrm_travelmethod eq 'We will bring a bus' and mbrm_specialrequirement eq Yes and mbrm_tourdate1 eq '1/1/2011' and mbrm_tourdate2 eq '2/2/2022' and mbrm_tourdate3 eq '3/3/2033' and mbrm_tourid eq 'My Tour'"
const bookingDataFilterStr_withEmpty =
  "mbrm_attendeesplanned eq 20 and mbrm_travelmethod eq 'We will bring a bus' and mbrm_tourdate1 eq '1/1/2011' and mbrm_tourdate2 eq '2/2/2022' and mbrm_tourdate3 eq '3/3/2033' and mbrm_tourid eq 'My Tour'"

const bookingDataFilterStr_withOmit =
  "mbrm_attendeesplanned eq 20 and mbrm_travelmethod eq 'We will bring a bus' and mbrm_tourdate2 eq '2/2/2022' and mbrm_tourdate3 eq '3/3/2033' and mbrm_tourid eq 'My Tour'"

export const groupBookingExpectedData = {
  customerFilterArr: {
    default: customerDataFilterArr,
    withEmpty: customerDataFilterArr_withEmpty,
    withOmit: customerDataFilterArr_withOmit
  },
  bookingFilterArr: {
    default: bookingDataFilterArr,
    withEmpty: bookingDataFilterArr_withEmpty,
    withOmit: bookingDataFilterArr_withOmit
  },
  customerFilterStr: {
    default: customerDataFilterStr,
    withEmpty: customerDataFilterStr_withEmpty,
    withOmit: customerDataFilterStr_withOmit
  },
  bookingFilterStr: {
    default: bookingDataFilterStr,
    withEmpty: bookingDataFilterStr_withEmpty,
    withOmit: bookingDataFilterStr_withOmit
  },
  mappedCustomerData: {
    default: mappedCustomerData,
    withEmpty: mappedCustomerData_withEmpty
  },
  mappedBookingData: {
    default: mappedBookingData,
    withEmpty: mappedBookingData_withEmpty
  }
}
