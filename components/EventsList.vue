<script setup lang="ts">
import { tourTypeMap } from '@/types/booking.d'
// import { useRouter } from 'vue-router'

const router = useRouter()

const goToGroupBookingForm = (typeId:string) => {
  router.push({ name: 'GroupBookingForm', params:{id:typeId} })
}


</script>

<template>
  <div>
   
    <h2>Group Bookings</h2>
  <hr />
<div class="button-group-container">
    <button v-for="[key,value] in Object.entries(tourTypeMap)" :key="key" @click="goToGroupBookingForm(key)">{{ value }}</button>
  </div>
</div>
</template>

<style lang="css">
.button-group-container{
  display: flex;
  gap: 1rem
}
.button-group-container button{
  display: flex;
    padding: 1rem;
    align-items: center;
}
</style>