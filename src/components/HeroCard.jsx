import React from "react"
import { cardItems } from "../utils/cardItems"

const HeroCard = () => {
  return cardItems.map((item) => (
    <div
      key={item.id}
      className="bg-cardOverlay w-52 my-3 rounded-3xl flex flex-col items-center gap-1 py-2 "
    >
      <img className="w-24" src={item.image} alt={item.name} />
      <h3 className="font-semibold">{item.name}</h3>
      <p className="text-lighttextGray font-semibold">{item.flavour}</p>
      <p>
        <span className="text-red-600 font-semibold text-sm mr-1">$</span>
        {item.price}
      </p>
    </div>
  ))
}

export default HeroCard
