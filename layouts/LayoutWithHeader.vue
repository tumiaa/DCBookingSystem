<script setup lang="ts">
import GlobalHeader from '../components/GlobalHeader.vue'
// import { useRoute } from 'vue-router'
import { computed } from 'vue'

import { tourTypeMap } from '@/types/booking.d';

const route = useRoute()

const routeTitle = computed(()=>route.meta.title)
const routeSubtitle= computed(()=>{ return route.name==='EventsList'? undefined: tourTypeMap[route.params.id as keyof typeof tourTypeMap]})
const routeBackName = computed(()=>{return route.name==='EventsList'? undefined : 'EventsList'})

</script>

<template>
  <header class="header-body layout-w-header">
    <GlobalHeader :back-route-name="routeBackName">{{ routeTitle }}{{routeSubtitle? ': '+routeSubtitle:'' }}</GlobalHeader>
  </header>
  <main class="main-body layout-w-header">
    <slot />
  </main>
</template>

<style>
.layout-w-header {
  --header-height: 3rem;
  --layoutYPadding: 3rem;
  --layoutXPadding: 1rem;

  height: var(--header-height);
  margin-bottom: calc(var(--layoutYPadding) / 2);
}
.header-boyd.layout-w-header {
  /* margin-bottom: calc(var(--header-height) + var(--layoutYPadding)); */
}
.main-body.layout-w-header {
  padding: var(--layoutXPadding) var(--layoutYPadding);
}
.main-body.layout-w-header > div {
  /* margin-top: calc(var(--header-height) + var(--layoutYPadding)); */
}
body {
  display: flex;
  flex-direction: column;
}
@media (max-width: 500px) {
  .layout-w-header {
    --header-height: 3rem;
    --layoutYPadding: 1.5rem;
    --layoutXPadding: 0.5rem;

    height: var(--header-height);
    margin-bottom: calc(var(--layoutYPadding) / 2);
  }
}
</style>
