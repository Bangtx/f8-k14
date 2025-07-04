const countReducer = (state = 0, action) => {
  if (action.type === 'count/increase') {
    return state + 1
  }
  return state
}

export {
  countReducer
}