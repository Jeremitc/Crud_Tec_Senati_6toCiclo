import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth';

import PrivLayout from '../components/layout/PrivLayout.vue';
import PubLayout from '../components/layout/PubLayout.vue';
import EmptyPubLayout from '../components/layout/EmptyPubLayout.vue'; // Import the new layout

const routes = [
  {
    path: '/',
    component: PubLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/pub/home.vue'),
      },
    ],
  },
  {
    path: '/login', // Move login out of the root children to use a different layout
    component: EmptyPubLayout, // Use the new empty layout for login
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
  const allowedRoles = to.meta.roles as string[] | undefined;
  const userRole = authStore.userRole;

  if (authStore.isAuthenticated) {
    // 1. Si el usuario ya está autenticado y trata de ir a Login o Home
    if (to.name === 'Login' || to.name === 'Home') {
      if (userRole === 'ADMIN') {
        next({ name: 'AdminPanel' });
      } else {
        next({ name: 'Dashboard' });
      }
    }
    // 2. Si el usuario está autenticado y trata de ir a una ruta protegida
    else if (requiresAuth) {
      // 2a. Si la ruta tiene roles específicos y el rol del usuario no está permitido
      if (allowedRoles && userRole && !allowedRoles.includes(userRole)) {
        if (userRole === 'ADMIN') {
          next({ name: 'AdminPanel' }); // Redirige al admin a su panel si intenta ir a una ruta de usuario
        } else {
          next({ name: 'Dashboard' }); // Redirige al usuario a su dashboard si intenta ir a una ruta de admin
        }
      }
      // 2b. Si la ruta requiere autenticación y el rol es permitido (o no hay roles específicos)
      else {
        next();
      }
    }
    // 3. Si el usuario está autenticado y trata de ir a cualquier otra ruta pública (que no sea Login/Home)
    else {
      next();
    }
  }
  // Si el usuario NO está autenticado
  else {
    // 4. Si la ruta requiere autenticación, redirige a Home
    if (requiresAuth) {
      next({ name: 'Home' });
    }
    // 5. Si la ruta no requiere autenticación (es pública), permite el acceso
    else {
      next();
    }
  }
});

export default router;
