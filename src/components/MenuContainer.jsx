import React, { useState } from "react"
import { useSelector } from "react-redux"
import { motion } from "framer-motion"

import { IoFastFoodSharp } from "react-icons/io5"
import { IoMdBasket } from "react-icons/io"
import { CgDollar } from "react-icons/cg"
import NotFound from "../assets/NotFound.svg"
import { categories } from "../utils/categories"

const MenuContainer = () => {
  const [active, setActive] = useState("chicken")
  const { foodItems } = useSelector((state) => state.food)

  return (
    <div>
      <h2 className="text-2xl font-semibold relative before:content-[''] before:absolute before:top-9 before:w-32 before:h-[.3rem] before:bg-gradient-to-r before:from-orange-400 before:to-orange-300 before:rounded-lg">
        Our Hot Dishes
      </h2>

      <div className="my-16 flex items-center justify-center gap-6 overflow-x-scroll scrollbar-none">
        {categories &&
          categories.map((category) => (
            <motion.div
              key={category.id}
              whileTap={{ scale: 0.75 }}
              onClick={() => setActive(category.urlParamName)}
              className={`group flex flex-col items-center justify-center gap-3 ${
                active === category.urlParamName ? "bg-cartNumBg" : "bg-white"
              } rounded-xl hover:bg-cartNumBg w-20 h-32 py-12 px-14 cursor-pointer drop-shadow-lg my-4`}
            >
              <div
                className={`p-2 rounded-full ${
                  active === category.urlParamName ? "bg-white" : "bg-cartNumBg"
                } group-hover:bg-white`}
              >
                <IoFastFoodSharp
                  className={`w-6 h-6  ${
                    active === category.urlParamName
                      ? "text-black"
                      : "text-white"
                  } group-hover:text-black`}
                />
              </div>
              <p
                className={`font-semibold text-sm text-center ${
                  active === category.urlParamName ? "text-white" : "text-black"
                } group-hover:text-white`}
              >
                {category.name}
              </p>
            </motion.div>
          ))}
      </div>

      {/* <div className="flex flex-wrap items-center justify-center gap-6">
        {dishes &&
          dishes?.map((dish) => (
            <div
              key={dish.id}
              className="w-300 min-w-[300px] md:w-[340px] md:min-w-[340px]  p-2 bg-cardOverlay rounded-xl backdrop-blur-lg hover:bg-primary hover:drop-shadow-lg"
            >
              <div className="w-full flex justify-between items-center">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  className="w-40 h-36 object-contain -mt-8"
                  src={dish?.imageURL}
                  alt={dish?.title}
                />
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="bg-cartNumBg p-2 rounded-full cursor-pointer hover:shadow-md"
                >
                  <IoMdBasket className="w-5 h-5 text-white" />
                </motion.div>
              </div>

              <div className="flex flex-col items-end">
                <h3 className="text-xl font-semibold">{dish?.title}</h3>
                <p>{dish?.calories} calories</p>
                <div className="flex items-center">
                  <div>
                    <CgDollar className="text-cartNumBg" />
                  </div>
                  <p className="font-semibold">{dish?.price}</p>
                </div>
              </div>
            </div>
          ))}
      </div> */}
    </div>
  )
}

export default MenuContainer
