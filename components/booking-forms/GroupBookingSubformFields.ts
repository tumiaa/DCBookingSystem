// import type { GroupBookingSubformDataItem } from '@/types/booking'
// import type { FormQSelect, FormQuestion, FormQuestionPair } from '../form-item/FormItem'
// import { useBookingStore } from '@/stores/booking'

// export const subformItems: (
//   | FormQuestion<GroupBookingSubformDataItem>
//   | FormQuestionPair<GroupBookingSubformDataItem>
// )[] = [
//   {
//     id: 'tourType',
//     type: 'combobox',
//     required: true,
//     label: 'Tour type?',
//     options: { values: [] }
//   },
//   {
//     id: 'attendanceNumber',
//     type: 'range',
//     min: 1,
//     max: 30,
//     label: 'How many students will be attending?',
//     required: true,
//     maxWidth: 1
//   },
//   { id: 'alternativeDates1', type: 'date', label: 'Booking date', required: true, maxWidth: 2 },
//   [
//     {
//       id: 'alternativeDates2',
//       type: 'date',
//       label: 'Alternative dates 1',
//       required: true,
//       maxWidth: 1
//     },
//     {
//       id: 'alternativeDates3',
//       type: 'date',
//       label: 'Alternative date 2',
//       required: true,
//       maxWidth: 1
//     }
//   ],
//   {
//     id: 'onsiteTravelMethod',
//     type: 'select',
//     options: {
//       values: [
//         { value: true, displayValue: 'Yes' },
//         { value: false, displayValue: 'No' }
//       ]
//     },
//     required: true,
//     label: 'Do you need transport around the campus?'
//   },
//   { id: 'specialReq', type: 'textarea', required: false, label: 'Any special requirements?' }
// ]

// export const groupBookingSubformDefaults = {
//   attendanceNumber: 1,
//   alternativeDates1: '',
//   alternativeDates2: '',
//   alternativeDates3: '',
//   onsiteTravelMethod: false,
//   specialReq: '',
//   tourType: ''
// }
