import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import FormItem from '@/components/form-item/FormItem.vue'
import { dummyItem } from './formItemDummyData'
describe('FormItem.vue', () => {
  it('Input: Renders correctly and emits valueChanged', async () => {
    const wrapper = mount(FormItem, {
      props: dummyItem.input
    })

    const input = wrapper.find('input[type="text"]')
    await input.setValue('Test Value')
    expect(wrapper.emitted().valueChange).toBeTruthy()
    expect(wrapper.emitted().valueChange[0]).toEqual(['Test Value'])
  })

  it('Combobox: Renders correctly', async () => {
    const props = dummyItem.combobox
    const wrapper = mount(FormItem, {
      props
    })

    const comboBox = wrapper.findComponent({ name: 'ComboBox' })
    expect(comboBox.exists()).toBe(true)
  })
  it('ComboBox: Emits correctly', async () => {
    const props = dummyItem.combobox
    const wrapper = mount(FormItem, {
      props
    })

    const comboBox = wrapper.findComponent({ name: 'ComboBox' })
    expect(comboBox.exists()).toBe(true)
    const comboboxInput = await comboBox.find('input')
    await comboboxInput.setValue('Option 1')

    expect(comboBox.vm.value).toBe('1')
    expect(wrapper.emitted().valueChange).toBeTruthy()
    expect(wrapper.emitted().valueChange[0]).toEqual(['1'])
  })

  it('Select: Renders correctly', async () => {
    const props = dummyItem.select
    const wrapper = mount(FormItem, {
      props
    })

    const select = wrapper.find('select')
    expect(select.exists()).toBe(true)
    expect(select.findAll('option').length).toBe(props.item.options.values.length)
  })

  it('TextArea: Renders correctly', async () => {
    const props = dummyItem.textarea
    const wrapper = mount(FormItem, {
      props
    })

    const textarea = wrapper.find('textarea')
    expect(textarea.exists()).toBe(true)
  })

  it('Radio Buttons: Renders Correctly', async () => {
    const props = dummyItem.radio
    const wrapper = mount(FormItem, {
      props
    })
    const radioButtons = wrapper.findComponent({ name: 'RadioButtons' })
    expect(radioButtons.exists()).toBe(true)
  })

  it('Date Input: Renders Correctly', async () => {
    const props = dummyItem.date
    const wrapper = mount(FormItem, {
      props
    })

    const dateInput = wrapper.find('input[type="date"]')
    expect(dateInput.exists()).toBe(true)
  })

  it('Range Slider: Renders Correctly', async () => {
    const props = dummyItem.range
    const wrapper = mount(FormItem, {
      props
    })

    const rangeSlider = wrapper.findComponent({ name: 'RangeSlider' })
    expect(rangeSlider.exists()).toBe(true)
  })

  it('Toggle Switch: Renders Correctly', async () => {
    const props = dummyItem.toggle
    const wrapper = mount(FormItem, {
      props
    })

    const toggleSwitch = wrapper.findComponent({ name: 'ToggleSwitch' })
    expect(toggleSwitch.exists()).toBe(true)
  })

  it('displays message correctly', async () => {
    const wrapper = mount(FormItem, {
      props: dummyItem.input
    })

    const message = wrapper.find('.message.info')
    expect(message.exists()).toBe(true)
    expect(message.text()).toContain(dummyItem.input.message?.value)
  })
})
