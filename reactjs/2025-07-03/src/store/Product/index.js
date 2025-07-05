export * from './action.js'

const productReducer = (state = [], action) => {
  if (action.type === 'products/addNew') {
    return [...state, action.value]
  }
  if (action.type === 'products/delete') {
    const index = state.findIndex(e => e.id === action.value)
    state.splice(index, 1)
    return [...state]
  }
  return state
}

export {
  productReducer
}

