import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import "./index.css"
import App from "./App"
import { AnimatePresence } from "framer-motion"

// redux
import { Provider } from "react-redux"
import { store } from "./store/store"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <AnimatePresence exitBeforeEnter>
          <App />
        </AnimatePresence>
      </Router>
    </Provider>
  </React.StrictMode>
)
