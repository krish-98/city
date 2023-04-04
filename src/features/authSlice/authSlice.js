import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { auth } from "../../firebase.config"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"

import { toast } from "react-toastify"

const initialState = {
  user: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : {},
  loading: false,
  error: null,
}

export const signIn = createAsyncThunk("auth/signIn", async () => {
  const googleProvider = new GoogleAuthProvider()

  const userCredential = await signInWithPopup(auth, googleProvider)
  const user = userCredential?.user?.providerData[0]

  localStorage.setItem("userInfo", JSON.stringify(user))

  return user
})

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut: (state) => {
      state.user = {}

      localStorage.clear()

      toast.error("User logged out successfully!", {
        position: "top-left",
        theme: "dark",
      })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.loading = true
    })

    builder.addCase(signIn.fulfilled, (state, action) => {
      state.loading = false
      state.user = action.payload

      toast.success(
        `Welcome, ${state.user.displayName}, You logged in successfully!`,
        {
          position: "top-left",
          theme: "dark",
        }
      )
    })

    builder.addCase(signIn.rejected, (state) => {
      state.loading = false
      state.error = "Error fetching products"
    })
  },
})

export const { signOut } = authSlice.actions

export default authSlice.reducer
