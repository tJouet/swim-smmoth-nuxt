<template>
  <div
    class="h-auto bg-cover bg-center"
    style="background-image: url('/img/bgImage.jpg')"
  >
    <div class="p-10 h-full flex flex-col">
      <!-- Start title div -->
      <div class="flex flex-row justify-center md:justify-start">
        <StickyTitle :isReflected="true" title="About Us" />
        <Title :title="'Our staff'" :isReflected="true" class="pb-8 md:pl-6" />
      </div>
      <!-- End title div -->
      <!-- Start phone div -->
      <div class="w-full md:hidden block">
        <carousel :items-to-show="1" :wrapAround="true">
          <slide v-for="staff in FakeData.staff" :key="staff.id">
            <StaffPresentation
              :pic="staff.pic"
              :job-description="staff.jobDescription"
              :job-title="staff.jobTitle"
              :name="staff.name"
          /></slide>
          <template #addons>
            <pagination />
          </template>
        </carousel>
      </div>
      <!-- End phone div -->
      <!-- Start comp div -->
      <div class="hidden md:block">
        <carousel :items-to-show="1" :wrapAround="true">
          <slide
            v-for="staff in FakeData.staff"
            :key="staff.id"
            class="w-full pl-4"
          >
            <StaffPresentation
              :pic="staff.pic"
              :job-description="staff.jobDescription"
              :job-title="staff.jobTitle"
              :name="staff.name"
              :awards="staff.awards"
            />
          </slide>
          <template #addons>
            <navigation />
          </template>
        </carousel>
      </div>
      <!-- End comp div -->
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
