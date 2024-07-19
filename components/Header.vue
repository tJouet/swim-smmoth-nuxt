<template>
  <div
    class="flex md:py-[40px] py-[10px] justify-between items-center md:px-8 px-3 absolute w-full text-sm md:text-2xl text-white font-semibold"
  >
    <img
      class="md:h-20 h-9 md:w-20 w-9"
      src="/img/fakelogo.svg"
      alt="Website's logo"
    />
    <ul class="flex flex-row gap-4 tex">
      <li>
        <button v-on:click="() => sendPlacement('programs')">
          Our programs
        </button>
      </li>
      <li>
        <button v-on:click="() => sendPlacement('aboutUs')">About us</button>
      </li>
      <li>
        <button v-on:click="() => sendPlacement('swimClinic')">
          Swim clinic
        </button>
      </li>
    </ul>

    <button
      class="md:border md:border-clearBlue rounded-full md:p-5 md:hover:bg-clearBlue md:hover:text-darkBlue md:bg-transparent md:w-auto justify-center items-center flex"
      v-on:click="contactUs"
    >
      <span class="md:block hidden">Contact us</span>
      <span class="md:hidden block">
        <img src="/img/chatIcon.svg" class="h-5"
      /></span>
    </button>
  </div>
</template>

<script setup lang="ts">
const sendPlacement = (placement: string) => {
  console.log(placement);
};
const contactUs = () => {
  console.log("Contactez nous!");
};
</script>
