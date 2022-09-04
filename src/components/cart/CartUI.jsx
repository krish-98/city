import React from "react"
import { motion } from "framer-motion"
import { AiOutlineClear, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { BsArrowLeft } from "react-icons/bs"

import { useDispatch } from "react-redux"
import { showCart } from "../../features/cartSlice/cartSlice"

const CartUI = () => {
  const dispatch = useDispatch()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white fixed top-0 right-0 bottom-0 z-50 w-full md:w-[375px]"
    >
      {/* cart header */}
      <div className="flex items-center justify-between pt-6 px-2">
        <div onClick={() => dispatch(showCart())} className="cursor-pointer">
          <BsArrowLeft className="w-5 h-5" />
        </div>
        <h1 className="text-xl font-semibold">Cart</h1>
        <motion.div
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 bg-gray-200 px-2 py-1 rounded-lg cursor-pointer"
        >
          <p className="">Clear</p>
          <AiOutlineClear className="w-5 h-5" />
        </motion.div>
      </div>

      <div className="mt-6 bg-black bg-opacity-90 h-[340px] md:h-44 p-4 rounded-t-[4rem]">
        {/* cart items */}
        <div className="my-8 h-[50%] overflow-y-auto scrollbar-none">
          <div className="bg-gray-700 flex items-center justify-between gap-2 px-2 py-1 text-white rounded-lg my-6">
            <div>
              <img
                className="w-20 h-20 object-contain"
                src="https://firebasestorage.googleapis.com/v0/b/city-restaurant-app-fea36.appspot.com/o/Images%2F1661864965718-f7.png?alt=media&token=15243c78-266a-42d3-86f4-ff3592e0e6b6"
                alt=""
              />
            </div>
            <div className="mr-auto">
              <p className="mb-1">Pomegranate</p>
              <p>$ 12</p>
            </div>
            <div className="flex items-center gap-4">
              <span>
                <AiOutlineMinus />
              </span>
              <span>1</span>
              <span>
                <AiOutlinePlus />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-600 rounded-t-[4rem]">
        <div>
          <div>
            <p>Sub Total</p>
            <p>$ 1902</p>
          </div>
          <div>
            <p>Delivery</p>
            <p>$ 24</p>
          </div>
          <hr />
          <div>
            <p>Total</p>
            <p>$ 1990.56</p>
          </div>

          <button>Check Out</button>
        </div>
      </div>

      {/* <div className="flex flex-col items-center justify-center h-screen gap-6">
        <img className="w-80" src={EmptyCart} alt="empty cart" />
        <p className="text-xl font-medium">Add some items to your cart</p>
      </div> */}
    </motion.div>
  )
}

export default CartUI
