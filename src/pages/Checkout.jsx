import React from "react"
import { useSelector } from "react-redux"

const Checkout = () => {
  const { cartItems, cartTotalQuantity, cartTotalAmount } = useSelector(
    (state) => state.cart
  )

  return (
    <div className="h-screen flex flex-col items-center gap-8 pt-8 bg-primary">
      <h3 className="text-4xl font-semibold">Checkout</h3>

      <form className="w-full p-4">
        <div className="flex flex-col gap-4 mb-8">
          <div className="w-full flex justify-between items-center">
            <label htmlFor="" className="w-[20%] text-right">
              Name
            </label>
            <input
              className="w-[75%] py-2 px-3  focus:outline-none placeholder:text-sm rounded-lg"
              type="text"
              placeholder="Mr.Miller"
            />
          </div>

          <div className="w-full flex justify-between items-center">
            <label htmlFor="" className="w-[20%] text-right">
              Address
            </label>
            <input
              className="w-[75%] py-2 px-3  focus:outline-none placeholder:text-sm rounded-lg"
              type="text"
              placeholder="432, st.thomas street"
            />
          </div>

          <div className="w-full flex justify-between items-center">
            <label htmlFor="" className="w-[20%] text-right">
              Pincode
            </label>
            <input
              className="w-[75%] py-2 px-3  focus:outline-none placeholder:text-sm rounded-lg"
              type="number"
              placeholder="501234"
            />
          </div>

          <div className="w-full flex justify-between items-center">
            <label htmlFor="" className="w-[20%] text-right">
              City
            </label>
            <input
              className="w-[75%] py-2 px-3  focus:outline-none placeholder:text-sm rounded-lg"
              type="text"
              placeholder="Mumbai"
            />
          </div>

          <div className="w-full flex justify-between items-center">
            <label htmlFor="" className="w-[20%] text-right">
              Phone Number
            </label>
            <input
              className="w-[75%] py-2 px-3  focus:outline-none placeholder:text-sm rounded-lg"
              type="number"
              placeholder="+91 9876543210"
            />
          </div>
        </div>

        <div className="flex flex-col items-center border">
          <p className="text-xl font-semibold">Payment Method</p>

          <div className="flex gap-6 my-4">
            <label htmlFor="online">
              <input type="radio" name="payment" value="online" id="online" />
              <span className="ml-1">Online</span>
            </label>

            <label htmlFor="cod">
              <input type="radio" name="payment" value="cod" id="cod" />
              <span className="ml-1">COD</span>
            </label>
          </div>

          <div className="w-full">
            <p className="text-lg">
              Price:{" "}
              <span className="font-semibold">
                ${(cartTotalAmount + Number(30)).toFixed(2)}
              </span>
            </p>

            <p className="text-lg">
              Delivery charge: <span className="font-semibold">$30</span>
            </p>

            <p className="text-lg">
              Total Cost:{" "}
              <span className="font-semibold">
                ${(cartTotalAmount + Number(30)).toFixed(2)}
              </span>
            </p>
          </div>

          <button
            type="submit"
            className="w-full uppercase tracking-wide bg-gradient-to-tr from-orange-500 to-orange-600 text-white text-center font-medium md:text-lg py-2 rounded-3xl hover:bg-gradient-to-tr hover:from-orange-300 hover:to-orange-500 transition-all duration-500 ease-in-out"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  )
}

export default Checkout
