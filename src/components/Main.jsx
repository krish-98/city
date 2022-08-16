import React from "react"
import Delivery from "../assets/delivery.png"
import HeroBG from "../assets/heroBg.png"
import HeroCard from "./HeroCard"

const Main = () => {
  return (
    <main className="bg-primary grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-auto">
      <div className="flex flex-col gap-6">
        <div>
          <p className="inline-block text-orange-400 font-bold bg-orange-100 rounded-full px-3 py-1 ">
            Bike Delivery
            <img
              className="inline-block ml-2 w-8 h-8 object-contain bg-white rounded-full "
              src={Delivery}
              alt="bike-delivery"
            />
          </p>
        </div>

        <h1 className="text-[2.75rem] font-bold">
          The Fastest Delivery in
          <span className="text-orange-500"> Your City</span>
        </h1>

        <p className="text-textColor text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
          distinctio culpa fugit consectetur mollitia, corporis deserunt, minima
          nam soluta atque quae et quaerat repellat est magnam, placeat ullam.
          Exercitationem officia voluptate expedita architecto distinctio
          consequuntur animi placeat libero obcaecati repudiandae.
        </p>

        <button className="bg-orange-400 py-3 px-6 rounded-lg">
          Order Now
        </button>
      </div>

      <div className="py-2 flex-1 flex items-center relative">
        <img
          className="ml-auto h-420 w-full lg:w-auto lg:h-650"
          src={HeroBG}
          alt="hero-background"
        />
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center gap-4 flex-wrap py-4 lg:px-32">
          <HeroCard />
        </div>
      </div>
    </main>
  )
}

export default Main
