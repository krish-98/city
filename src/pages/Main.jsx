import React from "react"

import Hero from "../components/Hero"
import FruitSection from "../components/FruitSection"
import MenuContainer from "../components/MenuContainer"

const Main = () => {
  return (
    <main>
      <div className="bg-primary py-3 px-5 md:py-5 md:px-12 lg:px-16">
        {/* Hero Section */}
        <Hero />

        {/* Fruit Section */}
        <FruitSection />

        {/* Menu Section */}
        <MenuContainer />
      </div>
    </main>
  )
}

export default Main
