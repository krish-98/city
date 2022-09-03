import React from "react"
import { AiOutlineClear } from "react-icons/ai"
import { BsArrowLeft } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import EmptyCart from "../../assets/emptyCart.svg"
import { showCart } from "../../features/cartSlice/cartSlice"

const CartUI = () => {
  const dispatch = useDispatch()
  const { toggle } = useSelector((state) => state.cart)

  return (
    <div className="bg-white fixed top-0 right-0 bottom-0 z-50 p-6 w-full md:w-[350px]">
      <div className="flex items-center justify-between">
        <div onClick={() => dispatch(showCart())} className="cursor-pointer">
          <BsArrowLeft className="w-5 h-5" />
        </div>
        <h1 className="text-xl font-semibold">Cart</h1>
        <div className="flex items-center gap-2 bg-gray-200 px-2 py-1 rounded-lg cursor-pointer">
          <p className="">Clear</p>
          <AiOutlineClear className="w-5 h-5" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-screen gap-6">
        <img className="w-80" src={EmptyCart} alt="empty cart" />
        <p className="text-xl font-medium">Add some items to your cart</p>
      </div>
    </div>
  )
}

export default CartUI
