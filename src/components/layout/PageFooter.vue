<template>
  <div class="bg-black text-white text-center p-16">
    <div class="flex justify-center gap-5 mb-10 text-neutral-500 text-3xl">
      <component 
      v-for="(icon, index) in [AkTwitterFill, AkFacebookFill, AkInstagramFill, AnOutlinedMail]" 
      :key="index"
      :is="icon"
      class="transition-colors duration-200 hover:text-white cursor-pointer"
    />
    </div>
    <p class="text-neutral-500 uppercase font-light">Made with ❤️ by Code Duchess</p>
  </div>
</template>

<script setup>
import { AkTwitterFill, AkFacebookFill, AkInstagramFill, AnOutlinedMail } from '@kalimahapps/vue-icons';
</script>

<style></style>
