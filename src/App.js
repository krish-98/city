import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Main from "./pages/Main"
import CreateItem from "./pages/CreateItem"

function App() {
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
