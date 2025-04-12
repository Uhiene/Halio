<template>
  <HeroSwiper />
  <div class="grid gap-14 place-items-center lg:grid-cols-2 p-5 md:p-20 md:px-32">
    <AdventureCard v-for="card in firstTwoCards"  :key="card.id" :card="card" />
  </div>
  <ParallaxSection/>
  <AdventureGallery/>
</template>

<script setup>
import HeroSwiper from "@/components/HeroSwiper.vue";
import AdventureCard from "@/components/AdventureCard.vue";
import AdventureGallery from "@/components/AdventureGallery.vue";
import ParallaxSection from "@/components/ParallaxSection.vue";
import {adventureCards} from "@/data/adventureCards";
import { computed } from 'vue'

const firstTwoCards = computed(() => adventureCards.slice(0, 2))
</script>
