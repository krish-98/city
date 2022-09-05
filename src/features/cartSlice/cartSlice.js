import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  toggleCart: false,
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
}
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showCart: (state, action) => {
      state.toggleCart = !state.toggleCart
    },
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )

      // To check whether the obj is already present in the array or not
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].qty += 1
        console.log(action.payload)
      } else {
        state.cartItems.push(action.payload)
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
  },
})

export const { showCart, addToCart } = cartSlice.actions
export default cartSlice.reducer
