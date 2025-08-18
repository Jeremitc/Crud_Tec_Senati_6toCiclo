import axios from 'axios';
import { useAuthStore } from './stores/auth';

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL || '/api',
});

// Interceptor para añadir el token JWT a las solicitudes
api.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore();
    if (authStore.accessToken) {
      config.headers.Authorization = `Bearer ${authStore.accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;


// --- Auth API ---
export const loginUser = async (credentials: any) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};


export const createUser = async (userData: any) => {
  const response = await api.post('/users', userData);
  return response.data;
};

export const deleteUser = async (userId: number) => {
  const response = await api.delete(`/users/${userId}`);
  return response.data;
};

export const getAllUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

export const updateUser = async (userId: number, userData: any) => {
  const response = await api.patch(`/users/${userId}`, userData);
  return response.data;
};

