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
  if (user.token) {
    localStorage.setItem("token", user.token);
  }
  return {
    type: "user/updateUser",
    payload: user,
  };
};
