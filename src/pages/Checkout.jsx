import React from "react"
import { useSelector } from "react-redux"
import { useFormik } from "formik"
import * as Yup from "yup"

const Checkout = () => {
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart)
  const radioOptions = [
    { key: "Option 1", value: "value 1" },
    { key: "Option 2", value: "value 2" },
    { key: "Option 3", value: "value 3" },
  ]
  const formik = useFormik({
    // Initial form values
    initialValues: {
      name: "",
      address: "",
      pincode: "",
      city: "",
      phoneNumber: "",
      checked: "",
    },

    // Validate Form
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 characters or less.")
        .required("Name is required"),
      address: Yup.string().required("Address is required"),
      pincode: Yup.string()
        .min(6, "Pincode must be 6 digits")
        .required("Pincode is required"),
      city: Yup.string().required("City is required"),
      phoneNumber: Yup.string()
        .min(10, "Phone Number must have 10 digits")
        .required("Phone Number is required"),
    }),

    // Submit Form
    onSubmit: (values) => {
      console.log("Submitted")
    },
  })

  return (
    <div className="h-[calc(100vh-80px)] flex flex-col items-center gap-8 pt-8 bg-primary">
      <h3 className="text-4xl font-semibold lg:text-5xl">Checkout</h3>

      <form
        onSubmit={formik.handleSubmit}
        className="w-full p-4 md:w-[70%] lg:flex lg:items-center lg:gap-8 lg:justify-center lg:my-24"
      >
        <div className="flex flex-col gap-10 mb-8 lg:flex-1">
          <div className="w-full flex justify-between items-center relative">
            <label htmlFor="" className="w-[20%] text-right">
              Name
            </label>

            <input
              className="w-[75%] py-2 px-3 border-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400 focus:bg-orange-100 placeholder:text-sm rounded-lg"
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Mr.Miller"
            />
            <span className="absolute bottom-11 left-40 text-cartNumBg text-sm">
              {formik.touched.name && formik.errors.name
                ? formik.errors.name
                : ""}
            </span>
          </div>

          <div className="w-full flex justify-between items-center relative">
            <label htmlFor="" className="w-[20%] text-right">
              Address
            </label>
            <input
              className="w-[75%] py-2 px-3 border-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400 focus:bg-orange-100 placeholder:text-sm rounded-lg"
              type="text"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="432, st.thomas street"
            />
            <span className="absolute bottom-11 left-40 text-cartNumBg text-sm">
              {formik.touched.address && formik.errors.address
                ? formik.errors.address
                : ""}
            </span>
          </div>

          <div className="w-full flex justify-between items-center relative">
            <label htmlFor="" className="w-[20%] text-right">
              Pincode
            </label>
            <input
              className="w-[75%] py-2 px-3 border-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400 focus:bg-orange-100 placeholder:text-sm rounded-lg"
              type="number"
              name="pincode"
              value={formik.values.pincode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="501234"
            />
            <span className="absolute bottom-11 left-40 text-cartNumBg text-sm">
              {formik.touched.pincode && formik.errors.pincode
                ? formik.errors.pincode
                : ""}
            </span>
          </div>

          <div className="w-full flex justify-between items-center relative">
            <label htmlFor="" className="w-[20%] text-right">
              City
            </label>
            <input
              className="w-[75%] py-2 px-3 border-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400 focus:bg-orange-100 placeholder:text-sm rounded-lg"
              type="text"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Mumbai"
            />
            <span className="absolute bottom-11 left-40 text-cartNumBg text-sm">
              {formik.touched.city && formik.errors.city
                ? formik.errors.city
                : ""}
            </span>
          </div>

          <div className="w-full flex justify-between items-center relative">
            <label htmlFor="" className="w-[20%] text-right">
              Phone Number
            </label>
            <input
              className="w-[75%] py-2 px-3 border-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400 focus:bg-orange-100 placeholder:text-sm rounded-lg"
              type="number"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="+91 9876543210"
            />
            <span className="absolute bottom-11 left-40 text-cartNumBg text-sm">
              {formik.touched.phoneNumber && formik.errors.phoneNumber
                ? formik.errors.phoneNumber
                : ""}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center lg:flex-1">
          <p className="text-xl font-semibold lg:text-2xl">Payment Method</p>

          <div className="flex gap-6 my-4">
            <label htmlFor="online">
              <input
                className="focus:outline-orange-400 focus:ring-orange-400 text-orange-400"
                type="radio"
                name="payment"
                value="online"
                id="online"
              />
              <span className="ml-2">Online</span>
            </label>

            <label htmlFor="cod">
              <input
                className="focus:outline-orange-400 focus:ring-orange-400 text-orange-400"
                type="radio"
                name="payment"
                value="cod"
                id="cod"
              />
              <span className="ml-2">COD</span>
            </label>
          </div>

          {/* Total Section */}
          <div className="w-full mb-4">
            <div className="flex items-center justify-between">
              <p className="text-lg">Item Total: </p>
              <p className="font-semibold">${cartTotalAmount.toFixed(2)}</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-lg">Delivery charge:</p>
              <p className="font-semibold">$30</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-lg flex flex-col">Total Cost: </p>
              <div className="flex flex-col items-end justify-center">
                <p className="font-semibold">
                  ${(cartTotalAmount + Number(30)).toFixed(2)}
                </p>
                <p>{`Your order (${cartItems.length} ${
                  cartItems.length === 1 ? "Item" : "Items"
                })`}</p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full uppercase tracking-wide bg-gradient-to-tr from-orange-500 to-orange-600 text-white text-center font-medium md:text-lg py-2 rounded-3xl hover:bg-gradient-to-tr focus:outline-orange-400 hover:from-orange-300 hover:to-orange-500 transition-all duration-500 ease-in-out lg:w-[50%] lg:self-end"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  )
}

export default Checkout
