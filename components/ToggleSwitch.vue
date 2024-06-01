<script setup lang="ts">
import { ref, watch } from 'vue'
import type { FormQToggle } from './form-item/FormItem'
import type { GroupBookingFormData, GroupBookingSubformDataItem } from '@/types/booking'

const props = defineProps<{
  item: FormQToggle<GroupBookingFormData> | FormQToggle<GroupBookingSubformDataItem>
  value: boolean
}>()
const emits = defineEmits(['update-value'])
const val = ref(props.value)
// const stringToBoolean =(str:'yes'|'no')=>{
//     return str == 'yes' ? true : false
// }

// const boolToStr =(bool:boolean)=>{
//   return bool? 'yes':'no'
// }
// const boolVal = ref(stringToBoolean(val.value))

watch(val, (v) => {
  emits('update-value', v)
})
</script>

<template>
  <div class="toggle-wrapper">
    <p>{{ props.item.label }}</p>
    <label class="switch">
      <input type="checkbox" v-model="val" true-value="yes" false-value="no" />
      <span class="toggle-slider round"></span>
    </label>
  </div>
</template>

<style lang="css">
.toggle-wrapper {
  display: flex;
  gap: 1rem;
}
.switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 18px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  display: flex;
  align-items: center;
}

.toggle-slider:before {
  position: absolute;
  content: '';
  height: 13px;
  width: 13px;
  left: 2px;

  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .toggle-slider {
  background-color: #2196f3;
}

input:focus + .toggle-slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .toggle-slider:before {
  -webkit-transform: translateX(13px);
  -ms-transform: translateX(13px);
  transform: translateX(13px);
}

/* Rounded toggle-sliders */
.toggle-slider.round {
  border-radius: 34px;
}

.toggle-slider.round:before {
  border-radius: 50%;
}
</style>
