<template>
  <div class="container mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
    <h1 class="text-3xl font-extrabold text-gray-800 mb-6">Panel de Administración</h1>
    <p class="text-gray-600 mb-8">¡Bienvenido, Administrador! Aquí puedes gestionar usuarios.</p>

    <!-- Botón para abrir el modal de Crear Usuario -->
    <button @click="showCreateModal = true" class="mb-6 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Crear Nuevo Usuario
    </button>

    <!-- Modal de Crear Usuario -->
    <div v-if="showCreateModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div class="relative p-8 bg-white w-96 mx-auto rounded-lg shadow-xl">
        <h3 class="text-xl font-bold text-gray-800 mb-4">Crear Nuevo Usuario</h3>
        <form @submit.prevent="handleCreateUser" class="space-y-4">
          <div>
            <label for="newEmail" class="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input type="email" id="newEmail" v-model="newUser.email" required
                   class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
          <div>
            <label for="newName" class="block text-sm font-medium text-gray-700">Nombre</label>
            <input type="text" id="newName" v-model="newUser.name" required
                   class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
          <div>
            <label for="newPassword" class="block text-sm font-medium text-gray-700">Contraseña</label>
            <input type="password" id="newPassword" v-model="newUser.password" required
                   class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
          <div>
            <label for="newRole" class="block text-sm font-medium text-gray-700">Rol</label>
            <select id="newRole" v-model="newUser.role" required
                    class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option value="USER">USUARIO</option>
              <option value="ADMIN">ADMINISTRADOR</option>
            </select>
          </div>
          <div class="flex justify-end space-x-3">
            <button type="button" @click="showCreateModal = false" class="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Cancelar
            </button>
            <button type="submit" class="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Crear Usuario
            </button>
          </div>
        </form>
        <p v-if="createMessage" class="mt-4 text-sm text-green-700 font-semibold">{{ createMessage }}</p>
        <p v-if="createError" class="mt-4 text-sm text-red-600 font-semibold">{{ createError }}</p>
      </div>
    </div>

    <!-- Sección de Lista de Usuarios -->
    <div class="bg-white p-6 rounded-lg shadow-md mb-10">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Gestionar Usuarios Existentes</h2>
      <div v-if="filteredUsers.length === 0" class="text-gray-500">No se encontraron usuarios.</div>
      <div v-else class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Correo Electrónico</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rol</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="user in filteredUsers" :key="user.id">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ user.id }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ user.email }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ user.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ user.role === 'USER' ? 'USUARIO' : 'ADMINISTRADOR' }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm" :class="{'text-green-600': !user.disabled, 'text-red-600': user.disabled}">
                {{ user.disabled ? 'Deshabilitado' : 'Activo' }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button @click="handleEditUser(user)" class="text-indigo-600 hover:text-indigo-900 mr-3">Editar</button>
                <button @click="confirmToggleStatus(user)"
                        :class="{'text-yellow-600 hover:text-yellow-900': !user.disabled, 'text-green-600 hover:text-green-900': user.disabled}">
                  {{ user.disabled ? 'Habilitar' : 'Deshabilitar' }}
                </button>
                <button @click="confirmDeleteUser(user.id)" class="text-red-600 hover:text-red-900 ml-3">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p v-if="fetchError" class="mt-4 text-sm text-red-600 font-semibold">{{ fetchError }}</p>
    </div>

    <!-- Modal de Editar Usuario -->
    <div v-if="showEditModal && selectedUser" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div class="relative p-8 bg-white w-96 mx-auto rounded-lg shadow-xl">
        <h3 class="text-xl font-bold text-gray-800 mb-4">Editar Usuario</h3>
        <form @submit.prevent="handleUpdateUser" class="space-y-4">
          <div>
            <label for="editEmail" class="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input type="email" id="editEmail" v-model="selectedUser.email" required
                   class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
          <div>
            <label for="editName" class="block text-sm font-medium text-gray-700">Nombre</label>
            <input type="text" id="editName" v-model="selectedUser.name" required
                   class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
          <div>
            <label for="editRole" class="block text-sm font-medium text-gray-700">Rol</label>
            <select id="editRole" v-model="selectedUser.role" required
                    class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option value="USER">USUARIO</option>
              <option value="ADMIN">ADMINISTRADOR</option>
            </select>
          </div>
          <div>
            <label for="editPassword" class="block text-sm font-medium text-gray-700">Nueva Contraseña (opcional)</label>
            <input type="password" id="editPassword" v-model="selectedUser.password"
                   class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
          <div class="flex items-center">
            <input id="editDisabled" type="checkbox" v-model="selectedUser.disabled"
                   class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
            <label for="editDisabled" class="ml-2 block text-sm text-gray-900">Deshabilitado</label>
          </div>
          <div class="flex justify-end space-x-3">
            <button type="button" @click="showEditModal = false" class="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Cancelar
            </button>
            <button type="submit" class="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Guardar Cambios
            </button>
          </div>
        </form>
        <p v-if="editMessage" class="mt-4 text-sm text-green-700 font-semibold">{{ editMessage }}</p>
        <p v-if="editError" class="mt-4 text-sm text-red-600 font-semibold">{{ editError }}</p>
      </div>
    </div>

    <!-- Modal de Confirmación Genérico -->
    <div v-if="showConfirmModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div class="relative p-8 bg-white w-96 mx-auto rounded-lg shadow-xl">
        <h3 class="text-xl font-bold text-gray-800 mb-4">{{ confirmTitle }}</h3>
        <p class="text-gray-700 mb-6">{{ confirmMessage }}</p>
        <div class="flex justify-end space-x-3">
          <button type="button" @click="cancelConfirmation" class="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Cancelar
          </button>
          <button type="button" @click="executeConfirmedAction" class="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            Confirmar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { createUser, deleteUser, getAllUsers, updateUser } from '../../../api';
import { useAuthStore } from '../../../stores/auth';

interface User {
  id: number;
  email: string;
  name: string;
  role: 'USER' | 'ADMIN';
  disabled: boolean;
  password?: string; // Optional for editing
}

const authStore = useAuthStore();

const newUser = ref({
  email: '',
  name: '',
  password: '',
  role: 'USER',
});
const createMessage = ref<string | null>(null);
const createError = ref<string | null>(null);
const showCreateModal = ref(false);

const userIdToDelete = ref<number | null>(null);
const deleteMessage = ref<string | null>(null);
const deleteError = ref<string | null>(null);

const users = ref<User[]>([]);
const fetchError = ref<string | null>(null);

const filteredUsers = computed(() => {
  const currentUserId = authStore.user?.sub;
  if (!currentUserId) {
    return users.value; // Si no hay usuario logueado, muestra todos (aunque no debería pasar en admin panel)
  }
  return users.value.filter(user => user.id !== currentUserId);
});

const selectedUser = ref<User | null>(null);
const showEditModal = ref(false);
const editMessage = ref<string | null>(null);
const editError = ref<string | null>(null);

// Variables para el modal de confirmación genérico
const showConfirmModal = ref(false);
const confirmTitle = ref('');
const confirmMessage = ref('');
const confirmAction = ref<(() => Promise<void>) | null>(null);

const fetchUsers = async () => {
  fetchError.value = null;
  try {
    users.value = await getAllUsers();
  } catch (err: any) {
    fetchError.value = `Error al obtener usuarios: ${err.response?.data?.message || err.message}`;
    console.error('Error al obtener usuarios:', err);
  }
};

const handleCreateUser = async () => {
  createMessage.value = null;
  createError.value = null;
  try {
    const response = await createUser(newUser.value);
    createMessage.value = `Usuario ${response.name} creado exitosamente!`;
    // Limpiar formulario y cerrar modal
    newUser.value = {
      email: '',
      name: '',
      password: '',
      role: 'USER',
    };
    showCreateModal.value = false;
    await fetchUsers(); // Refrescar lista de usuarios
  } catch (err: any) {
    createError.value = `Error al crear usuario: ${err.response?.data?.message || err.message}`;
    console.error('Error al crear usuario:', err);
  }
};

const handleDeleteUser = async (id: number) => {
  deleteMessage.value = null;
  deleteError.value = null;
  try {
    await deleteUser(id);
    deleteMessage.value = `Usuario con ID ${id} eliminado exitosamente!`;
    userIdToDelete.value = null; // Limpiar input
    await fetchUsers(); // Refrescar lista de usuarios
  } catch (err: any) {
    deleteError.value = `Error al eliminar usuario: ${err.response?.data?.message || err.message}`;
    console.error('Error al eliminar usuario:', err);
  }
};

const handleEditUser = (user: User) => {
  selectedUser.value = { ...user, password: '' }; // Clonar usuario y limpiar contraseña por seguridad
  showEditModal.value = true;
  editMessage.value = null;
  editError.value = null;
};

const handleUpdateUser = async () => {
  if (!selectedUser.value) return;

  editMessage.value = null;
  editError.value = null;

  try {
    const dataToUpdate: Partial<User> = {
      email: selectedUser.value.email,
      name: selectedUser.value.name,
      role: selectedUser.value.role,
      disabled: selectedUser.value.disabled,
    };
    if (selectedUser.value.password) {
      dataToUpdate.password = selectedUser.value.password;
    }

    await updateUser(selectedUser.value.id, dataToUpdate);
    editMessage.value = `Usuario ${selectedUser.value.name} actualizado exitosamente!`;
    showEditModal.value = false;
    await fetchUsers(); // Refrescar lista de usuarios
  } catch (err: any) {
    editError.value = `Error al actualizar usuario: ${err.response?.data?.message || err.message}`;
    console.error('Error al actualizar usuario:', err);
  }
};

const handleToggleStatus = async (user: User) => {
  try {
    await updateUser(user.id, { disabled: !user.disabled });
    deleteMessage.value = `Estado del usuario ${user.name} cambiado exitosamente!`; // Reutilizando deleteMessage para simplicidad
    await fetchUsers(); // Refrescar lista de usuarios
  } catch (err: any) {
    deleteError.value = `Error al cambiar estado del usuario: ${err.response?.data?.message || err.message}`;
    console.error('Error al cambiar estado del usuario:', err);
  }
};

// Funciones para el modal de confirmación genérico
const confirmDeleteUser = (id: number) => {
  confirmTitle.value = 'Confirmar Eliminación';
  confirmMessage.value = `¿Estás seguro de que quieres eliminar al usuario con ID ${id}? Esta acción es irreversible.`;
  confirmAction.value = async () => {
    await handleDeleteUser(id);
  };
  showConfirmModal.value = true;
};

const confirmToggleStatus = (user: User) => {
  confirmTitle.value = 'Confirmar Cambio de Estado';
  confirmMessage.value = `¿Estás seguro de que quieres ${user.disabled ? 'habilitar' : 'deshabilitar'} al usuario ${user.name}?`;
  confirmAction.value = async () => {
    await handleToggleStatus(user);
  };
  showConfirmModal.value = true;
};

const executeConfirmedAction = async () => {
  if (confirmAction.value) {
    await confirmAction.value();
  }
  showConfirmModal.value = false;
  confirmAction.value = null; // Limpiar la acción
};

const cancelConfirmation = () => {
  showConfirmModal.value = false;
  confirmAction.value = null;
};

onMounted(() => {
  fetchUsers();
});
</script>

<style scoped>
/* No se necesita mucho CSS personalizado con Tailwind */
</style>
