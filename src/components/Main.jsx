import React from "react"
import Delivery from "../assets/delivery.png"
import HeroBG from "../assets/heroBg.png"
import HeroCard from "./HeroCard"

const Main = () => {
  return (
    <main className="bg-primary grid grid-cols-1 gap-4 p-6 md:grid-cols-2">
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

      <div className="relative">
        <img
          className="h-[57rem] w-full xs:h-[50%] md:h-full"
          src={HeroBG}
          alt="hero-background"
        />
        <div className="absolute top-0 left-0 flex items-center justify-center flex-wrap gap-2 xs:px-2 xs:gap-4">
          <HeroCard />
        </div>
      </div>
    </main>
  )
}

export default Main
