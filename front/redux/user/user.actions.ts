import { userSlice } from "@/redux/user/user.slice";
import { User } from "@/types";

const { actions } = userSlice;

export const resetUser = () => {
  return {
    type: "user/resetUser",
    payload: null,
  };
};

export const updateUser = (user: User) => {
  return {
    type: "user/updateUser",
    payload: user,
  };
};
