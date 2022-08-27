import React, { useState } from "react"
import { categories } from "../utils/categories"

import { IoFastFood } from "react-icons/io5"
import { GoCloudUpload } from "react-icons/go"
import { GiForkKnifeSpoon } from "react-icons/gi"
import { CgDollar } from "react-icons/cg"
import Spinner from "../components/Spinner"

import rice from "../assets/r5.png"
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage"
import { storage } from "../firebase.config"

const CreateItem = () => {
  const [inputFields, setInputFields] = useState({
    title: "",
    calories: "",
    price: "",
    category: "other",
    imageAsset: false,
  })
  const [fields, setfields] = useState(false)
  const [loading, setLoading] = useState(false)
  const [alertStatus, setAlertStatus] = useState("danger")
  const [msg, setMsg] = useState(null)

  const onChangeHandler = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value })
  }

  const uploadImage = (e) => {
    setLoading(true)
    const imageFile = e.target.files[0]
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`) // Creating a path to the Firebase Storage
    const uploadTask = uploadBytesResumable(storageRef, imageFile)

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log(`Upload is ${uploadProgress} progress % done`)
      },
      (error) => {
        console.log(error)
        setMsg("Error while uploading : Try again")
        setAlertStatus("danger")
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(`File available at ${downloadURL}`)
        })
        setAlertStatus("success")
        setMsg("Image uploaded successfully!😊")
      }
    )
    setLoading(false)
    setInputFields({ ...inputFields, imageAsset: true })
  }

  const submitForm = (e) => {
    e.preventDefault()
    const { title, calories, price, category } = inputFields

    if (
      title.trim().length > 0 &&
      calories.trim().length > 0 &&
      price.trim().length > 0 &&
      category !== "other"
    ) {
      setAlertStatus("success")
      setMsg("Data uploaded successfully")
      setInputFields({
        title: "",
        calories: "",
        price: "",
        category: "other",
        imageAsset: false,
      })
    } else {
      setAlertStatus("danger")
      setMsg("All fields are required!")
    }
  }

  return (
    <div className="flex items-center justify-center bg-primary h-screen">
      <form
        onSubmit={submitForm}
        className="flex flex-col items-center justify-center gap-6 w-[90%] md:w-[70%] mx-auto px-4 py-6 border border-gray-300 rounded-xl"
      >
        {msg && (
          <p
            className={`text-xl text-green-500 font-bold ${
              alertStatus === "danger" && "text-red-500"
            }`}
          >
            {msg}
          </p>
        )}

        <h1>{JSON.stringify(inputFields)}</h1>
        <div className="flex items-center gap-2 border-b border-b-gray-300 py-2 w-full">
          <IoFastFood className="w-5 h-5" />
          <input
            onChange={onChangeHandler}
            className="outline-none w-full bg-primary placeholder:text-lg placeholder:bg-primary"
            type="text"
            name="title"
            value={inputFields.title}
            placeholder="Give me a title"
          />
        </div>

        <select
          onChange={onChangeHandler}
          name="category"
          // value={inputFields.category}
          className="w-full p-2 outline-none rounded-lg cursor-pointer"
        >
          <option value="other">Select Category</option>
          {categories &&
            categories.map((item) => (
              <option key={item.id} value={item.urlParamName}>
                {item.name}
              </option>
            ))}
        </select>

        {loading ? (
          <div className="py-20 px-6 md:py-40">
            <Spinner />
          </div>
        ) : (
          <>
            {!inputFields.imageAsset ? (
              <>
                <label className="flex flex-col items-center border-2 border-gray-400 border-dotted w-full rounded-lg py-20 px-6 md:py-40 cursor-pointer">
                  <GoCloudUpload className="w-8 h-8 text-gray-400 hover:text-gray-500" />
                  <p>Click here to uphold</p>
                  <input
                    onChange={uploadImage}
                    className="hidden"
                    type="file"
                    name="uploadimage"
                    accept="image/*"
                    // multiple
                    id=""
                  />
                </label>
              </>
            ) : (
              <>
                <div className="h-[225px] md:h-[420px] border-2 border-dotted w-full rounded-lg cursor-pointer py-6 ">
                  <div className="relative h-full">
                    <img
                      className="w-full h-full object-contain"
                      src={rice}
                      alt="uploaded image"
                    />
                  </div>
                </div>
              </>
            )}
          </>
        )}

        <div className="flex flex-col md:flex-row md:gap-4 w-full">
          <div className="flex items-center gap-2 border-b border-b-gray-300 py-2 w-full">
            <GiForkKnifeSpoon className="w-5 h-5" />
            <input
              onChange={onChangeHandler}
              className="outline-none w-full bg-primary placeholder:text-lg placeholder:bg-primary"
              type="text"
              name="calories"
              value={inputFields.calories}
              placeholder="Calories"
            />
          </div>

          <div className="flex items-center gap-2 border-b border-b-gray-300 py-2 w-full">
            <CgDollar className="w-5 h-5" />
            <input
              onChange={onChangeHandler}
              className="outline-none w-full bg-primary placeholder:text-lg placeholder:bg-primary"
              type="text"
              name="price"
              value={inputFields.price}
              placeholder="Price"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-green-500 tracking-wider text-white font-semibold w-full py-2 rounded-lg md:w-auto md:self-end md:py-3 md:px-16 hover:bg-green-400 duration-300"
        >
          Save
        </button>
      </form>
    </div>
  )
}

export default CreateItem
