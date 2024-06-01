<script setup lang="ts">
import type { GroupBookingSubformDataItem } from '../../types/booking'
import { ref, watch } from 'vue'
import type {
  FormQDate,
  FormQRange,
  FormQSelect,
  FormQTextArea,
  FormQuestion
} from '../form-item/FormItem'
import FormItemGroupWithSlots from '../form-item/FormItemGroupWithSlots.vue'
import FormItem from '../form-item/FormItem.vue'
import { groupBookingFieldData } from './GroupBookingFormFields'
import ToggleSwitch from '../ToggleSwitch.vue'

const props = defineProps<{
  subformData: GroupBookingSubformDataItem[]
  subformItems: {
    tourType: FormQSelect<GroupBookingSubformDataItem>
    attendanceNumber: FormQRange<GroupBookingSubformDataItem>
    alternativeDates1: FormQDate<GroupBookingSubformDataItem>
    alternativeDates2: FormQDate<GroupBookingSubformDataItem>
    alternativeDates3: FormQDate<GroupBookingSubformDataItem>
    onsiteTravelMethod: FormQSelect<GroupBookingSubformDataItem>
    specialReq: FormQTextArea<GroupBookingSubformDataItem>
  }
}>()
const emit = defineEmits(['removeSubform', 'submit', 'subformRef'])

function removeSubform(index: number) {
  emit('removeSubform', index)
}
const subformRef = ref()
watch(subformRef, () => {
  emit('subformRef', subformRef)
})
const subformItems = ref(props.subformItems)

const showMessage = ref({ onsiteTravelMethod: false })
</script>

<template>
  <!-- Subforms Section -->
  <div class="form-wrapper">
    <form ref="subformRef" @submit.prevent="() => emit('submit', true)">
      <div
        v-for="(subform, index) in props.subformData"
        :key="index"
        class="group-form group-subform"
      >
        <div class="subform-item-wrapper">
          <span class="subform-header"
            ><p class="large">Booking {{ index + 1 }}</p>

            <div v-if="props.subformData.length != 1" class="form-item delete-button">
              <button class="word-button" type="button" @click="removeSubform(index)">
                Remove this booking
              </button>
            </div>
          </span>
          <FormItemGroupWithSlots>
            <div class="form-item">
              <FormItem :item="subformItems.tourType" :val="subform.tourType" />
            </div>

            <div class="form-item">
              <FormItem :item="subformItems.attendanceNumber" :val="subform.attendanceNumber" />
            </div>
            <div class="form-item">
              <FormItem :item="subformItems.alternativeDates1" :val="subform.alternativeDates1" />
            </div>
            <div class="form-item">
              <FormItem :item="subformItems.alternativeDates2" :val="subform.alternativeDates2" />
            </div>
            <div class="form-item">
              <FormItem :item="subformItems.alternativeDates3" :val="subform.alternativeDates3" />
            </div>
            <div class="form-item">
              <!-- <div class="info-box">
                <h5>Campus transport</h5>
                <br />
                <p>
                  ANSTO requires visitors to have transport around campus for the tour. <br /><br />
                  <strong> It is highly recommended that you bring your own bus and driver.</strong>
                  <br /><br />
                </p>
                <div class="small-text">
                  <p>
                    *Please note that the bus and driver must remain onsite for the duration of the
                    tour.
                  </p>
                </div>
              </div> -->
              <FormItem
                :item="subformItems.onsiteTravelMethod"
                :val="subform.onsiteTravelMethod"
                :message="{
                  show: false,
                  type: 'warn',
                  title: 'Warning',
                  value: `Please understand that the driver and bus must remain within ANSTO for the duration of the tour.`
                }"
                @value-change="
                  (v) => {
                    subform.onsiteTravelMethod = v
                    showMessage.onsiteTravelMethod = subform.onsiteTravelMethod.includes('bus')
                      ? true
                      : false
                    console.log(showMessage.onsiteTravelMethod)
                  }
                "
              />

              <div v-if="showMessage.onsiteTravelMethod" class="checkbox-wrapper message">
                <p>
                  <strong
                    >I understand that the driver and bus must remain within ANSTO for the duration
                    of the tour</strong
                  >
                </p>
                <label class="">
                  <input type="checkbox" true-value="yes" false-value="no" />
                  <!-- <span class="toggle-slider round"></span> -->
                </label>
              </div>
            </div>
            <!-- <div v-if="showMessage.onsiteTravelMethod" :class="`message error wide-error`">
              <strong>Attention:</strong><br>
              <p>For groups unable to bring their own bus, limited campus bus service is
              available and can be arranged in advance. Please note that this option may be subject
              to availability and specific scheduling constraints.</p> 
            </div> -->

            <div class="form-item">
              <FormItem :item="subformItems.specialReq" :val="subform.specialReq" />
            </div>
          </FormItemGroupWithSlots>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="css">
.form-wrapper:has(.group-subform) {
  flex-direction: column;
}
.form-item.delete-button {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0;
}
.form-item.delete-button > button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0.5rem 1rem;
}
.group-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
.group-form.group-subform {
  min-width: 60%;
  padding-top: 1rem;
}

.subform-header {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
}
.message.error.wide-error {
  margin: 1rem;
  border: 1px solid red;
  border-radius: 6px;
}

.info-box {
  /* border: 1px solid blue; */
  /* border-radius: 6px; */
  /* padding: 1rem; */
  margin-bottom: 2rem;
  font-size: 14px;
}

.small-text > p {
  font-size: 12px;
}
strong {
  font-weight: 700;
}

.checkbox-wrapper {
  margin-top: 2rem;
  display: flex;
  flex-direction: row-reverse;
  border: 1px solid orangered;
  padding: 1rem;
  background-color: #fff1e0;
  border-radius: 4px;
}
</style>
