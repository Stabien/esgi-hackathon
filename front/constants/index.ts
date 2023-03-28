import { ProfessionCategory, SportCategory } from "@/types";
import { Toast } from "react-hot-toast";

export const SportList: SportCategory[] = [
  "Inactif",
  "Faible activité",
  "Actif",
  "Très actif",
];
export const ProfessionList: ProfessionCategory[] = [
  "Médical et paramédical",
  "Services financiers",
  "Éducation",
  "Ingénierie",
  "Technologie de l'information",
  "Marketing et publicité",
  "Médias et communication",
  "Droit",
  "Services publics",
  "Commerce de détail et de services",
  "Sans emploi",
];

export const toastOptions: Partial<
  Pick<
    Toast,
    | "style"
    | "className"
    | "id"
    | "icon"
    | "duration"
    | "ariaProps"
    | "position"
    | "iconTheme"
  >
> = {
  duration: 4000,
  position: "bottom-right",
};
