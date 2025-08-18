<template>
  <section class="relative h-screen flex items-center justify-center text-center overflow-hidden">
    <video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover opacity-70">
      <source src="/home.mp4" type="video/mp4">
      Tu navegador no soporta la etiqueta de video.
    </video>
    <div class="relative z-10 p-8 max-w-4xl mx-auto text-white">
      <h1 class="text-5xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg text-gradient">
        Bienvenido
      </h1>
      <p class="text-xl md:text-2xl mb-8 drop-shadow-md text-gradient">
        La solución integral para la gestión de usuarios y recursos.
      </p>
      <router-link to="/login" class="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
        Comenzar Ahora
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
// No se necesita lógica compleja aquí
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(to right, #8B5CF6, #EC4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent; /* Fallback for browsers that don't support background-clip */
}
</style>