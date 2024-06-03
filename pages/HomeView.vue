<script setup lang="ts">
// import { definePageMeta } from '';

// import EventsList from '@/components/EventsList.vue'
// import { definePageMeta } from 'nuxt/dist/pages/runtime';

definePageMeta({
  layout: "layout-with-header",
  path: "/",
  name: "EventsList",
});
</script>
<template>
  <EventsList />
</template>
