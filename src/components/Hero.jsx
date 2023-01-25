import Delivery from "../assets/delivery.png"
import HeroBG from "../assets/heroBg.png"
import HeroCard from "../components/HeroCard"

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-12 lg:pt-20 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 "
    >
      <div className="flex flex-1 flex-col gap-6 lg:items-start">
        <div>
          <p className="inline-block text-orange-400 font-bold bg-orange-100 rounded-full px-3 py-1 drop-shadow-xl">
            Bike Delivery
            <img
              className="inline-block ml-2 w-8 h-8 object-contain bg-white rounded-full"
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
          distinctio culpa fugit consectetur mollitia, corporis deserunt, minima
          nam soluta atque quae et quaerat repellat est magnam, placeat ullam.
          Exercitationem officia voluptate expedita architecto distinctio
          consequuntur animi placeat libero obcaecati repudiandae.
        </p>

        <button className="bg-orange-400 py-3 px-6 rounded-lg">
          Order Now
        </button>
      </div>

      <div className="py-2 flex-1 flex items-center relative lg:justify-end ">
        <img
          className="w-full xs:h-[400px] md:scale-y-125 lg:w-[400px] lg:scale-y-[1.4]"
          src={HeroBG}
          alt="hero-background"
        />

        <div className="h-full absolute top-0 left-0 flex flex-wrap items-center justify-center gap-4 py-4 xs:top-7  lg:left-10 lg:top-20 xl:flex-col xl:gap-16 xl:left-36 2xl:left-56 ">
          <HeroCard />
        </div>
      </div>
    </section>
  )
}
export default Hero
