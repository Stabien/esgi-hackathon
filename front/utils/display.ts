import { toastOptions } from "@/constants";
import toast from "react-hot-toast";

export const arrayToSelect = (
  array: string[]
): { label: string; value: string }[] =>
  array.map((a) => ({ label: a, value: a }));

export const getRandomBackground = () => {
  const bgClassesArray = [
    "bg-neutral-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-red-200",
    "bg-pink-200",
    "bg-purple-200",
  ];
  return bgClassesArray[Math.floor(Math.random() * bgClassesArray.length)];
};
