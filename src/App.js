import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
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

function App() {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cart)

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
    </>
  )
}

export default App
