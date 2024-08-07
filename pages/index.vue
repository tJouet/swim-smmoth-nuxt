<template>
  <Header @newPlacement="jumpTo" />
  <Hero />
  <Programs ref="programs" />
  <AboutUs ref="aboutUs" />
</template>

<script setup>
import { ref } from "vue";

const programsRef = ref(null);
const aboutUsRef = ref(null);

const jumpTo = (destination) => {
  console.log(destination, "destination");
  let targetElement = null;
  switch (destination) {
    case "hero":
      targetElement = heroRef.value.$el;
      break;
    case "programs":
      targetElement = programsRef.value.$el;
      break;
    case "aboutUs":
      targetElement = aboutUsRef.value.$el;
      break;
    default:
      console.error("Destination inconnue");
  }
  window.scrollTo(0, targetElement);
};
</script>
