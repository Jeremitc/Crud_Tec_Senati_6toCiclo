<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center text-gray-700">Iniciar Sesión</h2>
      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label for="email" class="text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            class="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label for="password" class="text-sm font-medium text-gray-700">Contraseña</label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            class="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div v-if="error" class="text-sm text-red-600">
          {{ error }}
        </div>
        <div>
          <button
            type="submit"
            :disabled="loading"
            class="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400"
          >
            {{ loading ? 'Iniciando...' : 'Login' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import { loginUser } from '../api';

const email = ref('');
const password = ref('');
const error = ref<string | null>(null);
const loading = ref(false);
const router = useRouter();
const authStore = useAuthStore();

const handleLogin = async () => {
  loading.value = true;
  error.value = null;
  try {
    const response = await loginUser({
      email: email.value,
      password: password.value,
    });
    authStore.setAuth(response.access_token);
    console.log('Login successful. User role:', authStore.userRole); // <-- Nuevo log

    // --- LÓGICA DE REDIRECCIÓN CORREGIDA ---
    router.push({ name: 'Dashboard' }); // Redirige al dashboard por defecto
    
  } catch (err) {
    error.value = 'Credenciales inválidas. Por favor, intente de nuevo.';
    console.error('Error de login:', err);
  } finally {
    loading.value = false;
  }
};
</script>
