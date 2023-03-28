export type ProfessionCategory =
  | "Médical et paramédical"
  | "Services financiers"
  | "Éducation"
  | "Ingénierie"
  | "Technologie de l'information"
  | "Marketing et publicité"
  | "Médias et communication"
  | "Droit"
  | "Services publics"
  | "Commerce de détail et de services"
  | "Sans emploi";

export type SportCategory =
  | "Inactif"
  | "Faible activité"
  | "Actif"
  | "Très actif";

export type Role = "Logged" | "Admin" | null;

export type User = {
  email: string;
  firstname: string;
  lastname: string;
  age: number;
  profession: ProfessionCategory;
  sport: SportCategory;
  children: number;
  role: Role;
};

export type Content = {
  type: "text" | "video" | "image";
  url?: string;
  text?: string;
  tags?: string[];
};
