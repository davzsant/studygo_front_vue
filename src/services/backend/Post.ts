import axios, {AxiosError} from 'axios'
import type { AxiosResponse } from 'axios'

const api = axios.create({
    baseURL: 'process.env.VUE_APP_API_BASE_URL',
})