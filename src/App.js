import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { Header, CartUI } from "./components"
import { Main, CreateItem, Checkout, Orders, NotFound } from "./pages"

import { getAllFoodItems } from "./utils/firebaseFunctions"

import { useDispatch, useSelector } from "react-redux"
import { getFoodItems } from "./features/foodSlice/foodSlice"
import { getTotals } from "./features/cartSlice/cartSlice"

function App() {
  const dispatch = useDispatch()
  const { toggleCart, cartItems } = useSelector((state) => state.cart)
  const { user } = useSelector((state) => state.auth)

  const fetchFoodData = async () => {
    getAllFoodItems().then((data) => dispatch(getFoodItems(data)))
  }

  useEffect(() => {
    fetchFoodData()
    dispatch(getTotals())
  }, [cartItems])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        {user?.email === "romeomuralikrishnan@gmail.com" && (
          <Route path="create-item" element={<CreateItem />} />
        )}
        <Route path="checkout" element={<Checkout />} />
        <Route path="orders" element={<Orders />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {toggleCart && <CartUI />}
    </>
  )
}

export default App
