import React from "react"
import Logo from "../assets/logo.png"
import { MdShoppingBasket } from "react-icons/md"
import Avatar from "../assets/avatar2.png"

const Header = () => {
  return (
    <>
      {/* Mobile Navbar */}
      <nav className="md:hidden flex items-center justify-between p-3 bg-primary">
        <div className="relative cursor-pointer">
          <MdShoppingBasket className="w-7 h-7" />
          <span className="absolute bottom-5 left-3 bg-cartNumBg w-6 h-6 text-center rounded-full text-white text-sm">
            2
          </span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <img className="w-8 object-contain" src={Logo} alt="site logo" />
          <h1 className="text-xl font-bold">City</h1>
        </div>

        <img
          className="w-10 object-contain cursor-pointer"
          src={Avatar}
          alt="user-avatar"
        />
      </nav>

      {/* Laptop & Desktop Navbar*/}
      <nav className="hidden md:flex justify-between py-5 px-12 bg-primary">
        <div className="flex items-center gap-2 cursor-pointer">
          <img className="w-8 object-contain" src={Logo} alt="site logo" />
          <h1 className="text-xl font-bold">City</h1>
        </div>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
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
          <div className="relative cursor-pointer">
            <MdShoppingBasket className="w-7 h-7" />
            <span className="absolute bottom-5 left-3 bg-cartNumBg w-6 h-6 text-center rounded-full text-white text-sm">
              2
            </span>
          </div>
          <img
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
