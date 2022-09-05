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

    increaseQty: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )

      if (state.cartItems[itemIndex].qty >= 1) {
        state.cartItems[itemIndex].qty += 1
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },

    decreaseQty: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )

      if (state.cartItems[itemIndex].qty > 1) {
        state.cartItems[itemIndex].qty -= 1

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
      } else if (state.cartItems[itemIndex].qty === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        )

        state.cartItems = nextCartItems
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
      }
    },

    clearCart: (state, action) => {
      state.cartItems = []

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
  },
})

export const { showCart, addToCart, increaseQty, decreaseQty, clearCart } =
  cartSlice.actions
export default cartSlice.reducer
