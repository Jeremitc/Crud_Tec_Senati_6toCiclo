import { defineStore } from 'pinia';
import { jwtDecode } from 'jwt-decode';

interface UserPayload {
  email: string;
  sub: number;
  iat: number;
  exp: number;
}

interface AuthState {
  accessToken: string | null;
  user: UserPayload | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    accessToken: localStorage.getItem('access_token'),
    user: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.accessToken,
    userRole: (state) => state.user?.role || null,
    // Puedes añadir más getters si necesitas verificar roles específicos
    hasRole: (state) => (roles: string[]) => {
      return (state as any).isAuthenticated && (state as any).userRole && roles.includes((state as any).userRole);
    },
  },
  actions: {
    initAuth() {
      if (this.accessToken) {
        try {
          this.user = jwtDecode<UserPayload>(this.accessToken);
        } catch (e) {
          console.error("Error decoding token on init:", e);
          this.clearAuth();
        }
      }
    },
    setAuth(token: string) {
      this.accessToken = token;
      localStorage.setItem('access_token', token);
      this.user = jwtDecode<UserPayload>(token);
    },
    clearAuth() {
      this.accessToken = null;
      localStorage.removeItem('access_token');
      this.user = null;
    },
    logout() {
      this.clearAuth();
    },
  },
});
