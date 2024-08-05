<template>
  <p
    :class="{ 'reflected-title': isReflected }"
    class="sticky top-5 text-2xl font-semibold self-start mx-5 whitespace-nowrap hidden md:block text-white"
  >
    {{ title }}
  </p>
</template>

<script setup lang="ts">
defineProps({
  isReflected: Boolean,
  title: String,
});
</script>
<style>
.reflected-title {
  -webkit-box-reflect: below -15px linear-gradient(transparent, rgba(0, 0, 0, 0.5));
}
</style>
