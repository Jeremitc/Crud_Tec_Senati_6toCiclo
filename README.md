# 🚀 Crud_Tec_Senati_6toCiclo

¡Bienvenido al proyecto **Crud_Tec_Senati_6toCiclo**! Esta es una aplicación web completa diseñada para la gestión eficiente de usuarios y recursos, construida con un robusto backend en NestJS y un dinámico frontend en Vue.js.

## ✨ Características Destacadas

-   **Autenticación Segura:** Implementación de JWT y cookies HTTP-only para un acceso seguro.
-   **Gestión de Usuarios (Admin):** Panel de administración intuitivo para crear, editar, deshabilitar y eliminar usuarios.
-   **Interfaz Moderna:** Frontend desarrollado con Vue.js y Tailwind CSS, ofreciendo una experiencia de usuario fluida y visualmente atractiva.
-   **Navegación Inteligente:** Barra de navegación interactiva que se adapta al scroll y protección de rutas basada en roles.
-   **Base de Datos Robusta:** Integración con PostgreSQL a través de Prisma ORM.

## 🛠️ Tecnologías Utilizadas

### Backend
-   [NestJS](https://nestjs.com/): Un framework progresivo de Node.js para construir aplicaciones del lado del servidor escalables y eficientes.
-   [Prisma ORM](https://www.prisma.io/): Un ORM de nueva generación para Node.js y TypeScript.
-   [PostgreSQL](https://www.postgresql.org/): Un potente sistema de base de datos relacional de código abierto.

### Frontend
-   [Vue.js](https://vuejs.org/): El framework progresivo de JavaScript.
-   [Vite](https://vitejs.dev/): Una herramienta de construcción frontend de próxima generación.
-   [Tailwind CSS](https://tailwindcss.com/): Un framework CSS de primera clase que te permite construir diseños personalizados rápidamente.
-   [Pinia](https://pinia.vuejs.org/): El store de Vue que te encantará.
-   [Vue Router](https://router.vuejs.org/): El enrutador oficial para Vue.js.
-   [Axios](https://axios-http.com/): Cliente HTTP basado en promesas para el navegador y Node.js.
-   [Iconify](https://icon-sets.iconify.design/): Colección de más de 100.000 iconos.

## 🚀 Cómo Empezar

Sigue estos pasos para poner en marcha el proyecto en tu entorno local.

### Prerrequisitos

Asegúrate de tener instalado lo siguiente:
-   [Node.js](https://nodejs.org/en/) (v18 o superior)
-   [npm](https://www.npmjs.com/) (v8 o superior)
-   [Docker](https://www.docker.com/get-started) (opcional, para PostgreSQL)

### ⚙️ Configuración del Backend

1.  Navega al directorio `backend`:
    ```bash
    cd backend
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    ```
3.  Crea un archivo `.env` en el directorio `backend` y configura las variables de entorno. Puedes usar `.env.example` como plantilla.
    ```dotenv
    DATABASE_URL="postgresql://postgres:Miamor123@localhost:5432/crud"
    JWT_SECRET="tu_secreto_jwt_generado_aleatoriamente"
    ```
    *Asegúrate de reemplazar `tu_secreto_jwt_generado_aleatoriamente` con una cadena segura y única.*

4.  Inicia la base de datos PostgreSQL (si no la tienes ya en ejecución, puedes usar Docker):
    ```bash
    docker run --name crud-postgres -e POSTGRES_PASSWORD=Miamor123 -p 5432:5432 -d postgres
    ```
5.  Ejecuta las migraciones de Prisma para crear el esquema de la base de datos:
    ```bash
    npx prisma migrate dev --name init_postgresql
    ```
6.  (Opcional) Si necesitas datos de prueba, ejecuta el script de seed:
    ```bash
    npx prisma db seed
    ```
7.  Inicia el servidor backend en modo desarrollo:
    ```bash
    npm run start:dev
    ```
    El backend estará disponible en `http://localhost:3001`.

### 🌐 Configuración del Frontend

1.  Navega al directorio `frontend`:
    ```bash
    cd frontend
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    ```
3.  Crea un archivo `.env` en el directorio `frontend` y configura la variable de entorno:
    ```dotenv
    VITE_APP_API_BASE_URL=http://localhost:3001/api
    ```
4.  Inicia el servidor de desarrollo del frontend:
    ```bash
    npm run dev
    ```
    El frontend estará disponible en `http://localhost:5173`.

## 🔑 Credenciales de Prueba (Seed Script)

Si ejecutaste el `seed` script, puedes usar las siguientes credenciales:

-   **Administrador:**
    -   Email: `admin@example.com`
    -   Contraseña: `password123`
-   **Usuario Normal:**
    -   Email: `user@example.com`
    -   Contraseña: `password123`

## 🗺️ Estructura del Proyecto

```
Crud_Tec_Senati_6toCiclo/
├── backend/                # Aplicación NestJS (API REST)
│   ├── prisma/             # Esquema de base de datos y migraciones
│   ├── src/                # Código fuente del backend
│   │   ├── auth/           # Módulo de autenticación (login, registro, JWT)
│   │   ├── users/          # Módulo de gestión de usuarios
│   │   └── prisma/         # Módulo de Prisma ORM
│   └── ...
└── frontend/               # Aplicación Vue.js (Interfaz de Usuario)
    ├── public/             # Archivos estáticos (ej. home.mp4)
    ├── src/                # Código fuente del frontend
    │   ├── api.ts          # Configuración de Axios y llamadas a la API
    │   ├── components/     # Componentes reutilizables
    │   │   ├── common/     # Componentes comunes (Navbar, Footer)
    │   │   └── layout/     # Componentes de layout (PrivLayout, PubLayout, EmptyPubLayout)
    │   │   └── views/      # Componentes específicos de vistas (HeroSection, FeaturesSection, CallToActionSection)
    │   ├── router/         # Configuración de Vue Router y guards de navegación
    │   ├── stores/         # Stores de Pinia (ej. auth.ts)
    │   └── views/          # Vistas principales de la aplicación (Login, Home, AdminPanel, UserGestion, Dashboard)
    └── ...
```

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, por favor, sigue estos pasos:

1.  Haz un fork del repositorio.
2.  Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3.  Realiza tus cambios y commitea (`git commit -m 'feat: Añadir nueva funcionalidad'`).
4.  Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5.  Abre un Pull Request.

## 📄 Licencia

Este proyecto está bajo la Licencia Apache 2.0. Consulta el archivo `LICENSE` para más detalles.
