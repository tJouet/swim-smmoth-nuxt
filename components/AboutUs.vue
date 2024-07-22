<template>
  <div
    class="h-screen bg-cover bg-center"
    style="background-image: url('/img/bgImage.jpg')"
  >
    <div class="p-10 flex flex-col h-full bg-green-200">
      <div class="flex flex-row justify-center md:justify-start">
        <StickyTitle :isReflected="true" title="About Us" />
        <Title :title="'Our staff'" :isReflected="true" class="pb-8 md:pl-6" />
      </div>
      <div class="w-full md:pl-48 flex flex-row items-center md:items-start">
        <div class="w-full md:hidden block">
          <carousel :items-to-show="1" :wrapAround="true">
            <slide
              v-for="staff in FakeData.staff"
              :key="staff.id"
              class="bg-darkBlue/50 p-4 rounded-3xl"
            >
              <StaffPresentation
                :job-description="staff.jobDescription"
                :job-title="staff.jobTitle"
                :name="staff.name"
            /></slide>
            <template #addons>
              <pagination />
            </template>
          </carousel>
        </div>
        <div
          v-for="staff in FakeData.staff"
          :key="staff.id"
          class="hidden md:flex flex-row justify-center items-center bg-gray-600 h-full"
        >
          <StaffPresentation
            :job-description="staff.jobDescription"
            :job-title="staff.jobTitle"
            :name="staff.name"
          />
        </div>
      </div>
      <!-- <div class="flex flex-col h-full items-center justify-end w-[50%]">
        <Testimonies class="translate-x-[-150px]" />
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import {
  Carousel,
  Slide,
  Pagination,
  Navigation,
} from "vue3-carousel/dist/carousel.es.js";
import { Title, StickyTitle, StaffPresentation } from "@/atoms";
import FakeData from "@/data.json";
</script>

<!-- https://www.sebastianlundberg.dk/personlig-traening -->
<!--https://www.airnauts.com/  -->
