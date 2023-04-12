import React from "react"

import { Hero, FruitSection, MenuContainer } from "../components"

const Main = () => {
  return (
    <main className="bg-primary px-5 md:py-5 md:px-12 lg:px-16">
      <Hero />

      <FruitSection />

      <MenuContainer />
    </main>
  )
}

export default Main
