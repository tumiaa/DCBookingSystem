<script setup lang="ts">
import { ref, watch, type Ref } from "vue";
import type { FormQuestion } from "./FormItem";
import RadioButtons from "../RadioButtons.vue";
import RangeSlider from "../RangeSlider.vue";
import ToggleSwitch from "../ToggleSwitch.vue";
import type {
  GroupBookingFormData,
  GroupBookingSubformDataItem,
} from "@/types/booking";
import ComboBox from "../ComboBox.vue";

const props = defineProps<{
  item:
    | FormQuestion<GroupBookingFormData>
    | FormQuestion<GroupBookingSubformDataItem>;
  val: any;
  message?: {
    show: boolean;
    type: "error" | "info" | "warn";
    value: string;
    title?: string;
  };
}>();
const emits = defineEmits(["valueChange"]);

const value = ref(props.val);
const item: Ref<
  FormQuestion<GroupBookingFormData> | FormQuestion<GroupBookingSubformDataItem>
> = ref(props.item);
watch(value, () => {
  console.log("emitting from formItem:", value.value);

  emits("valueChange", value.value);
});
</script>

<template>
  <label v-if="item.label && item.type != 'toggle'" :for="item.id">{{
    item.label
  }}</label>
  <input
    v-if="item.type == 'input'"
    :id="item.id"
    v-model="value"
    :placeholder="item.placeholder"
    :required="item.required"
    type="text"
    :size="item.maxWidth"
    :class="item.maxWidth ? 'sized' : 'span-sized'"
  />
  <ComboBox
    v-else-if="item.type == 'combobox'"
    :value="value"
    :id="item.id"
    :data="item.options.values"
    :default-value="item.options.defaultValue"
    :maxWidth="item.maxWidth"
    @value-change="(v) => (value = v)"
  />

  <select
    v-else-if="item.type == 'select'"
    :id="item.id"
    v-model="value"
    :required="item.required"
    :style="{ width: `${item.maxWidth}px` }"
    :class="item.maxWidth ? 'sized' : 'span-sized'"
  >
    <option
      v-for="opt in item.options?.values"
      :key="opt.displayValue"
      :value="opt.value"
      :name="opt.displayValue"
      :selected="opt.value == item.options.defaultValue"
    >
      {{ opt.displayValue }}
    </option>
  </select>

  <textarea
    v-else-if="item.type == 'textarea'"
    row="4"
    :id="item.id"
    v-model="value"
    :placeholder="item.placeholder"
    :required="item.required"
  />

  <RadioButtons
    v-else-if="item.type == 'radio'"
    :item="item"
    :value="value"
    @update-value="(v) => (value = v)"
  />
  <input
    v-else-if="item.type == 'date'"
    :id="item.id"
    v-model="value"
    :required="item.required"
    type="date"
    :size="item.maxWidth"
    :class="item.maxWidth ? 'sized' : 'span-sized'"
  />

  <RangeSlider
    v-else-if="item.type == 'range'"
    :max="item.max"
    :min="item.min"
    :value="typeof value == 'string' ? parseInt(value) : value"
    @update-value="(v) => (value = v)"
    :max-width="item.maxWidth"
  />
  <ToggleSwitch
    v-else-if="item.type == 'toggle'"
    :item="item"
    :value="value"
    @update-value="(v) => (value = v)"
  />
  <div v-if="message && message.show" :class="`message ${message.type}`">
    <!-- <strong v-if="message.title">{{ message.title }}</strong> -->
    <p>{{ message.value }}</p>
  </div>
</template>

<style lang="css">
.sized {
  min-width: 10px;
  /* width:max-content; */
}
.span-sized {
  width: 100%;
  min-width: 100px;
  max-width: 400px;
}

.message {
  /* color: red; */
  /* padding: 0.5rem 1rem; */
  /* border: 1px solid red; */
  /* border-radius: 6px; */
  margin-top: 2rem;
  /* color: red; */
  /* padding: 1rem; */
  /* color: red; */
  /* padding: 0.5rem 1rem; */
  /* border: 1px solid red; */
  /* border-radius: 6px; */
  /* margin-top: 2rem; */
}
.message p,
.message strong {
  font-size: 12px;
}
.message strong {
  font-weight: var(--text-h5-font-weight);
}

.message.warn {
  color: orangered;
}
.message.error {
  color: red;
}
</style>
