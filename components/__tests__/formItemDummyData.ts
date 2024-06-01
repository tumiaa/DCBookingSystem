import type { GroupBookingFormData, GroupBookingSubformDataItem } from '@/types/booking'
import type {
  FormQDate,
  FormQInput,
  FormQRadio,
  FormQRange,
  FormQSelect,
  FormQTextArea,
  FormQToggle
} from '../form-item/FormItem'

const inputItem: {
  item: FormQInput<GroupBookingFormData>
  val: any
  message?: { show: boolean; type: 'error' | 'info'; value: string; title?: string }
} = {
  item: {
    id: 'firstName',
    type: 'input',
    label: 'Test Label',
    placeholder: 'Test Placeholder',
    required: true,
    maxWidth: 200
  },
  val: '',
  message: { show: true, type: 'info', value: 'Test message', title: 'Test title' }
}

const dateItem: {
  item: FormQDate<GroupBookingSubformDataItem>
  val: any
  message?: { show: boolean; type: 'error' | 'info'; value: string; title?: string }
} = {
  item: {
    id: 'alternativeDates1',
    required: true,
    type: 'date',
    label: 'Test label',
    maxWidth: 200
  },
  val: '',
  message: { show: true, type: 'info', value: 'Test message', title: 'Test title' }
}

const textAreaItem: {
  item: FormQTextArea<GroupBookingSubformDataItem>
  val: any
  message?: { show: boolean; type: 'error' | 'info'; value: string; title?: string }
} = {
  item: {
    id: 'alternativeDates1',
    required: true,
    type: 'textarea',
    label: 'Test label',
    maxWidth: 200
  },
  val: '',
  message: { show: true, type: 'info', value: 'Test message', title: 'Test title' }
}

const toggleItem: {
  item: FormQToggle<GroupBookingSubformDataItem>
  val: any
  message?: { show: boolean; type: 'error' | 'info'; value: string; title?: string }
} = {
  item: {
    id: 'alternativeDates1',
    required: true,
    type: 'toggle',
    label: 'Test label',
    maxWidth: 200
  },
  val: '',
  message: { show: true, type: 'info', value: 'Test message', title: 'Test title' }
}

const radioItem: {
  item: FormQRadio<GroupBookingFormData>
  val: any
  message?: { show: boolean; type: 'error' | 'info'; value: string; title?: string }
} = {
  item: {
    id: 'sendMarketingEmail',
    required: true,
    type: 'radio',
    label: 'Test label',
    maxWidth: 200,
    options: {
      defaultValue: 'yes please',
      values: [
        { value: true, displayValue: 'yes please' },
        { value: false, displayValue: 'no thank you' }
      ]
    }
  },
  val: '',
  message: { show: true, type: 'info', value: 'Test message', title: 'Test title' }
}

const rangeItem: {
  item: FormQRange<GroupBookingSubformDataItem>
  val: any
  message?: { show: boolean; type: 'error' | 'info'; value: string; title?: string }
} = {
  item: {
    id: 'attendanceNumber',
    required: true,
    type: 'range',
    label: 'Test label',
    maxWidth: 200,
    max: 30,
    min: 1
  },
  val: '',
  message: { show: true, type: 'info', value: 'Test message', title: 'Test title' }
}
const selectItem: {
  item: FormQSelect<GroupBookingFormData>
  val: any
  message?: { show: boolean; type: 'error' | 'info'; value: string; title?: string }
} = {
  item: {
    id: 'sendMarketingEmail',
    required: true,
    type: 'select',
    label: 'Test label',
    maxWidth: 200,
    options: {
      values: [
        { displayValue: 'Option 1', value: '1' },
        { displayValue: 'Option 2', value: '2' }
      ],
      defaultValue: '1'
    }
  },
  val: '',
  message: { show: true, type: 'info', value: 'Test message', title: 'Test title' }
}
const comboBoxItem: {
  item: FormQSelect<GroupBookingFormData>
  val: any
  message?: { show: boolean; type: 'error' | 'info'; value: string; title?: string }
} = {
  item: {
    id: 'sendMarketingEmail',
    required: true,
    type: 'combobox',
    label: 'Test label',
    maxWidth: 200,
    options: {
      values: [
        { displayValue: 'Option 1', value: '1' },
        { displayValue: 'Option 2', value: '2' }
      ],
      defaultValue: '1'
    }
  },
  val: '',
  message: { show: true, type: 'info', value: 'Test message', title: 'Test title' }
}

export const dummyItem = {
  input: inputItem,
  date: dateItem,
  radio: radioItem,
  range: rangeItem,
  toggle: toggleItem,
  combobox: comboBoxItem,
  select: selectItem,
  textarea: textAreaItem
}
