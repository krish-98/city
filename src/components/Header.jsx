import React from "react"
import Logo from "../assets/logo.png"
import { MdShoppingBasket } from "react-icons/md"
import Avatar from "../assets/avatar2.png"
import { motion } from "framer-motion"

const Header = () => {
  return (
    <>
      {/* Mobile Navbar */}
      <nav className="md:hidden flex items-center justify-between py-3 px-5 bg-primary sticky top-0">
        <motion.div
          whileTap={{ scale: 0.75 }}
          className="relative cursor-pointer"
        >
          <MdShoppingBasket className="w-7 h-6 text-textColor" />
          <span className="absolute bottom-4 left-3 bg-cartNumBg w-6 h-6 text-center rounded-full text-white text-sm">
            2
          </span>
        </motion.div>

        <div className="flex items-center gap-2 cursor-pointer">
          <img className="w-8 object-contain" src={Logo} alt="site logo" />
          <h1 className="text-xl font-bold">City</h1>
        </div>

        <motion.img
          whileTap={{ scale: 0.75 }}
          className="w-10 object-contain cursor-pointer"
          src={Avatar}
          alt="user-avatar"
        />
      </nav>

      {/* Laptop & Desktop Navbar*/}
      <nav className="hidden md:flex justify-between py-5 px-16 bg-primary sticky top-0">
        <div className="flex items-center gap-2 cursor-pointer">
          <img className="w-8 object-contain" src={Logo} alt="site logo" />
          <h1 className="text-xl font-bold">City</h1>
        </div>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8 text-textColor ">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Service</a>
            </li>
          </ul>
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="relative cursor-pointer"
          >
            <MdShoppingBasket className="w-7 h-6 text-textColor" />
            <span className="absolute bottom-4 left-3 bg-cartNumBg w-6 h-6 text-center rounded-full text-white text-sm">
              2
            </span>
          </motion.div>
          <motion.img
            whileTap={{ scale: 0.75 }}
            className="w-10 object-contain cursor-pointer"
            src={Avatar}
            alt="user-avatar"
          />
        </div>
      </nav>
    </>
  )
}

export default Header
