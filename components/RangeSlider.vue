<script setup lang="ts">
import { ref, watch, type Ref } from 'vue'
const props = defineProps<{ value: number; min: number; max: number; maxWidth?: number }>()
const emits = defineEmits(['update-value'])
const getVal = (num: number | null | string) => {
  let x = num
  if (!x) {
    return null
  }
  if (typeof x == 'string') {
    x = parseInt(x)
  }
  if (x > props.max) {
    return props.max
  }
  if (x < props.min) {
    return props.min
  }
  return x
}
const val: Ref<number | null> = ref(props.value)

watch(val, (v) => {
  if (typeof val.value == 'string') {
    val.value = parseInt(val.value)
  }
  val.value = getVal(v)
  emits('update-value', val.value)
})
</script>

<template>
  <div class="range-slider">
    <input
      inputmode="numeric"
      type="range"
      :min="props.min"
      :max="props.max"
      v-model="val"
      class="slider"
    />
    <input
      type="number"
      v-model="val"
      :maxlength="props.maxWidth"
      :size="props.maxWidth"
      :class="props.maxWidth ? 'sized' : ''"
      :min="props.min"
      :max="props.max"
    />
  </div>
</template>

<style lang="css">
.range-slider {
  display: flex;
  gap: 1rem;
}
</style>
