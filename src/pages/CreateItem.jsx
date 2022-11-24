import React, { useState } from "react"
import { categories } from "../utils/categories"

// Icons
import { IoFastFood } from "react-icons/io5"
import { GoCloudUpload } from "react-icons/go"
import { GiForkKnifeSpoon } from "react-icons/gi"
import { CgDollar } from "react-icons/cg"
import { BsTrash } from "react-icons/bs"
import Spinner from "../components/Spinner"

// firebase imports
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage"
import { storage } from "../firebase.config"
import { getAllFoodItems, storeItem } from "../utils/firebaseFunctions"

import { useDispatch } from "react-redux"
import { getFoodItems } from "../features/foodSlice/foodSlice"

const CreateItem = () => {
  const [inputFields, setInputFields] = useState({
    title: "",
    calories: "",
    price: "",
    category: "other",
  })
  const [fields, setFields] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [imageAsset, setImageAsset] = useState(null)
  const [alertStatus, setAlertStatus] = useState("danger")
  const [msg, setMsg] = useState(null)
  const [progress, setProgress] = useState(null)
  const dispatch = useDispatch()

  const onChangeHandler = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value })
  }

  const uploadImage = (e) => {
    setIsLoading(true)
    const imageFile = e.target.files[0]
    console.log(imageFile)
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`) // Creating a path to the Firebase Storage
    const uploadTask = uploadBytesResumable(storageRef, imageFile)

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(`File is uploading ${uploadProgress.toFixed(0)} % done`)
      },
      (error) => {
        console.log(error)
        setFields(true)
        setMsg("Error while uploading : Try again")
        setAlertStatus("danger")

        setTimeout(() => {
          setFields(false)
          setIsLoading(false)
        }, 4000)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(`File available at ${downloadURL}`)
          setProgress(null)
          setImageAsset(downloadURL)
          setIsLoading(false)
          setFields(true)
          setMsg("Image uploaded successfully!😊")
          setAlertStatus("success")

          setTimeout(() => {
            setFields(false)
          }, 4000)
        })
      }
    )
  }

  const deleteImage = () => {
    setIsLoading(true)
    const deleteRef = ref(storage, imageAsset)

    deleteObject(deleteRef).then(() => {
      setImageAsset(null)
      setIsLoading(false)
      setFields(true)
      setMsg("Image deleted successfully!")
      setAlertStatus("success")
      setTimeout(() => {
        setFields(false)
      }, 4000)
    })
  }

  const submitForm = (e) => {
    e.preventDefault()
    const { title, calories, price, category } = inputFields

    !imageAsset && setIsLoading(true)

    try {
      if (
        title.trim().length > 0 &&
        calories.trim().length > 0 &&
        price.trim().length > 0 &&
        category !== "other" &&
        imageAsset
      ) {
        const data = {
          id: `${Date.now()}`,
          title: title,
          category: category,
          imageURL: imageAsset,
          calories: calories,
          qty: 1,
          price: price,
        }
        storeItem(data)
        setIsLoading(false)
        setFields(true)
        setAlertStatus("success")
        setMsg("Data uploaded successfully")
        clearFields()

        setTimeout(() => {
          setIsLoading(false)
          setFields(false)
        }, 4000)
      } else {
        setFields(true)
        setAlertStatus("danger")
        setMsg("All fields are required!")

        setTimeout(() => {
          setFields(false)
          setIsLoading(false)
        }, 4000)
      }
    } catch (error) {
      console.log(error)
      setFields(true)
      setMsg("Error while uploading : Try again")
      setAlertStatus("danger")
      setTimeout(() => {
        setFields(false)
        setIsLoading(false)
      }, 4000)
    }
    fetchFoodData()
  }

  const clearFields = () => {
    setInputFields({
      title: "",
      calories: "",
      price: "",
      category: "other",
    })
    setImageAsset(null)
  }

  const fetchFoodData = async () => {
    getAllFoodItems().then((data) => dispatch(getFoodItems(data)))
  }

  return (
    <div className="flex items-center justify-center bg-primary h-screen">
      <form
        onSubmit={submitForm}
        className="flex flex-col items-center justify-center gap-6 w-[90%] md:max-w-[768px] px-4 py-6 border border-gray-300 rounded-xl"
      >
        {fields && (
          <p
            className={`text-xl text-green-500 font-bold ${
              alertStatus === "danger" && "text-red-500"
            }`}
          >
            {msg}
          </p>
        )}

        {progress && (
          <h1 className="font-semibold text-green-300">{progress}</h1>
        )}
        <div className="flex items-center gap-2 border-b border-b-gray-300 py-2 w-full">
          <IoFastFood className="w-5 h-5" />
          <input
            onChange={onChangeHandler}
            className="outline-none w-full bg-primary placeholder:text-lg placeholder:bg-primary border-none"
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

        {isLoading ? (
          <div className="py-20 px-6 md:py-40">
            <Spinner />
          </div>
        ) : (
          <>
            {!imageAsset ? (
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
                      src={imageAsset}
                      alt="uploaded img"
                    />
                    <button
                      onClick={deleteImage}
                      className="absolute right-3 xl:right-8 xl:bottom-1 p-3 bg-red-500 rounded-full"
                    >
                      <BsTrash className="w-5 h-5 text-white " />
                    </button>
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
              className="outline-none w-full bg-primary placeholder:text-lg placeholder:bg-primary border-none focus:outline-none"
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
              className="outline-none w-full bg-primary placeholder:text-lg placeholder:bg-primary border-none focus:outline-none"
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
