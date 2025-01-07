import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8765/api',
    timeout: 10000
})

api.interceptors.request.use(config => {
    const token = localStorage.getItem('jwtToken')
    const csrfToken = localStorage.getItem('csrfToken')

    if(token && csrfToken)
    {
        config.headers.Authorization = `Bearer ${token}`
        config.headers['X-CSRF-Token'] = csrfToken
    }

    return config
},(error) => {
    return Promise.reject(error)
})

api.interceptors.response.use((response) => {
    return response;
  }, (error) => {
    console.error('Erro na resposta:', error);
    if (error.response && error.response.status === 401) {
      // Redirecionar para login se não autenticado
      window.location.href = '/login';
    }
    return Promise.reject(error);
  });

export default api