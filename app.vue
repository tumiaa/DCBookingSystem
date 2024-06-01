<script setup lang="ts">
const { $api } = useNuxtApp()
const repo = repository($api);
console.log($api, useRuntimeConfig())
// const {data:{value:{value}}} = await useAsyncData(async ()=> await $api(`/${repo.bookings.bookingsTable}`))

const data = await useAsyncData(async()=>await repo.tours.getTourNames('School Tour'));
console.log(data)
// const data = await useAsyncData(()=>repo.get(`/${repo.bookings.bookingsTable}`))
// const d = await useFetchOnLoad(`/${repo.bookings.bookingsTable}`,{default:()=>{}});
// console.log(data,d)
</script>

<template>
  <NuxtLayout>
  <!-- <component :is="$route.meta.layout || 'div'"> -->
    <NuxtPage />
  </NuxtLayout>
  <!-- </component> -->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
