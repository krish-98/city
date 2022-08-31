import { createSlice } from "@reduxjs/toolkit"

const initialState = { foodItems: null }

const food = createSlice({
  initialState,
  name: "foodItem",
  reducers: {
    getFoodItems: (state, action) => {
      state.foodItems = action.payload
    },
    // filterFruitItems: (state, action) => {
    //   const filteredItems = state.foodItems.filter((fruit) => {
    //     if (fruit.category === "fruits") {
    //       state.fruits.push(fruit)
    //     }
    //   })

    //   return filteredItems
    // },
  },
})

export const { getFoodItems } = food.actions
export default food.reducer
