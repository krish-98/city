import React from "react"
import { Link } from "react-router-dom"
import Error from "../assets/404.png"

const NotFound = () => {
  return (
    <div className="h-[calc(100vh-104px)] flex flex-col items-center justify-center gap-6 bg-primary ]">
      <img className="w-[30%] md:max-w-[250px]" src={Error} alt="404 Error" />
      <h1 className="text-2xl">Oops! No such page found!</h1>
      <Link
        to="/"
        className="bg-orange-400 text-white px-4 py-2 rounded-3xl tracking-wide uppercase  text-center font-medium md:text-lg hover:bg-gradient-to-tr hover:from-orange-300 hover:to-orange-500 transition-all duration-500 ease-in-out"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound
