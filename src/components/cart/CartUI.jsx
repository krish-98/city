import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { AiOutlineClear, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { BsArrowLeft } from "react-icons/bs"
import EmptyCart from "../../assets/emptyCart.svg"
import { FcGoogle } from "react-icons/fc"

import { useDispatch, useSelector } from "react-redux"
import {
  clearCart,
  decreaseQty,
  getTotals,
  increaseQty,
  showCart,
} from "../../features/cartSlice/cartSlice"
import { Link } from "react-router-dom"
import { signIn } from "../../features/authSlice/authSlice"

const CartUI = () => {
  const [toggle, setToggle] = useState(false)
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const { cartItems, cartTotalAmount, cartTotalQuantity } = useSelector(
    (state) => state.cart
  )

  const reversed = [...cartItems].reverse()

  const handleSignIn = () => {
    if (!user.uid) {
      dispatch(signIn())
    } else if (user.uid) {
      setToggle(!toggle)
    }
  }

  useEffect(() => {
    dispatch(getTotals())
  }, [cartItems, dispatch])

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
        <h1 className="text-xl font-semibold">Cart ({cartTotalQuantity})</h1>
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => {
            dispatch(clearCart())
          }}
          className="flex items-center gap-2 bg-gray-200 px-2 py-1 rounded-lg cursor-pointer"
        >
          <p>Clear</p>
          <AiOutlineClear className="w-5 h-5" />
        </motion.div>
      </div>

      {/* Cart Section */}
      {cartItems?.length > 0 ? (
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
                      <p>$ {(item?.price * item?.qty).toFixed()}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span
                        onClick={() => dispatch(decreaseQty(item))}
                        className="cursor-pointer"
                      >
                        <AiOutlineMinus />
                      </span>
                      <span>{item.qty}</span>
                      <span
                        onClick={() => dispatch(increaseQty(item))}
                        className="cursor-pointer"
                      >
                        <AiOutlinePlus />
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Total Section */}
          <div className="bg-gray-600 rounded-t-[2rem] p-8 absolute bottom-0 left-0 right-0 h-[45%] flex flex-col justify-center">
            <div className="flex flex-col gap-7">
              <div className="flex justify-between text-cardOverlay">
                <p>Sub Total</p>
                <p>$ {cartTotalAmount.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-cardOverlay">
                <p>Delivery</p>
                <p>$ 30</p>
              </div>
              <hr />
              <div className="flex justify-between font-semibold text-white">
                <p>Total</p>
                <p>$ {(cartTotalAmount + 30).toFixed(2)}</p>
              </div>

              {!user?.uid ? (
                <div
                  onClick={handleSignIn}
                  className="bg-white text-[#3f7ee8] py-3 rounded-lg flex items-center justify-center gap-2  hover:bg-orange-300 hover:text-white cursor-pointer transition-all duration-300 ease-in-out  "
                >
                  <FcGoogle size={"1.3rem"} />
                  <p> Sign In to Continue</p>
                </div>
              ) : (
                <Link
                  to="/checkout"
                  onClick={() => dispatch(showCart())}
                  className="uppercase tracking-wide bg-gradient-to-tr from-orange-500 to-orange-600 text-white text-center font-medium py-2 rounded-3xl hover:bg-gradient-to-tr hover:from-orange-300 hover:to-orange-500 transition-all duration-500 ease-in-out"
                >
                  Proceed to Check Out
                </Link>
              )}
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
