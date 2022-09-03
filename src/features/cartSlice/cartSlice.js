import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  toggleCart: false,
}
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showCart: (state, action) => {
      state.toggleCart = !state.toggleCart
    },
  },
})

export const { showCart } = cartSlice.actions
export default cartSlice.reducer
