import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import "./index.css"
import App from "./App"

// animations
import { AnimatePresence } from "framer-motion"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// redux
import { Provider } from "react-redux"
import { store } from "./store/store"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router>
      <AnimatePresence exitBeforeEnter>
        <ToastContainer />
        <App />
      </AnimatePresence>
    </Router>
  </Provider>
  // </React.StrictMode>
)
