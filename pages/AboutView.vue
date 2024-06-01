<script setup lang='ts'>
// import { definePageMeta } from '';

// import { definePageMeta } from 'nuxt/dist/pages/runtime';


definePageMeta({
layout: 'layout-with-header', path:'/about'
})
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
