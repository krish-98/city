import React from "react"

import { Hero, FruitSection, MenuContainer } from "../components"

const Main = () => {
  return (
    <main>
      <div className="bg-primary py-3 px-5 md:py-5 md:px-12 lg:px-16">
        <Hero />

        <FruitSection />

        <MenuContainer />
      </div>
    </main>
  )
}

export default Main
