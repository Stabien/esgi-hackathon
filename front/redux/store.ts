import { userSlice } from "@/redux/user/user.slice"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: userSlice.reducer,
  devTools: process.env.NODE_ENV !== "production"
})
