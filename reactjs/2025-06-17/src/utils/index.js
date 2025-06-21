import api from '../plugins/api.js'
import { toast } from 'react-toastify';

export const get = async (endpoint) => {
  try {
    const {data} = await api.get(endpoint)
    return data
  } catch (e) {
    toast.error('get data failed')
  }

  return null
}

export const post = async (endpoint, body) => {
  try {
    const {data} = await api.post('employees', body)
    toast.success('save data successfully')
    return data
  } catch (e) {
    toast.error('save data failed')
  }

  return null
}