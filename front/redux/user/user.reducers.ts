import { defaultUser } from "@/redux/user/user.slice";
import { User } from "@/types";
import { PayloadAction } from "@reduxjs/toolkit";

export const userReducers = {
  resetUser: () => ({
    user: defaultUser,
  }),
  updateUser: (state: any, { payload }: PayloadAction<User>) => {
    return { ...state, user: payload };
  },
};
