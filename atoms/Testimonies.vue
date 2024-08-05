<template>
  <div class="flex flex-row md:mt-24 mt-6 justify-end strokedtextsm">
    <img
      src="/img/quote.svg"
      class="md:-translate-y-24 -translate-y-4 h-[20px] md:h-auto"
    />
    <div class="flex flex-col items-end justify-end md:ml-6 ml-2">
      <p class="md:text-4xl italic reflected">
        {{ content }}
      </p>
      <p class="md:py-2 font-bold md:text-2xl">{{ name }}</p>
      <p class="italic">{{ occupation }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";

const props = defineProps({
  content: String,
  name: String,
  occupation: String,
});
</script>
<style>
.reflected {
  -webkit-box-reflect: below -15px linear-gradient(transparent, rgba(0, 0, 0, 0.5));
}
</style>
