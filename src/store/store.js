import { configureStore } from "@reduxjs/toolkit"
import authSliceReducer from "../features/authSlice/authSlice"
import foodSliceReducer from "../features/foodSlice/foodSlice"

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    food: foodSliceReducer,
  },
})
