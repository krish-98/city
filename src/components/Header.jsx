import React, { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import Logo from "../assets/logo.png"
import Avatar from "../assets/avatar2.png"
import { MdShoppingBasket } from "react-icons/md"
import { BsPlusSquareDotted } from "react-icons/bs"
import { MdLogout } from "react-icons/md"

import { useDispatch, useSelector } from "react-redux"
import { signIn, signOut } from "../features/authSlice/authSlice"

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  console.log(user)

  const handleSignIn = () => {
    if (!user.uid) {
      dispatch(signIn())
    } else if (user.uid) {
      setToggle(!toggle)
    }
  }

  const handleSignOut = () => {
    dispatch(signOut())
    setToggle(!toggle)
  }

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="md:hidden flex items-center justify-between py-3 px-5 bg-primary sticky top-0 z-40">
        <motion.div
          whileTap={{ scale: 0.75 }}
          className="relative cursor-pointer"
        >
          <MdShoppingBasket className="w-7 h-6 text-textColor" />
          <span className="absolute bottom-4 left-3 bg-cartNumBg w-6 h-6 text-center rounded-full text-white text-sm">
            2
          </span>
        </motion.div>

        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <img className="w-8 object-contain" src={Logo} alt="site logo" />
          <h1 className="text-xl font-bold">City</h1>
        </Link>

        <div className="relative">
          <motion.img
            onClick={handleSignIn}
            whileTap={{ scale: 0.75 }}
            className="w-10 object-contain cursor-pointer rounded-full"
            src={user.photoURL ? user?.photoURL : Avatar}
            alt="user-avatar"
          />

          {/* dropdown list */}
          {toggle && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="absolute top-14 right-0 bg-white rounded-xl"
            >
              <div className="flex items-center gap-2 py-2 px-5 hover:bg-gray-100 cursor-pointer text-textColor rounded-t-xl hover:duration-500">
                <span className="w-20">New Item</span>
                <BsPlusSquareDotted className="w-6 h-5" />
              </div>

              <div
                onClick={handleSignOut}
                className="flex items-center gap-2 py-2 px-5 hover:bg-gray-100 cursor-pointer text-textColor rounded-b-xl hover:duration-500"
              >
                <span className="w-20">Logout</span>
                <MdLogout className="w-6 h-5" />
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Laptop & Desktop Navbar*/}
      <nav className="hidden md:flex justify-between py-5 px-12 lg:px-16 bg-primary sticky top-0 z-40">
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <img className="w-8 object-contain" src={Logo} alt="site logo" />
          <h1 className="text-xl font-bold">City</h1>
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8 text-textColor "
          >
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
          </motion.ul>

          <motion.div
            whileTap={{ scale: 0.75 }}
            className="relative cursor-pointer"
          >
            <MdShoppingBasket className="w-7 h-6 text-textColor" />
            <span className="absolute bottom-4 left-3 bg-cartNumBg w-6 h-6 text-center rounded-full text-white text-sm">
              2
            </span>
          </motion.div>

          <div className="relative">
            <motion.img
              onClick={handleSignIn}
              whileTap={{ scale: 0.75 }}
              className="w-10 object-contain cursor-pointer rounded-full"
              src={user.photoURL ? user?.photoURL : Avatar}
              alt="user-avatar"
            />

            {/* dropdown list */}
            {toggle && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="absolute top-14 right-0 bg-white rounded-xl"
              >
                <div className="flex items-center gap-2 py-2 px-5 hover:bg-gray-100 cursor-pointer text-textColor rounded-t-xl hover:duration-500">
                  <span className="w-20">New Item</span>
                  <BsPlusSquareDotted className="w-6 h-5" />
                </div>

                <div
                  onClick={handleSignOut}
                  className="flex items-center gap-2 py-2 px-5 hover:bg-gray-100 cursor-pointer text-textColor rounded-b-xl hover:duration-500"
                >
                  <span className="w-20">Logout</span>
                  <MdLogout className="w-6 h-5" />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
