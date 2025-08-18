<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-4 sm:p-8 font-sans">
    <Transition appear name="fade-slide">
      <div class="container mx-auto p-6 sm:p-8 bg-white shadow-2xl rounded-xl transform transition-all duration-500 ease-out hover:scale-[1.005] border border-gray-200">
        <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 text-center leading-snug tracking-wide">
          Bienvenido al Panel de Administración
        </h1>
        <p class="text-lg sm:text-xl text-gray-700 mb-8 sm:mb-10 text-center max-w-3xl mx-auto leading-relaxed">
          Desde aquí, los administradores pueden acceder a las herramientas de gestión de la aplicación.
          Utiliza el menú lateral para navegar por las diferentes secciones y gestionar los recursos del sistema.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <!-- Tarjeta de Gestión de Usuarios -->
          <div class="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-blue-200">
            <h2 class="text-2xl sm:text-3xl font-bold text-indigo-800 mb-3 sm:mb-4 flex items-center">
              <Icon icon="mdi:account-group" class="w-7 h-7 sm:w-8 sm:h-8 mr-3 text-indigo-600" />
              Gestión de Usuarios
            </h2>
            <p class="text-gray-800 mb-5 sm:mb-6 leading-relaxed">Administra las cuentas de usuario: crea, edita, deshabilita y elimina usuarios para mantener el control total.</p>
            <router-link to="/admin/users" class="inline-flex items-center px-5 py-2 sm:px-6 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 ease-in-out transform hover:scale-105">
              <Icon icon="mdi:arrow-right-circle" class="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Ir a Gestión de Usuarios
            </router-link>
          </div>

          <!-- Tarjeta de Ejemplo 2 (puedes duplicar y modificar para otras secciones) -->
          <div class="bg-gradient-to-br from-green-50 to-teal-100 p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-green-200">
            <h2 class="text-2xl sm:text-3xl font-bold text-teal-800 mb-3 sm:mb-4 flex items-center">
              <Icon icon="mdi:cog" class="w-7 h-7 sm:w-8 sm:h-8 mr-3 text-teal-600" />
              Configuración del Sistema
            </h2>
            <p class="text-gray-800 mb-5 sm:mb-6 leading-relaxed">Ajusta las configuraciones globales de la aplicación para optimizar su rendimiento y comportamiento.</p>
            <a href="#" class="inline-flex items-center px-5 py-2 sm:px-6 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-200 ease-in-out transform hover:scale-105">
              <Icon icon="mdi:arrow-right-circle" class="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Ir a Configuración
            </a>
          </div>

          <!-- Tarjeta de Ejemplo 3 (puedes duplicar y modificar para otras secciones) -->
          <div class="bg-gradient-to-br from-purple-50 to-pink-100 p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-purple-200">
            <h2 class="text-2xl sm:text-3xl font-bold text-pink-800 mb-3 sm:mb-4 flex items-center">
              <Icon icon="mdi:chart-bar" class="w-7 h-7 sm:w-8 sm:h-8 mr-3 text-pink-600" />
              Reportes y Estadísticas
            </h2>
            <p class="text-gray-800 mb-5 sm:mb-6 leading-relaxed">Accede a informes detallados y estadísticas clave para tomar decisiones informadas.</p>
            <a href="#" class="inline-flex items-center px-5 py-2 sm:px-6 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-200 ease-in-out transform hover:scale-105">
              <Icon icon="mdi:arrow-right-circle" class="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Ver Reportes
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
// No se necesita lógica compleja aquí, es una página introductoria
</script>

<style scoped>
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
