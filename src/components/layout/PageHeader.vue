<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showBlackBg = ref(false)
const heroHeight = 800 // Set to your hero section height
const sidebarVisible = ref(false) // Controls the visibility of the sidebar

const checkScroll = () => {
  showBlackBg.value = window.scrollY > heroHeight * 0.3 // Starts appearing after 30% scroll
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})

const toggleSidebar = () => {
  sidebarVisible.value = !sidebarVisible.value
}

const closeSidebar = () => {
  sidebarVisible.value = false
}
</script>

<template>
  <header class="fixed top-0 w-full z-50 transition-colors duration-1000 ease-out">
    <div 
      class="absolute inset-0 bg-black" 
      :class="{'opacity-0': !showBlackBg, 'opacity-100': showBlackBg}"
    />
    
    <div class="container mx-auto px-6 py-4 relative z-10 flex justify-between items-center text-white">
      <router-link to="/">
        <div class="text-2xl font-light">Hielo</div>
      </router-link>
      
      <!-- Hamburger Icon with Menu text (Visible on all screen sizes) -->
      <div class="flex items-center space-x-2">
        <button @click="toggleSidebar" class="flex items-center">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <span class="ml-2 hidden md:block">Menu</span>
        </button>
      </div>
    </div>
  </header>

  <!-- Sidebar -->
  <div v-if="sidebarVisible" class="fixed top-0 right-0 w-64 h-full bg-black text-white z-50 transition-transform transform ease-in-out">
    <div class="flex flex-col h-full p-6">
      <!-- Close Button -->
      <button @click="closeSidebar" class="text-white absolute top-4 right-4 text-3xl cursor-pointer">
        &times; <!-- The "X" symbol to close the sidebar -->
      </button>
      <router-link to="/" class="mb-8 text-2xl font-light">Hielo</router-link>
      <nav class="flex flex-col space-y-4">
        <a href="#" class="hover:opacity-80 transition">Home</a>
        <a href="#" class="hover:opacity-80 transition">About</a>
        <a href="#" class="hover:opacity-80 transition">Contact</a>
      </nav>
    </div>
  </div>

  <!-- Overlay when sidebar is open -->
  <div 
    v-if="sidebarVisible" 
    class="fixed inset-0 bg-black opacity-50 z-30"
    @click="toggleSidebar"
  />
</template>

<style scoped>
/* Ensures that the sidebar doesn't cover the main content */
body {
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

header {
  transition: background-color 0.5s ease-out;
}

/* Sidebar styles */
.sidebar {
  position: fixed;
  top: 0;
  right: 0; /* Now it's positioned on the right */
  width: 250px; /* Sidebar width */
  height: 100%;
  background-color: black;
  color: white;
  padding: 20px;
  transition: transform 10s ease-in-out;
  transform: translateX(100%); /* Sidebar is hidden initially off-screen to the right */
}

.sidebar.show {
  transform: translateX(0); /* Show the sidebar by moving it into view */
}

/* Navigation links */
.sidebar nav a {
  margin: 10px 0;
}

/* Overlay when sidebar is visible */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
