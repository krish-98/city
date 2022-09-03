import React from "react"
import { motion } from "framer-motion"
import { IoMdBasket } from "react-icons/io"
import { CgDollar } from "react-icons/cg"
import NotFound from "../assets/NotFound.svg"

const RowContainer = ({ flag, rowContainerRef, data }) => {
  return (
    <div
      ref={rowContainerRef}
      className={`w-full my-12 flex items-center gap-4 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      } }  `}
    >
      {data ? (
        data?.map((fruit) => (
          <div
            key={fruit.id}
            className="w-300 min-w-[300px] md:w-[340px] md:min-w-[340px]  p-2 bg-cardOverlay rounded-xl backdrop-blur-lg hover:bg-primary hover:drop-shadow-lg my-8"
          >
            <div className="w-full flex justify-between items-center">
              <motion.img
                whileHover={{ scale: 1.2 }}
                className="w-40 h-36 object-contain -mt-8"
                src={fruit?.imageURL}
                alt={fruit?.title}
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="bg-cartNumBg p-2 rounded-full cursor-pointer hover:shadow-md"
              >
                <IoMdBasket className="w-5 h-5 text-white" />
              </motion.div>
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
        ))
      ) : (
        <>
          <img className="w-[30%] mx-auto" src={NotFound} alt="not found" />
        </>
      )}
    </div>
  )
}

export default RowContainer
