import { ProfessionCategory, SportCategory, Role } from "@/types";

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
  role?: Role;
};
