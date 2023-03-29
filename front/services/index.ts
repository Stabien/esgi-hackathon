import { contentTypes } from "./../../back/src/models/index";
import { ProfessionCategory, SportCategory } from "@/types";

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

export const registerUser = async (body: RegistrationType) => {
  console.log(body);

  const result = await fetch(`http://localhost:4000/api/user/registration`, {
    headers: { contentType: "application/json" },
    method: "POST",
    body: body as any,
  });
  console.log(result);
};

export const loginUser = async (body: { email: string; password: string }) => {
  const result = await fetch(
    `http://${process.env.DEV_SERVER_HOST}:${process.env.DEV_SERVER_PORT}/api/user/registration`
  );
};
