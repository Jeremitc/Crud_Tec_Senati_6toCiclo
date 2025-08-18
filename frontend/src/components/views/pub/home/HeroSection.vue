<template>
  <section class="relative h-screen flex items-center justify-center text-center overflow-hidden">
    <video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover opacity-70">
      <source src="/home.mp4" type="video/mp4">
      Tu navegador no soporta la etiqueta de video.
    </video>
    <div class="relative z-10 p-8 max-w-4xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-xl transform transition-all duration-500 ease-out hover:scale-[1.01]">
      <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
        Bienvenido a Nuestra Plataforma
      </h1>
      <p class="text-xl md:text-2xl text-gray-700 mb-8">
        La solución integral para la gestión de usuarios y recursos.
      </p>
      <router-link to="/login" class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
        Comenzar Ahora
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
// No se necesita lógica compleja aquí
</script>

<style scoped>
/* Estilos específicos para esta sección si son necesarios */
</style>