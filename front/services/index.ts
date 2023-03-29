import { contentTypes } from "./../../back/src/models/index";
import { ProfessionCategory, SportCategory, User } from "@/types";

export type RegistrationType = {
  email: string;
  password: string;
  confirmPassword: string;
  firstname: string;
  dateOfBirth: number;
  lastname: string;
  profession: ProfessionCategory;
  children: number;
  sport: SportCategory;
};

export const registerUser = async (body: RegistrationType): Promise<Response | Error> => {
  try {
    const result = await fetch('http://localhost:4000/api/user/registration', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(body)
    })
    return result
  } catch (e) {
    return e as Error
  }
};

export const loginUser = async (body: { email: string; password: string }) => {
  const result = await fetch(
    `http://${process.env.DEV_SERVER_HOST}:${process.env.DEV_SERVER_PORT}/api/user/registration`
  );
};
