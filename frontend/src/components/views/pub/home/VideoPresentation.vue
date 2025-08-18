<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800">
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://via.placeholder.com/1920x1080/667eea/ffffff?text=Landing+Page+Hero'); opacity: 0.7;"></div>
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

    <!-- Features Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold text-gray-900 mb-12">Nuestras Características Principales</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div class="p-8 bg-blue-50 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
            <div class="text-indigo-600 mb-4">
              <Icon icon="mdi:account-group" class="w-12 h-12 mx-auto" />
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-3">Gestión de Usuarios</h3>
            <p class="text-gray-700">Control total sobre las cuentas de usuario, roles y permisos.</p>
          </div>
          <div class="p-8 bg-green-50 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
            <div class="text-teal-600 mb-4">
              <Icon icon="mdi:cog" class="w-12 h-12 mx-auto" />
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-3">Configuración Flexible</h3>
            <p class="text-gray-700">Adapta la plataforma a tus necesidades con opciones de configuración avanzadas.</p>
          </div>
          <div class="p-8 bg-purple-50 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
            <div class="text-pink-600 mb-4">
              <Icon icon="mdi:chart-bar" class="w-12 h-12 mx-auto" />
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-3">Reportes Detallados</h3>
            <p class="text-gray-700">Obtén información valiosa con reportes y estadísticas en tiempo real.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-20 bg-indigo-600 text-white text-center">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold mb-6">¿Listo para empezar?</h2>
        <p class="text-xl mb-10">Únete a nuestra comunidad y transforma tu gestión.</p>
        <router-link to="/login" class="inline-block bg-white text-indigo-600 font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
          Regístrate Ahora
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
// Lógica específica de la página de inicio si es necesaria
</script>

<style scoped>
/* Estilos específicos para esta página si son necesarios */
</style>
