import React from "react"
import Confetti from "react-confetti"
import { useWindowSize } from "react-use"

const Orders = () => {
  const { width, height } = useWindowSize()
  return (
    <div className="h-[calc(100vh-80px)] flex justify-center items-center bg-primary">
      <Confetti width={width} height={height} gravity={0.15} />
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-5xl text-orange-400">Your Order is on the way</h1>
        <p className="text-2xl ">Sit Back and Relax!</p>
      </div>
    </div>
  )
}

export default Orders
