<script setup>
defineProps({
  card: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="card bg-gray-50 w-full group overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
  >
    <div class="relative h-52 sm:h-72 overflow-hidden">
      <img
        :src="card.image"
        :alt="card.title"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div class="bg-white lg:h-80 py-10 p-8 text-center">
      <h4
        class="text-xs uppercase tracking-lg text-neutral-400 tracking-[0.2rem] underline decoration-neutral-400 decoration-1 underline-offset-"
      >
        {{ card.subtitle }}
      </h4>
      <h3 class="text-3xl font-light text-black">{{ card.title }}</h3>
      <p class="text-neutral-400 text-start font-extralight mt-10">
        {{ card.description }}
      </p>
      <button
        class="mt-4 border-2 border-neutral-300 px-6 py-2 uppercase text-sm font-light hover:bg-neutral-200"
      >
        Learn More
      </button>
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}
</style>
