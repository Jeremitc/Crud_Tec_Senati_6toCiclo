<template>
  <footer class="bg-gray-800 text-white py-10">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Sección 1: Sobre Nosotros -->
      <div>
        <h3 class="text-xl font-bold mb-4">Sobre Nosotros</h3>
        <p class="text-gray-400 text-sm">Somos una empresa dedicada a proporcionar soluciones de software innovadoras y eficientes para nuestros clientes.</p>
      </div>

      <!-- Sección 2: Servicios -->
      <div>
        <h3 class="text-xl font-bold mb-4">Servicios</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-400 hover:text-white transition duration-200">Desarrollo Web</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white transition duration-200">Consultoría IT</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white transition duration-200">Soporte Técnico</a></li>
        </ul>
      </div>

      <!-- Sección 3: Enlaces Rápidos -->
      <div>
        <h3 class="text-xl font-bold mb-4">Enlaces Rápidos</h3>
        <ul class="space-y-2">
          <li><router-link to="/" class="text-gray-400 hover:text-white transition duration-200">Inicio</router-link></li>
          <li><a href="#" class="text-gray-400 hover:text-white transition duration-200">Características</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white transition duration-200">Contacto</a></li>
        </ul>
      </div>

      <!-- Sección 4: Contacto -->
      <div>
        <h3 class="text-xl font-bold mb-4">Contacto</h3>
        <p class="text-gray-400 text-sm">123 Calle Ficticia, Ciudad, País</p>
        <p class="text-gray-400 text-sm">info@miempresa.com</p>
        <p class="text-gray-400 text-sm">+123 456 7890</p>
      </div>
    </div>
    <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
      &copy; {{ currentYear }} Mi Aplicación. Todos los derechos reservados.
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
/* Estilos específicos para el footer si son necesarios */
</style>
