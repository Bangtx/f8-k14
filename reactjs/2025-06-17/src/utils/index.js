import api from '../plugins/api.js'
import { toast } from 'react-toastify';
import axios from "axios";

const getNewToken = async () => {
  try {
    const {data} = await axios.post(
      'https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com/login/get_new_token',
      {refresh: localStorage.getItem('refresh')}
    )
    const {access, refresh} = data
    localStorage.setItem('access', access)
    localStorage.setItem('refresh', refresh)
  } catch (e) {
    toast.error('get data failed')
  }
}

const handleError = async (e, callback) => {
  console.log(e)
  if (e.response?.data?.detail === 'token expired') {
    await getNewToken()
    callback()
    return
  }
  toast.error('get data failed')
}

export const get = async (endpoint) => {
  try {
    const {data} = await api.get(endpoint)
    return data
  } catch (e) {
    await handleError(e, () => get(endpoint))
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