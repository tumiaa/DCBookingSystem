<script setup lang="ts">
import { computed, ref, watch, type Ref } from "vue";
import type {
  SelectOptionsValues,
  SelectOptionValue,
} from "./form-item/FormItem";

import {
  createDropdownHandler,
  createSelectHandler,
  createHighlightHandler,
} from "./ComboBox.util";
const props = defineProps<{
  data: SelectOptionsValues;
  defaultValue?: string;
  value: any;
  id: string;
  maxWidth?: number;
}>();

const emit = defineEmits(["valueChange"]);

const inputDisplayValue: Ref<string> = ref(props.defaultValue ?? "");
const inputValue: ComputedRef<string | boolean | number> = computed(() => {
  const c =
    props.data.find((x) => x.displayValue == inputDisplayValue.value)?.value ??
    "";
  return c;
});
const isDropdownOpen = ref(false);
const highlightedIndex = ref(-1);

const dropdownHandler: ComputedRef<DropdownHandler> = computed(() =>
  createDropdownHandler({ isDropdownOpen })
);

const selectHandler: ComputedRef<SelectHandler> = computed(() =>
  createSelectHandler({ inputDisplayValue }, dropdownHandler.value)
);

const highlightHandler: ComputedRef<HighlightHandler> = computed(() =>
  createHighlightHandler(
    { filteredOptions, highlightedIndex },
    selectHandler.value
  )
);

const handleInput = () => {
  highlightedIndex.value = -1;

  dropdownHandler.value.open();
};

const filteredOptions = computed(() => {
  return inputDisplayValue.value === ""
    ? props.data
    : props.data.filter((option) =>
        option.displayValue
          .toLowerCase()
          .includes(inputDisplayValue.value.toLowerCase())
      );
});
watch(inputValue, () => {
  console.log('emitting from comboxbox:', inputValue.value)
  emit("valueChange", inputValue.value);
});
</script>
<template>
  <div class="combobox">
    <input
      v-model="inputDisplayValue"
      @input="handleInput"
      @click="dropdownHandler.open"
      @focus="dropdownHandler.open"
      @keydown.down.prevent="highlightHandler.next"
      @keydown.up.prevent="highlightHandler.previous"
      @keydown.enter.prevent="highlightHandler.select"
      @blur="dropdownHandler.close"
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
        @mousedown="selectHandler.select(option)"
        @mouseover="
          () => {
            highlightedIndex = index;
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
