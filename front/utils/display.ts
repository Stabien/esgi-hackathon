import { toastOptions } from "@/constants";
import toast from "react-hot-toast";

export const arrayToSelect = (
  array: string[]
): { label: string; value: string }[] =>
  array.map((a) => ({ label: a, value: a }));
