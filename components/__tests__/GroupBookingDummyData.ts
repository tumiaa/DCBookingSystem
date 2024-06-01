import type { GroupBookingFormData, GroupBookingSubformDataItem } from '@/types/booking'
export const DummyBookingBookingData: GroupBookingSubformDataItem = {
  alternativeDates1: '1/1/2011',
  alternativeDates2: '2/2/2022',
  alternativeDates3: '3/3/2033',
  attendanceNumber: 20,
  onsiteTravelMethod: 'We will bring a bus',
  specialReq: 'Yes',
  tourType: 'My Tour'
}
export const DummyBookingBookingDataWithEmpty: GroupBookingSubformDataItem = {
  alternativeDates1: '1/1/2011',
  alternativeDates2: '2/2/2022',
  alternativeDates3: '3/3/2033',
  attendanceNumber: 20,
  onsiteTravelMethod: 'We will bring a bus',
  specialReq: '',
  tourType: 'My Tour'
}

export const DummyBookingCustomerData: GroupBookingFormData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  phoneNumber: '0433123555',
  schoolName: "Scholar's Academy",
  businessPhone: '966753337',
  addressStreet: '105 Happy Avenue',
  addressCity: 'Penrith',
  addressPostcode: '2140',
  addressState: 'NSW',
  addressCountry: 'Australia',
  howDidYouHear: 'Friend',
  //   notes: 'This is a note',
  sendMarketingEmail: true
}

export const DummyBookingCustomerDataWithEmpty: GroupBookingFormData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  phoneNumber: '0433123555',
  schoolName: "Scholar's Academy",
  businessPhone: '',
  addressStreet: '105 Happy Avenue',
  addressCity: 'Penrith',
  addressPostcode: '2140',
  addressState: 'NSW',
  addressCountry: 'Australia',
  howDidYouHear: '',
  //   notes: '',
  sendMarketingEmail: true
}
