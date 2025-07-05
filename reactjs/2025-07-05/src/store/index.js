import {configureStore} from '@reduxjs/toolkit'
import countSlice from './Count'
import productsSlice from "./Product/index.js";

const store = configureStore({
  reducer: {
    count: countSlice.reducer,
    products: productsSlice.reducer
  }
})

export {
  store
}
export * from './Count'
export * from './Product'