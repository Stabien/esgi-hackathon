import { contentTypes } from "./../../back/src/models/index";
import { ProfessionCategory, Role, SportCategory, User } from "@/types";
import { RegistrationType } from "@/types/security.types";

export const register = async (
  body: RegistrationType
): Promise<Response | Error> => {
  try {
    const result = await fetch("http://localhost:4000/api/user/registration", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(body),
    });
    return result;
  } catch (e) {
    return e as Error;
  }
};

export const login = async (body: {
  email: string;
  password: string;
}): Promise<User | void> => {
  const result = await fetch(`http://localhost:4000/api/user/authentication`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(body),
  });
  if (result.status !== 200) {
    throw new Error("Auth failed");
  } else {
    const data = await result.json();
    return data.user as User;
  }
};

export const checkUser = (cb: Function) => {
  const token = localStorage.getItem("token");
  if (token) {
    const { uuid } = JSON.parse(atob(token.split(".")[1]));
    fetch(`http://localhost:4000/api/user/${uuid}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Auth failed");
        } else {
          return response.json();
        }
      })
      .then((data) => cb(data));
  }
};
