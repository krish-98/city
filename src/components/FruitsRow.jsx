import React from "react"
import { IoMdBasket } from "react-icons/io"
import { CgDollar } from "react-icons/cg"

import { useSelector } from "react-redux"

const FruitsRow = () => {
  const { foodItems } = useSelector((state) => state.food)

  const filteredFruits = foodItems?.filter((item) => item.category === "fruits")

  return (
    <div className="w-full my-12 flex items-center gap-4 overflow-x-scroll ">
      {filteredFruits &&
        filteredFruits?.map((fruit) => (
          <div className="bg-white w-full md:min-w-[350px] max-h-[200px] p-2 rounded-xl hover:bg-primary ">
            <div key={fruit.id} className="flex justify-between items-center">
              <img className="w-40" src={fruit?.imageURL} alt={fruit?.title} />
              <div className="bg-cartNumBg p-2 rounded-full cursor-pointer">
                <IoMdBasket className="w-5 h-5 text-white" />
              </div>
            </div>

            <div className="flex flex-col items-end">
              <h3 className="text-xl font-semibold">{fruit?.title}</h3>
              <p>{fruit?.calories} calories</p>
              <div className="flex items-center">
                <div>
                  <CgDollar className="text-cartNumBg" />
                </div>
                <p className="font-semibold">{fruit?.price}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default FruitsRow
