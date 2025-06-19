import api from '../plugins/api.js'


const get = async (endpoint) => {
  try {
    const {data} = await api.get(endpoint)
    return data
  } catch (e) {
    console.log(e)
    // toast the error
  }

  return null
}

const post = async (endpoint, body) => {
  try {
    const {data} = await api.post('employees', body)
    return data
  } catch (e) {
    console.log(e)
    // toast the error
  }

  return null
}