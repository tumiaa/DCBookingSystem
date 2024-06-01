import type { GroupBookingFormData, GroupBookingSubformDataItem } from '@/types/booking'
export type FormDataTypes = GroupBookingFormData | GroupBookingSubformDataItem
type FormQDefault<T extends FormDataTypes> = {
  id: keyof T
  label?: string
  // type: 'input' | 'select' | 'textarea' |'combobox'
  required: boolean
  maxWidth?: number
}
export type SelectOptionValue =
  | { value: string; displayValue: string }
  | { value: boolean | string; displayValue: string }
export type SelectOptionsValues = SelectOptionValue[]

type SelectOptions = {
  defaultValue?: string | boolean
  values: SelectOptionsValues
}

type FormQInput<T extends FormDataTypes> = FormQDefault<T> & {
  type: 'input'
  placeholder?: string
}

type FormQRadio<T extends FormDataTypes> = FormQDefault<T> & {
  type: 'radio'
  options: SelectOptions
}
type FormQRange<T extends FormDataTypes> = FormQDefault<T> & {
  type: 'range'
  min: number
  max: number
}
type FormQToggle<T extends FormDataTypes> = FormQDefault<T> & {
  type: 'toggle'
}
type FormQDate<T extends FormDataTypes> = FormQDefault<T> & { type: 'date' }
export type FormQSelect<T extends FormDataTypes> = FormQDefault<T> & {
  type: 'select' | 'combobox'
  options: SelectOptions
}
type FormQTextArea<T extends FormDataTypes> = FormQDefault<T> & {
  type: 'textarea'
  placeholder?: string
}

export type FormQuestion<T extends FormDataTypes> =
  | FormQSelect<T>
  | FormQInput<T>
  | FormQTextArea<T>
  | FormQRadio<T>
  | FormQDate<T>
  | FormQRange<T>
  | FormQToggle<T>
export type FormQuestionPair<T extends FormDataTypes> = [FormQuestion<T>, FormQuestion<T>]
