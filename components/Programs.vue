<template>
  <div
    class="md:h-auto md:flex-row md:p-10 py-10 bg-darkBlue flex flex-col text-center items-center justify-between"
  >
    <StickyTitle isReflected:false title="Our programs" />
    <Title isReflected:false title="Our programs" class="md:hidden" />
    <div class="flex flex-col w-full justify-center items-center">
      <h2 class="text-xl py-10 font-medium md:hidden">
        From learning to swim to perfecting your stroke
      </h2>
      <ProgramDisplay
        v-for="program in FakeData.programs"
        :title="program.label"
        :description="program.description"
        :image="program.url"
        :key="program.id"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import FakeData from "../data.json";
import { ProgramDisplay, StickyTitle } from "@/atoms";
</script>
