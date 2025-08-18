<template>
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
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
// No se necesita lógica compleja aquí
</script>

<style scoped>
/* Estilos específicos para esta sección si son necesarios */
</style>