<template>
  <nav :class="{
    'translate-y-0': !scrolledDown,
    '-translate-y-full': scrolledDown,
    'bg-white shadow-md': showSolidBackground,
    'bg-transparent': !showSolidBackground
  }" class="fixed w-full z-50 transition-all duration-300 ease-in-out py-4">
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
const showSolidBackground = ref(false); // Controla el fondo sólido y la sombra

let lastScrollY = 0;
const hideThreshold = 100; // Umbral para ocultar la barra de navegación

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  // Lógica para ocultar/mostrar la barra de navegación
  if (currentScrollY > lastScrollY && currentScrollY > hideThreshold) {
    scrolledDown.value = true; // Ocultar
  } else {
    scrolledDown.value = false; // Mostrar
  }

  // Lógica para el color de fondo y la sombra
  // El fondo es sólido si: estamos más allá del umbral de ocultamiento O estamos subiendo el scroll.
  // Si estamos en la parte superior (scrollY === 0), siempre es transparente.
  showSolidBackground.value = (currentScrollY > hideThreshold || currentScrollY < lastScrollY) && currentScrollY > 0;

  // Caso especial: si estamos en la parte superior, siempre es transparente
  if (currentScrollY === 0) {
    showSolidBackground.value = false;
  }

  lastScrollY = currentScrollY;
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
