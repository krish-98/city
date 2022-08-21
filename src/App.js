import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Main from "./components/Main"
import CreateItem from "./components/CreateItem"

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
