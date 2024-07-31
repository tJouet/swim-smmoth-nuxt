<template>
  <div
    class="flex flex-col md:flex-row-reverse justify-between items-center w-[400px] h-[500px] md:w-full md:h-[800px] bg-transpDarkBlue md:bg-transparent rounded-3xl p-6 md:p-0"
  >
    <img
      :src="pic"
      alt="staff profil picture"
      class="object-cover md:w-[40%] md:h-full w-[150px] h-[150px] rounded-full md:rounded-none"
    />
    <div
      class="flex flex-col justify-center items-center md:bg-transpDarkBlue md:p-6 md:ml-2 md:rounded-l-3xl md:h-full md:py-8 md:gap-6"
    >
      <h2
        class="font-bold text-2xl md:text-6xl flex flex-col gap-2 whitespace-nowrap py-2"
      >
        {{ name }}
      </h2>
      <p class="text-lg md:text-4xl font-bold pb-2">{{ jobTitle }}</p>
      <p class="text-justify md:p-6 md:text-xl">
        {{ jobDescription }}
      </p>
      <div class="flex flex-row w-full justify-evenly">
        <div
          v-for="award in props.awards"
          class="flex flex-col justify-center items-center gap-2"
        >
          <img :src="award.src" class="md:h-8 md:w-8" />
          <p class="text-xl">{{ award.name }}</p>
          <p>({{ award.year }})</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Award {
  name: string;
  year: string;
  src: string;
}
const props = defineProps({
  name: String,
  pic: String,
  jobTitle: String,
  image: String,
  jobDescription: String,
  awards: Array as PropType<Award[]>,
});
</script>
