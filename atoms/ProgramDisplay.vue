<template>
  <div
    @mouseover="startAnimation"
    @mouseout="resetAnimation"
    class="p-5 flex flex-col justify-center items-center md:flex-row-reverse md:justify-between md:border-b-2 md:border-white"
  >
    <img
      :src="image"
      :class="{
        'is-expanded': isExpanded,
        'is-contract': !isExpanded,
      }"
      class="h-[210px] w-[315px] object-cover rounded-[30px] md:translate-x-[-20px] overflow-hidden border-2 border-clearBlue"
    />
    <h3
      :class="{
        'title-is-expanded': isExpanded,
        'title-is-contract': !isExpanded,
      }"
      class="text-2xl font-semibold mt-4 md:text-5xl md:pl-32 text-lightGrey"
    >
      {{ title }}
    </h3>
    <p class="font-light my-4 md:hidden">
      {{ description }}
    </p>
    <a :href="link" class="text-clearBlue md:hidden">Read more</a>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps({
  title: String,
  description: String,
  link: String,
  image: String,
});

var isExpanded = ref(false);
const startAnimation = () => {
  isExpanded.value = true;
};

const resetAnimation = () => {
  isExpanded.value = false;
};
</script>

<style scoped>
.is-expanded {
  color: white;
  transform: translateX(0px);
  opacity: 1;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}
.is-contract {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.title-is-expanded {
  color: aqua;
}
</style>
