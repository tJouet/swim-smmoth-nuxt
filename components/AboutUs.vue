<template>
  <div
    class="h-screen bg-cover bg-center"
    style="background-image: url('/img/bgImage.jpg')"
  >
    <div class="md:h-screen h-[350px] p-10 flex flex-row">
      <StickyTitle :isReflected="true" title="About Us" />
      <div class="w-full pl-6 flex flex-col items-start gap-4 flex-1">
        <Title :title="'Our staff'" :isReflected="true" class="pb-8 pl-6" />
        <StaffPresentation />
        <StaffPresentation />
        <StaffPresentation />
      </div>
      <div class="flex flex-col h-full items-center justify-end w-[50%]">
        <!-- <Testimonies class="translate-x-[-150px]" /> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Title, StickyTitle, StaffPresentation } from "@/atoms";
</script>

<!-- https://www.sebastianlundberg.dk/personlig-traening -->
<!--https://www.airnauts.com/  -->
