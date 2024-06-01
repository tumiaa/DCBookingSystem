<script setup lang="ts">
import { computed, ref, watch, type Ref } from 'vue'
import type { SelectOptionsValues, SelectOptionValue } from './form-item/FormItem'
const props = defineProps<{
  data: SelectOptionsValues
  defaultValue?: string | boolean
  value: any
  id: string
  maxWidth?: number
}>()

const emit = defineEmits(['valueChange'])

const inputDisplayValue: Ref<string> = ref('')
const inputValue: Ref<string | boolean> = computed(() => {
  return props.data.find((x) => x.displayValue == inputDisplayValue.value)?.value ?? ''
})
const isDropdownOpen = ref(false)
const filteredOptions = ref(props.data)
const highlightedIndex = ref(-1)

const handleInput = () => {
  openDropdown()
  filterOptions()
}
const filterOptions = () => {
  filteredOptions.value =
    inputDisplayValue.value == ''
      ? props.data
      : props.data.filter((option) =>
          option.displayValue.toLowerCase().includes(inputDisplayValue.value.toLowerCase())
        )
  highlightedIndex.value = -1
}

const selectOption = (option: SelectOptionValue) => {
  inputDisplayValue.value = option.displayValue
  closeDropdown()
}

const highlightNext = () => {
  if (highlightedIndex.value < filteredOptions.value.length - 1) {
    highlightedIndex.value++
  }
}

const highlightPrevious = () => {
  if (highlightedIndex.value > 0) {
    highlightedIndex.value--
  }
}

const selectHighlighted = () => {
  if (highlightedIndex.value !== -1) {
    selectOption(filteredOptions.value[highlightedIndex.value])
  }
}

const closeDropdown = () => {
  isDropdownOpen.value = false
}

const openDropdown = () => {
  isDropdownOpen.value = true
}

watch(inputDisplayValue, filterOptions)
watch(inputValue, () => {
  emit('valueChange', inputValue.value)
})
</script>
<template>
  <div class="combobox">
    <input
      v-model="inputDisplayValue"
      @input="handleInput"
      @click="openDropdown"
      @focus="openDropdown"
      @keydown.down.prevent="highlightNext"
      @keydown.up.prevent="highlightPrevious"
      @keydown.enter.prevent="selectHighlighted"
      @blur="closeDropdown"
      type="text"
      :id="props.id"
      :class="props.maxWidth ? 'sized' : 'span-sized'"
    />
    <ul
      v-if="isDropdownOpen"
      :class="`dropdown ${filteredOptions.length > 1 ? 'scroll' : ''} ${props.maxWidth ? 'sized' : 'span-sized'}`"
    >
      <li
        v-for="(option, index) in filteredOptions"
        :key="index"
        :class="{ highlighted: index === highlightedIndex }"
        @mousedown="selectOption(option)"
        @mouseover="
          () => {
            highlightedIndex = index
          }
        "
      >
        {{ option.displayValue }}
      </li>
    </ul>
  </div>
</template>

<style>
.combobox {
  position: relative;
  /* width: 200px; */
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  background-color: #fff;
  border: 1px solid #ccc;
  list-style-type: none;
  margin: 0;
  padding: 0;
  max-height: 125px;
}
.scroll {
  overflow-y: scroll;
}
.dropdown li {
  padding: 8px 10px;
  cursor: pointer;
}

.dropdown li.highlighted {
  background-color: #f0f0f0;
}
</style>
