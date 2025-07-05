import {createSlice} from '@reduxjs/toolkit'

const countSlice = createSlice({
  name: 'count',
  initialState: 10,
  reducers: {
    increase: (s, action) => {
      console.log('vao day', action)
      return s + 1
    }
  }
})

export default countSlice
export const {increase} = countSlice.actions
