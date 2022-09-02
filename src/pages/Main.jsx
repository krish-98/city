import React, { useRef } from "react"
import { motion } from "framer-motion"
import Delivery from "../assets/delivery.png"
import HeroBG from "../assets/heroBg.png"
import HeroCard from "../components/HeroCard"

import { IoIosArrowForward } from "react-icons/io"
import { IoIosArrowBack } from "react-icons/io"
import FruitsRow from "../components/FruitsRow"
import MenuContainer from "../components/MenuContainer"

const Main = () => {
  const rowContainerRef = useRef()

  const scrollTo = (scrollOffset) => {
    rowContainerRef.current.scrollLeft += scrollOffset
  }

  return (
    <main id="#home">
      <div className="bg-primary py-3 px-5 md:py-5 md:px-12 lg:px-16">
        {/* Hero Section */}
        <div className="pt-12 lg:pt-20 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 ">
          <section className="flex flex-col gap-6">
            <div>
              <p className="inline-block text-orange-400 font-bold bg-orange-100 rounded-full px-3 py-1 drop-shadow-xl">
                Bike Delivery
                <img
                  className="inline-block ml-2 w-8 h-8 object-contain bg-white rounded-full "
                  src={Delivery}
                  alt="bike-delivery"
                />
              </p>
            </div>

            <h1 className="text-[2.75rem] font-bold lg:text-[4.75rem]">
              The Fastest Delivery in
              <span className="text-orange-500"> Your City</span>
            </h1>

            <p className="text-textColor text-center md:text-left lg:w-[80%]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
              distinctio culpa fugit consectetur mollitia, corporis deserunt,
              minima nam soluta atque quae et quaerat repellat est magnam,
              placeat ullam. Exercitationem officia voluptate expedita
              architecto distinctio consequuntur animi placeat libero obcaecati
              repudiandae.
            </p>

            <button className="bg-orange-400 py-3 px-6 rounded-lg lg:w-[20%]">
              Order Now
            </button>
          </section>

          {/* <section className="py-2 flex-1 flex items-center relative border-2 border-dotted border-black lg:self-start">
          <img className="w-full" src={HeroBG} alt="hero-background" />

          <div className="w-full h-full absolute top-0 left-0 flex flex-wrap items-center justify-center gap-4 py-4 lg:px-32">
            <HeroCard />
          </div>
        </section> */}
        </div>

        {/* Fruit Section */}
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

          <FruitsRow flag={true} rowContainerRef={rowContainerRef} />
        </section>

        {/* Menu Section */}
        <MenuContainer />
      </div>
    </main>
  )
}

export default Main
