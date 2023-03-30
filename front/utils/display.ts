import { toastOptions } from "@/constants";
import toast from "react-hot-toast";

export const arrayToSelect = (
  array: string[]
): { label: string; value: string }[] =>
  array.map((a) => ({ label: a, value: a }));

export const getRandomBackground = (i: number) => {
  const bgClassesArray = [
    // "bg-neutral-200",
    "bg-blue-200",
    "bg-pink-200",
    "bg-yellow-200",
    "bg-red-200",
    "bg-green-250",
    "bg-purple-200",
  ];
  return bgClassesArray[i % bgClassesArray.length];
  // return bgClassesArray[Math.floor(Math.random() * bgClassesArray.length)];
};

export const formatTimestamp = (timestamp: number) => {
  const date = new Date(timestamp); // Convertir le timestamp en millisecondes

  // Formater la date selon le format dd/mm/yyyy
  const options: any = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Europe/Paris",
  }; // Remplacez "Europe/Paris" par votre local Timezone
  const formattedDate = date.toLocaleDateString("fr-FR", options);

  return formattedDate;
};
