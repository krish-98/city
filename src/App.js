import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Main from "./pages/Main"
import CreateItem from "./pages/CreateItem"

import { useDispatch } from "react-redux"

// firebase
import { getAllFoodItems } from "./utils/firebaseFunctions"
import { getFoodItems } from "./features/foodSlice/foodSlice"
import { useEffect } from "react"

function App() {
  const dispatch = useDispatch()

  const fetchFoodData = async () => {
    getAllFoodItems().then((data) => dispatch(getFoodItems(data)))
  }

  useEffect(() => {
    fetchFoodData()
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="create-item" element={<CreateItem />} />
      </Routes>
    </>
  )
}

export default App
