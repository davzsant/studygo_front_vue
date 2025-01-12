import { createApp } from 'vue'
import router from './router'
import App from '@/App.vue'
import './assets/main.css'
import getCsrfToken from './services/csrfToken'

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const app = createApp(App);
(async () => {
    try {
        await getCsrfToken(); // Espera a obtenção do token antes de continuar
        app.use(router);
        app.mount('#app'); // Monta o aplicativo somente após o token ser obtido
        app.component('QuillEditor',QuillEditor)
    } catch (error) {
        console.error('Erro ao buscar o CSRF token:', error);
    }
})();
