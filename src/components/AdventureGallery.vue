<script setup>
import { adventureCards } from "@/data/adventureCards";
</script>

<template>
  <div class="bg-gray-50 p-5 py-20 lg:px-32 ">
    <div class="container mx-auto px-4 flex flex-col items-center">
      <div class="text-center place-items-center mb-12 w-full">
        <p
          class="text-xs uppercase tracking-lg text-neutral-400 tracking-[0.2rem]"
        >
          Snowy mountains crowned by shimmering polar lights
        </p>
        <div class="bg-neutral-400 w-[250px] sm:w-[500px] h-[1px] my-4"></div>
        <h2 class="text-3xl font-light">Featured Adventures</h2>
      </div>
      <div class="grid gap-4 sm:gap-8 md:grid-cols-2 place-items-center w-full">
        <img
          v-for="card in adventureCards"
          :key="card.id"
          :src="card.image"
          :alt="card.title"
          class="h-[150px] sm:h-[280px] w-full object-cover transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
        />
      </div>
    </div>
  </div>
</template>
