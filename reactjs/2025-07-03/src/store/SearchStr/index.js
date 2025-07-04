const searchStrReducer = (state = null, action) => {
  if (action.type === 'searchStr/inputting') {
    return action.value
  }
  return state
}

export {
  searchStrReducer
}