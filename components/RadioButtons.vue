<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import type { FormQRadio } from './form-item/FormItem'
import type { GroupBookingFormData, GroupBookingSubformDataItem } from '@/types/booking'

const props = defineProps<{
  item: FormQRadio<GroupBookingFormData> | FormQRadio<GroupBookingSubformDataItem>
  value: string | boolean
}>()
const emits = defineEmits(['update-value'])
const val = ref(props.value)
const isSelected = ref(Array(props.item.options.values.length).fill(false))
onMounted(() => {
  const defaultIdx = props.item.options.values.findIndex(
    (x) => x.value == props.item.options.defaultValue
  )
  isSelected.value[defaultIdx] = true
  // val.value = props.item.options.values[defaultIdx].value;
  console.log(val.value)
})
const handleOnClick = (idx: number) => {
  isSelected.value = isSelected.value.fill(false)
  isSelected.value[idx] = true
  val.value = props.item.options.values[idx].value
  console.log(val.value)
}

watch(val, () => {
  emits('update-value', val.value)
})
</script>

<template>
  <div
    v-for="(opt, idx) in item.options.values"
    :key="opt.displayValue"
    class="radio-group"
    @click="() => handleOnClick(idx)"
  >
    <input
      :id="`${item.id}__${opt.value}`"
      v-model="val"
      :required="item.required"
      :name="`${item.id}_radio`"
      type="radio"
      :checked="isSelected[idx]"
    />
    <label :for="`${item.id}__${opt.value}`">{{ opt.displayValue }}</label>
  </div>
</template>

<style lang="css">
.radio-group {
  width: 100%;
  display: flex;
  align-items: flex-end;
}

.radio-group:hover {
  cursor: pointer;
}
</style>
