<template>
  <div
    @mouseover="startAnimation"
    @mouseout="resetAnimation"
    class="text-white w-full bg-cover bg-center flex justify-center items-center"
    style="
      background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
        url('/img/coachTraining.jpg');
    "
  >
    <h2
      :class="{ 'is-contract': isExpanded, 'is-expanded': !isExpanded }"
      class="text-6xl font-bold absolute hidden md:block"
    >
      {{ title }}
    </h2>
    <div
      class="p-5 flex flex-col justify-center items-center md:flex-row-reverse md:justify-between"
    >
      <img
        :src="image"
        :class="{
          'is-expanded': isExpanded && !isSmallScreen,
          'is-contract': !isExpanded && !isSmallScreen,
        }"
        class="h-[210px] w-[315px] object-cover rounded-[30px] md:translate-x-[-20px] overflow-hidden border-2 border-clearBlue"
      />
      <p
        class="my-4 hidden md:block w-[50%] text-lg font-bold strokedtextsm"
        :class="{
          'text-is-expanded': isExpanded || isSmallScreen,
          'text-is-contract': !isExpanded,
        }"
      >
        {{ description }}
      </p>
      <h3
        :class="{
          'title-is-expanded': isExpanded,
          'title-is-contract': !isExpanded,
        }"
        class="text-2xl font-semibold mt-4 md:text-4xl md:pl-16 text-lighBlue strokedtextsm hidden md:block"
      >
        {{ title }}
      </h3>
      <h3
        class="text-2xl font-semibold mt-4 md:text-4xl md:pl-16 text-lighBlue strokedtextsm block md:hidden"
      >
        {{ title }}
      </h3>
      <p class="font-light my-4 md:hidden">
        {{ description }}
      </p>
      <!-- Add later -->
      <!-- <a :href="link" class="text-clearBlue md:hidden">Read more</a> -->
    </div>
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

.text-is-expanded {
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

.text-is-contract {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.title-is-expanded {
  transform: translateX(-20px);
  opacity: 1;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.title-is-contract {
  opacity: 0;
  transform: translateX(0px);
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}
</style>
