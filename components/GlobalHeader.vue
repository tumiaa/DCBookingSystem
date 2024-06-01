<script setup lang="ts">
import { useRouter } from 'vue-router'
import IconLeftArrow from './icons/IconLeftArrow.vue';
const props = defineProps<{
  backRouteName?: string
}>()
const router = useRouter()
</script>

<template>
  <div class="logo global-header">
    <div v-if="props.backRouteName" class="back-button-wrapper">
      <button class="back-button word-button" @click="router.push({ name: backRouteName })"><IconLeftArrow size="1.2rem"/></button>
    </div>
    <div class="logo-wrapper">
      <img src="../assets/logo.svg" alt="Home" class="logo-img" />
    </div>
    <div class="header-title"><slot /></div>
  </div>
</template>

<style>
.logo {
  position: relative;
  /* max-width: 300px; */
  display: flex;

  /* max-width: 300px; */
  /* height: 74px; */

  /* background-color: red; */
  z-index: 5;
}
.logo-wrapper {
  max-width: 300px;
  max-height: 3rem;
  /* width: 100%; */
  margin-left: 5%;
  height: 100%;
}

.logo:focus {
  outline: 2px solid #027bc5;
}
.global-header {
  position: fixed;
  height: var(--header-height);
  padding: 0.3rem;
  margin-bottom: 1rem;
  width: 100%;
  /* padding-left: 0; */
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.14);
  background-color: var(--color-background);
  display: flex;
  align-items: center;
  /* gap: 1rem; */
}

.global-header:has(.back-button-wrapper) {
  gap: 1rem;
}
.global-header:has(.back-button-wrapper) .logo-wrapper {
  margin-left: 0;
}
.logo-img {
  width: 100%;
  height: 100%;
}

.header-title {
  width: 100%;
  margin-left: 5%;
}
/* .back-button{
  
} */
</style>
