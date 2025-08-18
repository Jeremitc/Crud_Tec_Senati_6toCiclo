<template>
  <div class="flex h-screen bg-gray-100 font-sans">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-800 text-white flex flex-col shadow-lg">
      <div class="p-6 border-b border-gray-700 bg-gray-900">
        <h2 class="text-3xl font-bold text-indigo-400">Admin Panel</h2>
      </div>
      <div class="p-6 border-b border-gray-700">
        <p class="text-xl font-semibold text-gray-100">{{ authStore.user?.name }}</p>
        <p class="text-sm text-gray-400">{{ authStore.user?.email }}</p>
        <p class="text-sm text-gray-400 capitalize">Rol: {{ authStore.user?.role?.toLowerCase() }}</p>
      </div>
      <nav class="flex-grow p-6">
        <ul>
          <li class="mb-3">
            <router-link to="/admin" class="flex items-center py-2 px-4 rounded-md hover:bg-gray-700 transition duration-200 ease-in-out">
              <Icon icon="mdi:view-dashboard" class="w-6 h-6 mr-3 text-indigo-300" />
              <span class="text-lg">Inicio Admin</span>
            </router-link>
          </li>
          <li class="mb-3">
            <router-link to="/admin/users" class="flex items-center py-2 px-4 rounded-md hover:bg-gray-700 transition duration-200 ease-in-out">
              <Icon icon="mdi:account-group" class="w-6 h-6 mr-3 text-indigo-300" />
              <span class="text-lg">Gestionar Usuarios</span>
            </router-link>
          </li>
          <!-- Puedes añadir más enlaces de navegación aquí si es necesario -->
        </ul>
      </nav>
      <div class="p-6 border-t border-gray-700 bg-gray-900">
        <button @click="handleLogout" class="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-200 ease-in-out">
          <Icon icon="mdi:logout" class="w-5 h-5 mr-2" />
          Cerrar Sesión
        </button>
      </div>
    </aside>

    <!-- Main content area -->
    <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '../../stores/auth';
import { useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';

const authStore = useAuthStore();
const router = useRouter();

const handleLogout = () => {
  authStore.logout();
  router.push({ name: 'Login' });
};
</script>

<style scoped>
/* Puedes añadir estilos personalizados aquí si Tailwind no es suficiente */
</style>
