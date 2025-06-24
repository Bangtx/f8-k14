import axios from "axios";

const api = axios.create({
  baseURL: 'https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com/'
})

api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access')}`
    return config
  }
)

export default api