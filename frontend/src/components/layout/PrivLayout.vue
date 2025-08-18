<template>
  <div class="flex h-screen bg-gray-100 font-sans">
    <!-- Sidebar -->
    <SideAdmin v-if="authStore.userRole === 'ADMIN'" />
    <SideUser v-else-if="authStore.userRole === 'USER'" />

    <!-- Main content area -->
    <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import SideAdmin from '../general/SideAdmin.vue';
import SideUser from '../general/SideUser.vue';
import { useAuthStore } from '../../stores/auth';

const authStore = useAuthStore();
</script>

<style scoped>
/* Puedes añadir estilos personalizados aquí si Tailwind no es suficiente */
</style>
