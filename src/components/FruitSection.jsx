import { useRef } from "react"
import { motion } from "framer-motion"
import RowContainer from "../components/RowContainer"

import { IoIosArrowForward } from "react-icons/io"
import { IoIosArrowBack } from "react-icons/io"
import { useSelector } from "react-redux"

const FruitSection = () => {
  const rowContainerRef = useRef()
  const { foodItems } = useSelector((state) => state.food)

  const scrollTo = (scrollOffset) => {
    rowContainerRef.current.scrollLeft += scrollOffset
  }

  return (
    <section className="my-12">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold relative before:content-[''] before:absolute before:top-9 before:w-32 before:h-[.3rem] before:bg-gradient-to-r before:from-orange-400 before:to-orange-300 before:rounded-lg">
          Our Fresh & Healthy Fruits
        </p>
        <div className="hidden md:flex items-center gap-4">
          <motion.div
            whileTap={{ scale: 0.75 }}
            onClick={() => scrollTo(-300)}
            className="bg-orange-400 p-2 rounded-lg cursor-pointer"
          >
            <IoIosArrowBack className="text-white" />
          </motion.div>

          <motion.div
            whileTap={{ scale: 0.75 }}
            onClick={() => scrollTo(300)}
            className="bg-orange-400 p-2 rounded-lg cursor-pointer"
          >
            <IoIosArrowForward className="text-white" />
          </motion.div>
        </div>
      </div>

      <RowContainer
        flag={true}
        rowContainerRef={rowContainerRef}
        data={foodItems?.filter((item) => item.category === "fruits").reverse()}
      />
    </section>
  )
}
export default FruitSection
