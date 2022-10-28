import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Header from "./components/Header"
import Main from "./pages/Main"
import CreateItem from "./pages/CreateItem"
import Checkout from "./pages/Checkout"

// firebase
import { getAllFoodItems } from "./utils/firebaseFunctions"

// RTk
import { useDispatch, useSelector } from "react-redux"
import { getFoodItems } from "./features/foodSlice/foodSlice"
import { getTotals } from "./features/cartSlice/cartSlice"

import CartUI from "./components/cart/CartUI"

function App() {
  const dispatch = useDispatch()
  const { cartItems, toggleCart } = useSelector((state) => state.cart)

  const fetchFoodData = async () => {
    getAllFoodItems().then((data) => dispatch(getFoodItems(data)))
  }

  useEffect(() => {
    fetchFoodData()
    dispatch(getTotals())
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="create-item" element={<CreateItem />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
      {toggleCart && <CartUI />}
    </>
  )
}

export default App
