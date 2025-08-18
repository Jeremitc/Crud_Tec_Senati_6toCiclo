<template>
  <nav :class="{'translate-y-0': !scrolledDown, '-translate-y-full': scrolledDown}" class="fixed w-full z-50 bg-white shadow-md transition-transform duration-300 ease-in-out py-4">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <router-link to="/" class="text-2xl font-bold text-indigo-600">Mi Aplicación</router-link>
      <div class="flex items-center space-x-4">
        <router-link to="/login" class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200 ease-in-out">
          Login
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const scrolledDown = ref(false);
let lastScrollY = 0;

const handleScroll = () => {
  if (window.scrollY > lastScrollY && window.scrollY > 100) {
    scrolledDown.value = true;
  } else {
    scrolledDown.value = false;
  }
  lastScrollY = window.scrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* No se necesitan estilos adicionales ya que Tailwind CSS maneja la mayoría */
</style>
