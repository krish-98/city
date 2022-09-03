import { configureStore } from "@reduxjs/toolkit"
import authSliceReducer from "../features/authSlice/authSlice"
import foodSliceReducer from "../features/foodSlice/foodSlice"
import cartSliceReducer from "../features/cartSlice/cartSlice"

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    food: foodSliceReducer,
    cart: cartSliceReducer,
  },
})
