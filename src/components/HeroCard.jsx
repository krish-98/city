import React from "react"
import { cardItems } from "../utils/cardItems"

const HeroCard = () => {
  return cardItems.map((item) => (
    <div
      key={item.id}
      className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
    >
      <img
        className="w-20 lg:w-40 -mt-10 lg:-mt-20"
        src={item.image}
        alt={item.name}
      />
      <h3 className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
        {item.name}
      </h3>
      <p className="text=[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
        {item.flavour}
      </p>
      <p className="text-sm font-semibold text-headingColor">
        <span className="text-xs text-red-600">$</span>
        {item.price}
      </p>
    </div>
  ))
}

export default HeroCard
