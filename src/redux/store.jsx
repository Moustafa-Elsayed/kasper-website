import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productReducer'

export const store = configureStore({
  reducer: {
    product:productReducer,
  },
})