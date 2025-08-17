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

// --- Presupuesto API ---
export const fetchPresupuestos = async (proyecto?: string, piso?: string, descripcion?: string) => {
  const response = await api.get('/presupuesto', { params: { proyecto, piso, descripcion } });
  return response.data;
};
export const createPresupuesto = async (presupuestoData: any) => {
  const response = await api.post('/presupuesto', presupuestoData);
  return response.data;
};
export const updatePresupuesto = async (id: number, presupuestoData: any) => {
  const response = await api.patch(`/presupuesto/${id}`, presupuestoData);
  return response.data;
};
export const deletePresupuesto = async (id: number) => {
  const response = await api.delete(`/presupuesto/${id}`);
  return response.data;
};
export const fetchUniqueProyectos = async () => {
  const response = await api.get('/presupuesto/proyectos');
  return response.data;
};
export const fetchUniquePisos = async () => { // <-- Añadir export aquí
  const response = await api.get('/presupuesto/pisos');
  return response.data;
};
export const fetchAssignedProjects = async (filters?: { proyecto?: string, piso?: string, descripcion?: string, fechaInicio?: string, fechaFin?: string, supervisorId?: number }) => {
  console.log('Frontend - api.ts: Params being sent to backend:', filters); // <-- Nuevo log
  const response = await api.get('/presupuesto/assigned', { params: filters });
  return response.data;
};

// --- Avance API ---
export const fetchAvances = async (proyecto?: string, piso?: string, fechaInicio?: string, fechaFin?: string, status?: string, supervisorId?: number) => {
  const response = await api.get('/avance', { params: { proyecto, piso, fechaInicio, fechaFin, status, supervisorId } });
  return response.data;
};
export const createAvance = async (avanceData: any) => {
  const response = await api.post('/avance', avanceData);
  return response.data;
};
export const updateAvance = async (id: number, avanceData: any) => {
  const response = await api.patch(`/avance/${id}`, avanceData);
  return response.data;
};
export const deleteAvance = async (id: number) => {
  const response = await api.delete(`/avance/${id}`);
  return response.data;
};
export const updateAvanceStatus = async (id: number, statusData: { status: string }) => {
  const response = await api.patch(`/avance/${id}/status`, statusData);
  return response.data;
};

export const updateAvanceSupervisor = async (id: number, avanceData: any) => {
  const response = await api.patch(`/avance/${id}/supervisor-edit`, avanceData);
  return response.data;
};

export const createManyAvances = async (avancesData: any[]) => {
  const response = await api.post('/avance/batch', { avances: avancesData });
  return response.data;
};

// --- Reportes API ---
export const fetchReporteAvance = async (fechaInicio: string, fechaFin: string, proyectos?: string[], supervisorId?: number) => {
  const response = await api.get('/reportes/summary', {
    params: { 
      fechaInicio, 
      fechaFin,
      proyectos: proyectos && proyectos.length > 0 ? proyectos.join(',') : undefined,
      supervisorId: supervisorId || undefined,
    },
  });
  return response.data;
};

export interface DailyAvanceMetric {
  date: string;
  valorado: number;
  costo: number;
  margen: number;
}

export interface AccumulatedAvanceMetric extends DailyAvanceMetric {
  valoradoAcumulado: number;
  costoAcumulado: number;
  margenAcumulado: number;
}

export interface AvanceMetricsResult {
  dailyData: DailyAvanceMetric[];
  accumulatedData: AccumulatedAvanceMetric[];
  totals: {
    totalValorado: number;
    totalCosto: number;
    totalMargen: number;
  };
}

export const fetchAvanceMetrics = async (filters: { fechaInicio: string, fechaFin: string, proyecto?: string, piso?: string, descripcion?: string, supervisorId?: number }) => {
  const response = await api.get('/reportes/avance-metrics', { params: filters });
  return response.data;
};

// --- Auth API ---
export const loginUser = async (credentials: any) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

// --- User Management API (NUEVO) ---
export const fetchUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

export interface Supervisor {
  id: number;
  email: string;
}

export const fetchSupervisors = async () => {
  const response = await api.get('/admin/users/supervisors');
  return response.data;
};
export const createUser = async (userData: any) => {
  const response = await api.post('/users', userData);
  return response.data;
};
export const updateUser = async (id: number, userData: any) => {
  const response = await api.patch(`/users/${id}`, userData);
  return response.data;
};
export const deleteUser = async (id: number) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};

// --- Personal API ---
export const fetchPersonal = async () => {
  const response = await api.get('/personal');
  return response.data;
};
export const fetchPersonalById = async (id: number) => {
  const response = await api.get(`/personal/${id}`);
  return response.data;
};
export const createPersonal = async (personalData: any) => {
  const response = await api.post('/personal', personalData);
  return response.data;
};
export const updatePersonal = async (id: number, personalData: any) => {
  const response = await api.patch(`/personal/${id}`, personalData);
  return response.data;
};
export const deletePersonal = async (id: number) => {
  const response = await api.delete(`/personal/${id}`);
  return response.data;
};

// --- Equipo API ---
export const fetchEquipos = async () => {
  const response = await api.get('/equipo');
  return response.data;
};
export const fetchEquipoById = async (id: number) => {
  const response = await api.get(`/equipo/${id}`);
  return response.data;
};
export const createEquipo = async (equipoData: any) => {
  const response = await api.post('/equipo', equipoData);
  return response.data;
};
export const updateEquipo = async (id: number, equipoData: any) => {
  const response = await api.patch(`/equipo/${id}`, equipoData);
  return response.data;
};
export const deleteEquipo = async (id: number) => {
  const response = await api.delete(`/equipo/${id}`);
  return response.data;
};
