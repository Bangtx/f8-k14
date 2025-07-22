import axios from "axios";
import { getCookie } from 'cookies-next';

const api = axios.create({
  baseURL: 'http://localhost:4000'
})

api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${getCookie('access')}`
    return config
  }
)

export default api
