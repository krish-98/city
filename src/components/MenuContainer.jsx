import React, { useState } from "react"
import { useSelector } from "react-redux"
import { motion } from "framer-motion"

import { IoFastFoodSharp } from "react-icons/io5"
import { categories } from "../utils/categories"
import RowContainer from "./RowContainer"

const MenuContainer = () => {
  const [active, setActive] = useState("chicken")
  const { foodItems } = useSelector((state) => state.food)

  return (
    <section id="menu">
      <h2 className="text-2xl font-semibold relative before:content-[''] before:absolute before:top-9 before:w-32 before:h-[.3rem] before:bg-gradient-to-r before:from-orange-400 before:to-orange-300 before:rounded-lg">
        Our Hot Dishes
      </h2>

      <div className="my-16 flex items-center lg:justify-center gap-6 overflow-x-scroll scrollbar-none">
        {categories?.map((category) => (
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
                  active === category.urlParamName ? "text-black" : "text-white"
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

      <RowContainer
        flag={false}
        data={foodItems?.filter((item) => item.category === active)}
      />
    </section>
  )
}

export default MenuContainer
