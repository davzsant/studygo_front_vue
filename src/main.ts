import { createApp } from 'vue'
import router from './router'
import App from '@/App.vue'
import './assets/main.css'
import getCsrfToken from './services/csrfToken'

const app = createApp(App);
(async () => {
    try {
        await getCsrfToken(); // Espera a obtenção do token antes de continuar
        app.use(router);
        app.mount('#app'); // Monta o aplicativo somente após o token ser obtido
    } catch (error) {
        console.error('Erro ao buscar o CSRF token:', error);
    }
})();
