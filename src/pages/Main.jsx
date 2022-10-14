import React, { useRef } from "react"
import { motion } from "framer-motion"
import Delivery from "../assets/delivery.png"
import HeroBG from "../assets/heroBg.png"
import HeroCard from "../components/HeroCard"

import { IoIosArrowForward } from "react-icons/io"
import { IoIosArrowBack } from "react-icons/io"
import RowContainer from "../components/RowContainer"
import MenuContainer from "../components/MenuContainer"
import { useSelector } from "react-redux"

import CartUI from "../components/cart/CartUI"

const Main = () => {
  const rowContainerRef = useRef()
  const { foodItems } = useSelector((state) => state.food)
  const { toggleCart } = useSelector((state) => state.cart)

  const scrollTo = (scrollOffset) => {
    rowContainerRef.current.scrollLeft += scrollOffset
  }

  return (
    <main id="#home">
      <div className="bg-primary py-3 px-5 md:py-5 md:px-12 lg:px-16">
        {/* Hero Section */}
        <div className="pt-12 lg:pt-20 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 ">
          <section className="flex flex-1 flex-col gap-6 lg:items-start">
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

            <button className="bg-orange-400 py-3 px-6 rounded-lg ">
              Order Now
            </button>
          </section>

          <section className="py-2 flex-1 flex items-center relative lg:justify-end xl:bottom-10">
            <img
              className="w-full xs:h-[400px] md:scale-y-125 lg:w-[400px] lg:scale-y-150"
              src={HeroBG}
              alt="hero-background"
            />

            <div className="h-full absolute top-0 left-0 flex flex-wrap items-center justify-center gap-4 py-4 xs:top-7  lg:left-10 lg:top-20 xl:flex-col xl:gap-16 xl:left-36 2xl:left-56 ">
              <HeroCard />
            </div>
          </section>
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

          <RowContainer
            flag={true}
            rowContainerRef={rowContainerRef}
            data={foodItems
              ?.filter((item) => item.category === "fruits")
              .reverse()}
          />
        </section>
        {/* Menu Section */}
        <MenuContainer />
        ``
        {toggleCart && <CartUI />}
      </div>
    </main>
  )
}

export default Main
