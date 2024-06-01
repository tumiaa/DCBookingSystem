<script setup lang="ts">
const props = defineProps<{ title?: string }>()
</script>

<template>
  <div class="form-group">
    <p v-if="props.title" class="forms-group-title">{{ props.title }}</p>
    <hr v-if="props.title" />
    <slot />
  </div>
</template>

<style lang="css">
.form-group {
  /* border: 1px solid black; */
  /* border-radius: 20px; */
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-bottom: 1rem;
  /* max-width: 300px; */
  width: 100%;
}

.form-item-pair {
  display: flex;
  gap: 1rem;
  width: 100%;
}
.form-item-pair > .form-item-pair-item {
  display: flex;
  flex-direction: column;
  /* width:100% */
  width: max-content;
}
label {
  width: max-content;
}
.form-item-pair-item:has(.span-sized) {
  width: 100%;
}
.form-group > hr {
  margin: 0;
  margin-bottom: 1rem;
}
.form-group-title {
  font-weight: bold;
}

.form-item {
  align-self: center;
  display: flex;
  flex-direction: column;
  /* width: 70%; */
  width: 100%;
  padding: 1rem;
  width: min(100%, 400px);
  margin-block: 1rem;
}
</style>
