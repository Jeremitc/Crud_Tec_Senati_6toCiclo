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
    meta: { requiresAuth: true, roles: ['USER'] }, // Solo para usuarios normales
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('../views/priv/user/dashboard.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: PrivLayout,
    meta: { requiresAuth: true, roles: ['ADMIN'] },
    children: [
      {
        path: '',
        name: 'AdminPanel',
        component: () => import('../views/priv/admin/adminPanel.vue'),
      },
      {
        path: 'users',
        name: 'UserGestion',
        component: () => import('../views/priv/admin/UserGestion.vue'),
      },
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
    // Si ya está autenticado y va a login, redirige según el rol
    if (authStore.userRole === 'ADMIN') {
      next({ name: 'AdminPanel' });
    } else {
      next({ name: 'Dashboard' });
    }
  } else if (requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'Login' }); // Redirige a la página de login si no está autenticado y la ruta lo requiere
  } else if (requiresAuth && to.meta.roles && authStore.userRole && !(to.meta.roles as string[]).includes(authStore.userRole)) {
    // Si la ruta requiere un rol específico y el usuario no lo tiene, redirige al dashboard
    next({ name: 'Dashboard' });
  } else {
    next(); // Permite el acceso
  }
});

export default router;
