import React from "react"
import { motion } from "framer-motion"
import { AiOutlineClear, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { BsArrowLeft } from "react-icons/bs"
import EmptyCart from "../../assets/emptyCart.svg"

import { useDispatch, useSelector } from "react-redux"
import { increaseQty, showCart } from "../../features/cartSlice/cartSlice"

const CartUI = () => {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cart)

  const reversed = [...cartItems].reverse()

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="bg-white fixed top-0 right-0 bottom-0 z-50 w-full md:w-[375px]"
    >
      {/* Cart header */}
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

      {/* Cart Section */}
      {cartItems.length > 0 ? (
        <div className="bg-black rounded-t-[2rem] h-full">
          <div>
            {/* Cart items */}
            <div className="my-8 h-[370px] p-4 overflow-y-auto scrollbar scrollbar-thumb-orange-400 scrollbar-track-gray-900">
              {cartItems.length > 0 &&
                reversed?.map((item) => (
                  <div
                    key={item?.id}
                    className="bg-gray-700 flex items-center justify-between gap-2 px-2 py-1 text-white rounded-lg my-6"
                  >
                    <div>
                      <img
                        className="w-20 h-20 object-contain"
                        src={item?.imageURL}
                        alt={item?.title}
                      />
                    </div>
                    <div className="mr-auto">
                      <p className="mb-1">{item?.title}</p>
                      <p>$ {item?.price}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="cursor-pointer">
                        <AiOutlineMinus />
                      </span>
                      <span>{item.qty}</span>
                      <span className="cursor-pointer">
                        <AiOutlinePlus
                          onClick={() => dispatch(increaseQty(item))}
                        />
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Total Section */}
          <div className="bg-gray-600 rounded-t-[2rem] p-8 absolute bottom-0 left-0 right-0 h-[45%] flex flex-col justify-center">
            <div className="flex flex-col gap-7">
              <div className="flex justify-between text-xl text-cardOverlay">
                <p>Sub Total</p>
                <p>$ 1902</p>
              </div>
              <div className="flex justify-between text-xl text-cardOverlay">
                <p>Delivery</p>
                <p>$ 24</p>
              </div>
              <hr />
              <div className="flex justify-between text-xl font-semibold text-white">
                <p>Total</p>
                <p>$ 1990.56</p>
              </div>

              <button className="bg-gradient-to-tr from-orange-500 to-orange-600 text-white font-medium text-xl py-2 rounded-3xl">
                Check Out
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen gap-6">
          <img className="w-80" src={EmptyCart} alt="empty cart" />
          <p className="text-xl font-medium">Add some items to your cart</p>
        </div>
      )}
    </motion.div>
  )
}

export default CartUI
