//@ts-nocheck
//ts doesn't like it when you use wrapper.vm.var
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ComboBox from '@/components/ComboBox.vue'

describe('ComboBox.vue', () => {
  const defaultProps = {
    data: [
      { displayValue: 'Option 1', value: '1' },
      { displayValue: 'Option 2', value: '2' },
      { displayValue: 'Number 3', value: '3' }
    ],
    value: '',
    id: 'test-combobox'
  }

  it('renders correctly with default props', () => {
    const wrapper = mount(ComboBox, { props: defaultProps })
    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('ul').exists()).toBe(false)
  })

  it('opens the dropdown on input click', async () => {
    const wrapper = mount(ComboBox, { props: defaultProps })
    const input = wrapper.find('input')
    await input.trigger('click')
    expect(wrapper.find('ul').exists()).toBe(true)
  })
  it('opens the dropdown on input focus', async () => {
    const wrapper = mount(ComboBox, { props: defaultProps })
    const input = wrapper.find('input')
    await input.trigger('focus')
    expect(wrapper.find('ul').exists()).toBe(true)
  })

  it('filters options based on input', async () => {
    const wrapper = mount(ComboBox, { props: defaultProps })
    const input = wrapper.find('input')

    await input.setValue('Option 1')
    expect(wrapper.vm.filteredOptions).toEqual([{ displayValue: 'Option 1', value: '1' }])

    await input.setValue('Option')
    expect(wrapper.vm.filteredOptions).toEqual([
      { displayValue: 'Option 1', value: '1' },
      { displayValue: 'Option 2', value: '2' }
    ])
  })

  it('highlights the next option on down arrow key press', async () => {
    const wrapper = mount(ComboBox, { props: defaultProps })
    const input = wrapper.find('input')
    await input.trigger('click')
    await input.trigger('keydown.down')
    expect(wrapper.vm.highlightedIndex).toBe(0)
    await input.trigger('keydown.down')
    expect(wrapper.vm.highlightedIndex).toBe(1)
  })

  it('highlights the previous option on up arrow key press', async () => {
    const wrapper = mount(ComboBox, { props: defaultProps })
    const input = wrapper.find('input')
    await input.trigger('click')
    await input.trigger('keydown.down')
    await input.trigger('keydown.down')
    await input.trigger('keydown.up')
    expect(wrapper.vm.highlightedIndex).toBe(0)
  })

  it('selects the highlighted option on enter key press', async () => {
    const wrapper = mount(ComboBox, { props: defaultProps })
    const input = wrapper.find('input')
    await input.trigger('click')
    await input.trigger('keydown.down')
    await input.trigger('keydown.enter')
    expect(wrapper.vm.inputDisplayValue).toBe('Option 1')
    expect(wrapper.vm.inputValue).toBe('1')
  })
  it('selects the clicked option', async () => {
    const wrapper = mount(ComboBox, { props: defaultProps })
    const input = wrapper.find('input')
    await input.trigger('click')
    input.setValue('Option 2')

    const option = wrapper.find('li')
    await option.trigger('click')

    expect(wrapper.vm.inputDisplayValue).toBe('Option 2')
    expect(wrapper.vm.inputValue).toBe('2')
  })

  it('closes the dropdown on input blur', async () => {
    const wrapper = mount(ComboBox, { props: defaultProps })
    const input = wrapper.find('input')
    await input.trigger('click')
    expect(wrapper.vm.isDropdownOpen).toBe(true)
    await input.trigger('blur')
    expect(wrapper.vm.isDropdownOpen).toBe(false)
  })

  it('emits the chosen value', async () => {
    const wrapper = mount(ComboBox, { props: defaultProps })
    const input = wrapper.find('input')
    await input.trigger('click')
    await input.setValue('Option 1')
    expect(wrapper.vm.inputValue).toBe('1')
    expect(wrapper.emitted().valueChange).toBeTruthy()
    expect(wrapper.emitted().valueChange[0]).toEqual(['1'])
  })
})
