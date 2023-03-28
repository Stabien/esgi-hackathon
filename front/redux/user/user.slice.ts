import { userReducers } from "@/redux/user/user.reducers";
import { User } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export const defaultUser: User = {
  email: "",
  age: 0,
  profession: "Sans emploi",
  sport: "Inactif",
  children: 0,
  role: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: { user: defaultUser },
  reducers: userReducers,
});
