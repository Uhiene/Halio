<template>
  <!-- Parallax Section -->
  <div
    class="parallax-section relative h-[250px] flex items-center justify-center text-white text-center"
  >
    <!-- Black overlay -->
    <div class="absolute inset-0 bg-black opacity-70 z-0"></div>
    <div class="text-center place-items-center z-10 w-4/5">
      <p
        class="text-xs uppercase tracking-lg text-neutral-400 tracking-[0.2rem]"
      >
        Snowy mountains crowned by shimmering polar lights
      </p>
      <div class="bg-neutral-400 w-[250px] sm:w-[500px] h-[1px] my-4"></div>
      <h2 class="text-3xl font-light">Northern Lights</h2>
    </div>
  </div>
</template>

<script setup>
import parallaxImage from "@/assets/images/bg.jpg";
</script>

<style scoped>
.parallax-section {
  background-image: url("@/assets/images/bg.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>
