import React from "react"

import { IoFastFood } from "react-icons/io5"
import { GoCloudUpload } from "react-icons/go"
import { GiForkKnifeSpoon } from "react-icons/gi"
import { CgDollar } from "react-icons/cg"

const CreateItem = () => {
  return (
    <div className="flex items-center justify-center bg-primary h-screen ">
      <form className="flex flex-col items-center justify-center gap-6 w-[90%] md:w-[70%] mx-auto px-4 py-6 border border-gray-300 rounded-xl">
        <div className="flex items-center gap-2 border-b border-b-gray-300 py-2 w-full">
          <IoFastFood className="w-5 h-5" />
          <input
            className="outline-none w-full bg-primary placeholder:text-lg placeholder:bg-primary"
            type="text"
            placeholder="Give me a title"
          />
        </div>

        <select className="w-full p-2 outline-none rounded-lg" name="" id="">
          <option value="Select Category">Select Category</option>
          <option value="Chicken">Chicken</option>
          <option value="Curry">Curry</option>
          <option value="Fish">Fish</option>
          <option value="Rice">Rice</option>
          <option value="Fruits">Fruits</option>
          <option value="Icecreams">Icecreams</option>
          <option value="Soft Drinks">Soft Drinks</option>
        </select>

        <div className="flex flex-col items-center border-2 border-gray-400 border-dotted w-full rounded-lg py-20 px-6 md:py-40">
          <GoCloudUpload className="w-8 h-8 text-lighttextGray" />
          <p>Click here to uphold</p>
          <input className="hidden" type="file" name="" id="" />
        </div>

        <div className="flex flex-col md:flex-row md:gap-4 w-full">
          <div className="flex items-center gap-2 border-b border-b-gray-300 py-2 w-full">
            <GiForkKnifeSpoon className="w-5 h-5" />
            <input
              className="outline-none w-full bg-primary placeholder:text-lg placeholder:bg-primary"
              type="text"
              placeholder="Calories"
            />
          </div>

          <div className="flex items-center gap-2 border-b border-b-gray-300 py-2 w-full">
            <CgDollar className="w-5 h-5" />
            <input
              className="outline-none w-full bg-primary placeholder:text-lg placeholder:bg-primary"
              type="text"
              placeholder="Price"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-green-400 tracking-wider text-white font-semibold w-full py-2 rounded-lg md:w-auto md:self-end md:py-3 md:px-16"
        >
          Save
        </button>
      </form>
    </div>
  )
}

export default CreateItem
