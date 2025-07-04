import {createStore} from "redux";
import {productReducer} from './Product'
import {searchStrReducer} from './SearchStr'
import {countReducer} from './Count'

const initState = {
  searchStr: null,
  products: [],
  count: 0
}1


const reducer = (state = initState, action) => {
  return {
    products: productReducer(state.products, action),
    count: countReducer(state.count, action),
    searchStr: searchStrReducer(state.searchStr, action)
  }
}

const store = createStore(reducer)

export {
  store
}