import api from "../plugins/api.js"

// GET - Lấy danh sách todos
const get = async (endpoint) => {
  try {
    const {data} = await api.get(endpoint)
    return data
  }
  catch (e) {
    console.log(e)
    //toast the error
  }
  return null
}

// POST - Thêm todo mới
const post = async (endpoint, body) => {
  try {
    const {data} = await api.post(endpoint, body) // Sửa từ get thành post
    return data
  }
  catch (e) {
    console.log(e)
    //toast the error
  }
  return null
}

// PUT - Cập nhật todo
const put = async (endpoint, body) => {
  try {
    const {data} = await api.put(endpoint, body)
    return data
  }
  catch (e) {
    console.log(e)
    //toast the error
  }
  return null
}

// DELETE - Xóa todo
const del = async (endpoint) => {
  try {
    const {data} = await api.delete(endpoint)
    return data
  }
  catch (e) {
    console.log(e)
    //toast the error
  }
  return null
}

export { get, post, put, del }
