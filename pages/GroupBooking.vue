<script setup lang="ts">
import { onMounted, ref, watch, type Ref } from "vue";
import GroupBookingSubform from '@/components/booking-forms/GroupBookingSubform.vue'
// import { useBookingStore } from '@/stores/booking'
import {
  tourTypeMap,
  type GroupBookingFormData,
  type GroupBookingSubformDataItem,
  type GroupBookingSubformOptions,
} from "@/types/booking.d";
// import { useRoute } from "vue-router";
import {
  groupBookingDefaults,
  groupBookingFieldData,
  type SubformFields,
} from "~/components/booking-forms/GroupBookingFormFields";
// import FormItemGroupWithSlots from '@/components/form-item/FormItemGroupWithSlots.vue'
import type {
  FormQuestion,
  FormQuestionPair,
} from "@/components/form-item/FormItem";
// import { useBookingStore } from '~/store/booking'
// import FormItem from '@/components/form-item/FormItem.vue'
// import { definePageMeta } from 'nuxt/dist/pages/runtime';

definePageMeta({
  layout: "layout-with-header",
  path: "/group-booking/:id",
  name: "GroupBookingForm",
  params: { id: "school" },
  title:'Group Bookings'
});
// const bookingStore = useBookingStore()
const subformData: Ref<GroupBookingSubformDataItem[]> = ref([
  groupBookingDefaults.subform,
]);

function addSubform() {
  if (subformData.value.length >= 15) return;
  subformData.value.push(groupBookingDefaults.subform);
}

function removeSubform(index: number) {
  subformData.value.splice(index, 1);
}

const formData: Ref<GroupBookingFormData> = ref();
formData.value = groupBookingDefaults.form;

let myFormRef: Ref<any>;
let mySubformRef: Ref<any>;

async function submitForm() {
  // await bookingStore.submitGroupBooking(formData.value, subformData.value)
}

const subformBookingCat: Ref<GroupBookingSubformOptions> = ref({
  tourNames: [],
  tourType: "",
});
const subformItems = ref(groupBookingFieldData.subform);

const getTourTypeSelectOpts = async (initSubformItems: {
  tourType: {
    id: keyof GroupBookingSubformDataItem;
    label?: string | undefined;
    required: boolean;
    maxWidth?: number | undefined;
    type: "select" | "combobox";
    options: {
      defaultValue?: string | boolean | undefined;
      values: (
        | { value: string; displayValue: string }
        | { value: string | boolean; displayValue: string }
      )[];
    };
  };
  attendanceNumber: {
    id: keyof GroupBookingSubformDataItem;
    label?: string | undefined;
    required: boolean;
    maxWidth?: number | undefined;
    type: "range";
    min: number;
    max: number;
  };
  alternativeDates1: {
    id: keyof GroupBookingSubformDataItem;
    label?: string | undefined;
    required: boolean;
    maxWidth?: number | undefined;
    type: "date";
  };
  alternativeDates2: {
    id: keyof GroupBookingSubformDataItem;
    label?: string | undefined;
    required: boolean;
    maxWidth?: number | undefined;
    type: "date";
  };
  alternativeDates3: {
    id: keyof GroupBookingSubformDataItem;
    label?: string | undefined;
    required: boolean;
    maxWidth?: number | undefined;
    type: "date";
  };
  onsiteTravelMethod: {
    id: keyof GroupBookingSubformDataItem;
    label?: string | undefined;
    required: boolean;
    maxWidth?: number | undefined;
    type: "select" | "combobox";
    options: {
      defaultValue?: string | boolean | undefined;
      values: (
        | { value: string; displayValue: string }
        | { value: string | boolean; displayValue: string }
      )[];
    };
  };
  specialReq: {
    id: keyof GroupBookingSubformDataItem;
    label?: string | undefined;
    required: boolean;
    maxWidth?: number | undefined;
    type: "textarea";
    placeholder?: string | undefined;
  };
}) => {
  // const tourType = tourTypeMap[useRoute().params.id as keyof typeof tourTypeMap]
  // const tourNames = await bookingStore.getTourNames(tourType)
  // const initTourTypes = initSubformItems.tourType
  // console.log(`found type: ${tourType}, returned with`)
  // console.log(tourNames)
  // let mapped: SubformFields = {
  //   ...initSubformItems,
  //   tourType: {
  //     ...initTourTypes,
  //     options: { ...initTourTypes.options, values: tourNames }
  //   }
  // }
  // return mapped
};
onMounted(async () => {
  // subformItems.value = await getTourTypeSelectOpts(subformItems.value)
});

const handleFormDataChange = (newFormValues: GroupBookingFormData) => {
  formData.value = newFormValues;
  console.log(formData.value, subformData.value);
};

const getId = (
  item:
    | (
        | FormQuestion<GroupBookingFormData>
        | FormQuestionPair<GroupBookingFormData>
      )
    | (
        | FormQuestion<GroupBookingSubformDataItem>
        | FormQuestionPair<GroupBookingSubformDataItem>
      )
) => {
  return Array.isArray(item) ? item[0].id + item[1].id : item.id;
};

const {
  addressCity,
  addressCountry,
  addressPostcode,
  addressState,
  addressStreet,
  businessPhone,
  email,
  firstName,
  howDidYouHear,
  lastName,
  phoneNumber,
  schoolName,
  sendMarketingEmail,
} = groupBookingFieldData.form;

watch(formData, (s) => {
  console.log(s);
  console.log(subformData.value);
});
</script>

<template>
  <div class="page-title">
    <!-- <h2>Add Your Details</h2>
    <hr /> -->
  </div>

  <div
    class="form-wrapper"
    @click="
      () => {
        // console.log(bookingStore.parseCustomerPostData(formData))
      }
    "
  >
    <form
      ref="myFormRef"
      @submit.prevent="() => submitForm"
      class="form"
      autocomplete="on"
    >
      <FormItemGroupWithSlots>
        <div class="form-item" :key="getId(firstName)">
          <FormItem
            :item="firstName"
            :val="formData.firstName"
            @value-change="(v) => (formData.firstName = v)"
          />
        </div>
        <div class="form-item" :key="getId(lastName)">
          <FormItem
            :item="lastName"
            :val="formData.lastName"
            @value-change="(v) => (formData.lastName = v)"
          />
        </div>
        <div class="form-item" :key="getId(email)">
          <FormItem
            :item="email"
            :val="formData.email"
            @value-change="(v) => (formData.email = v)"
          />
        </div>
        <div class="form-item" :key="getId(phoneNumber)">
          <FormItem
            :item="phoneNumber"
            :val="formData.phoneNumber"
            @value-change="(v) => (formData.phoneNumber = v)"
          />
        </div>

        <!-- <div v-if="showMessage[idx]">{{ item.message }}</div> -->
      </FormItemGroupWithSlots>

      <FormItemGroupWithSlots title="School Information">
        <div class="form-item" :key="getId(schoolName)">
          <FormItem
            :item="schoolName"
            :val="formData.schoolName"
            @value-change="(v) => (formData.schoolName = v)"
          />
        </div>
        <div class="form-item" :key="getId(businessPhone)">
          <FormItem
            :item="businessPhone"
            :val="formData.businessPhone"
            @value-change="(v) => (formData.businessPhone = v)"
          />
        </div>
        <div class="form-item" :key="getId(addressStreet)">
          <FormItem
            :item="addressStreet"
            :val="formData.addressStreet"
            @value-change="(v) => (formData.addressStreet = v)"
          />
        </div>
        <div class="form-item" :key="getId(addressCity)">
          <FormItem
            :item="addressCity"
            :val="formData.addressCity"
            @value-change="(v) => (formData.addressCity = v)"
          />
        </div>
        <div class="form-item" :key="getId(addressPostcode)">
          <FormItem
            :item="addressPostcode"
            :val="formData.addressPostcode"
            @value-change="(v) => (formData.addressPostcode = v)"
          />
        </div>
        <div class="form-item" :key="getId(addressState)">
          <FormItem
            :item="addressState"
            :val="formData.addressState"
            @value-change="(v) => (formData.addressState = v)"
          />
        </div>
        <div class="form-item" :key="getId(addressCountry)">
          <FormItem
            :item="addressCountry"
            :val="formData.addressCountry"
            @value-change="(v) => (formData.addressCountry = v)"
          />
        </div>
      </FormItemGroupWithSlots>
      <FormItemGroupWithSlots title="Marketing information">
        <div class="form-item" :key="getId(howDidYouHear)">
          <FormItem
            :item="howDidYouHear"
            :val="formData.howDidYouHear"
            @value-change="(v) => (formData.howDidYouHear = v)"
          />
        </div>
        <div class="form-item" :key="getId(sendMarketingEmail)">
          <FormItem
            :item="sendMarketingEmail"
            :val="formData.sendMarketingEmail"
            @value-change="(v) => (formData.sendMarketingEmail = v)"
          />
        </div>
      </FormItemGroupWithSlots>
    </form>
  </div>
  <h2>Your bookings</h2>
  <hr />
  <GroupBookingSubform
    v-if="subformItems.tourType.options.values.length > 0"
    :subform-data="subformData"
    :subform-items="subformItems"
    @remove-subform="(idx: number) => removeSubform(idx)"
    @submit="submitForm"
    @subform-ref="(ref) => (mySubformRef = ref)"
  />
  <a class="section-line-anchor" @click="addSubform">+ Add Booking</a>
  <hr />
  <span class="submit-bar">
    <button
      type="submit"
      class="button--primary word-button"
      @click="
        () => {
          mySubformRef.requestSubmit();
          myFormRef.requestSubmit();
        }
      "
    >
      Request bookings
    </button></span
  >
</template>

<style lang="css">
.form {
  width: 70%;
}

.form-wrapper {
  display: flex;
  justify-content: center;
}
.section-line-anchor {
  display: flex;
  background-color: transparent;
  align-items: center;
  color: rgb(118, 118, 118);
}
.section-line-anchor:hover {
  cursor: pointer;
  color: hsla(160, 100%, 37%, 1);

  background-color: transparent;
}
.section-line-anchor::before,
.section-line-anchor::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid transparent;
  /* hsla(160, 100%, 37%, 1); */
}
.subform-item-wrapper {
  display: flex;
  flex-direction: column;
  /* width: auto; */
  /* align-self: center; */
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-bottom: 1rem;
  width: 75%;
}
.submit-bar {
  /* margin-top: 2rem; */
  display: flex;
  /* margin-top: 2rem; */
  margin-bottom: 2rem;
  flex-direction: row;
  justify-content: flex-end;
  /* border-top: 1px solid black; */
  padding-block: 1rem;
}
button.word-button {
  line-height: normal;
  display: flex;
  padding: 0.5rem 1rem;
  align-items: center;
}
.submit-bar > button {
  /* display: flex;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center; */
  /* border-radius: 8px; */
  /* border: 1px solid black; */

  /* justify-content: center; */
  /* border-radius: 8px; */
  /* border: 1px solid black; */
  /* width: fit-content; */
  /* vertical-align: bottom; */
}
</style>
