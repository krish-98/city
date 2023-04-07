import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  toggleCart: false,
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showCart: (state) => {
      state.toggleCart = !state.toggleCart
    },

    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )

      // To check whether the obj is already present in the array or not
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].qty += 1
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

    clearCart: (state) => {
      state.cartItems = []

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },

    getTotals: (state) => {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, qty } = cartItem
          const itemTotal = price * qty

          cartTotal.total += itemTotal
          cartTotal.quantity += qty

          return cartTotal
        },
        { total: 0, quantity: 0 }
      )

      state.cartTotalQuantity = quantity
      state.cartTotalAmount = total
    },
  },
})

export const {
  showCart,
  addToCart,
  increaseQty,
  decreaseQty,
  clearCart,
  getTotals,
} = cartSlice.actions

export default cartSlice.reducer
