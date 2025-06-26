import axios from "axios";

const api = axios.create({
  baseURL: 'https://api-todolist-multiuser.onrender.com/Viet'
})

api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access')}`
    return config
  }
)

export default api