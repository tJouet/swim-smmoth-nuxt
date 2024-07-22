<template>
  <!-- <div
    @mouseover="startAnimation"
    @mouseout="resetAnimation"
    class="flex flex-col rounded-full p-6 bg-transpDarkBlue hover:bg-darkBlue justify-center items-center"
    :class="{ 'box-expanded': isExpanded, 'box-contracted': !isExpanded }"
  > -->
  <div
    class="flex flex-col rounded-full justify-center items-center md:bg-red-300"
  >
    <img
      src="/img/coachTraining.jpg"
      alt="staff profil picture"
      class="rounded-full w-[150px] h-[150px] object-cover"
    />
    <div class="flex flex-col justify-center items-center">
      <h2 class="font-bold text-2xl flex flex-col gap-2 whitespace-nowrap py-2">
        {{ name }}
      </h2>
      <p class="text-lg font-bold pb-2">{{ jobTitle }}</p>
      <p class="text-justify">
        {{ jobDescription }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: String,
  jobTitle: String,
  image: String,
  jobDescription: String,
});

var isExpanded = ref(false);
const startAnimation = () => {
  isExpanded.value = true;
};
const resetAnimation = () => {
  isExpanded.value = false;
};
</script>

<style>
.box-expanded {
  width: 100%;
  opacity: 1;
  transition: width 0.5s ease-in-out, background-color 0.5s ease-in-out,
    opacity 0.5s ease-in-out;
}
.box-contracted {
  width: 500px;
  transition: width 0.5s ease-in-out, background-color 0.5s ease-in-out;
}
.text-display {
  opacity: 1;
  transition: width 0.5s ease-in-out, opacity 0.5 ease-in;
}
.text-hide {
  opacity: 0;
  width: 0%;
  overflow: hidden;
  transition: width 0 0.5s ease-in-out, opacity 0.5 ease-out;
}
.middle-text-hide {
  opacity: 0;
  width: 0%;
  height: 0%;
  overflow: hidden;
  transition: width 0 0.5s ease-in-out, opacity 0.5 ease-out;
}
</style>
