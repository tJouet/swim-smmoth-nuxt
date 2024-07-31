<template>
  <div
    @mouseover="startAnimation"
    @mouseout="resetAnimation"
    class="p-5 flex flex-col justify-center items-center md:flex-row-reverse md:justify-between md:border-b-2 md:border-white w-full"
  >
    <img
      :src="image"
      :class="{
        'is-expanded': isExpanded && !isSmallScreen,
        'is-contract': !isExpanded && !isSmallScreen,
      }"
      class="h-[210px] w-[315px] object-cover rounded-[30px] md:translate-x-[-20px] overflow-hidden border-2 border-clearBlue"
    />
    <h3
      :class="{
        'title-is-expanded': isExpanded || isSmallScreen,
        'title-is-contract': !isExpanded,
      }"
      class="text-2xl font-semibold mt-4 md:text-4xl md:pl-16 md:text-lightGrey text-lighBlue"
    >
      {{ title }}
    </h3>
    <p class="font-light my-4 md:hidden">
      {{ description }}
    </p>
    <!-- Add later -->
    <!-- <a :href="link" class="text-clearBlue md:hidden">Read more</a> -->
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
var isSmallScreen = ref(false);

const startAnimation = (): void => {
  isExpanded.value = true;
};

const resetAnimation = (): void => {
  isExpanded.value = false;
};

const checkScreenSize = (): void => {
  if (window.innerWidth <= 768) {
    isSmallScreen.value = true;
  }
};

onMounted((): void => window.addEventListener("resize", checkScreenSize()));
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
