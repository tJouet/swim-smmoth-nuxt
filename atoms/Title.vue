<template>
  <h1
    :class="{ 'reflected-title': isReflected }"
    class="md:text-6xl text-4xl md:font-bold font-semibold"
  >
    {{ title }}
  </h1>
</template>

<script setup lang="ts">
defineProps({
  isReflected: Boolean,
  title: String,
});
</script>
<style></style>
