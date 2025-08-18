import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth';

import PrivLayout from '../components/layout/PrivLayout.vue';
import PubLayout from '../components/layout/PubLayout.vue';

const routes = [
  {
    path: '/',
    component: PubLayout,
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('../views/Login.vue'),
      },
    ],
  },
  {
    path: '/dashboard',
    component: PrivLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('../views/dashboard/dashboard.vue'),
      },
      // Aquí puedes agregar más rutas privadas que usen PrivLayout
      // Ejemplo:
      // {
      //   path: 'ia',
      //   name: 'IA',
      //   component: () => import('../views/ia/ia.vue'),
      // },
    ],
  },
  // Redirección por si la ruta no existe
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (to.name === 'Login' && authStore.isAuthenticated) {
    next({ name: 'Dashboard' }); // Redirige al dashboard si ya está autenticado y va a login
  } else if (requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'Login' }); // Redirige a la página de login si no está autenticado y la ruta lo requiere
  } else {
    next(); // Permite el acceso
  }
});

export default router;
