import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import './style.css'
import App from './App.vue'
import { useAuthStore } from './stores/auth'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

// Initialize auth store to check for existing token
const authStore = useAuthStore()
authStore.initAuth()

app.use(router)

app.mount('#app')
