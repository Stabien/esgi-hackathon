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
  | "Commerce de détail et de services";

export type SportCategory =
  | "Inactif"
  | "Faible activité"
  | "Actif"
  | "Très actif";
export type User = {
  email: string;
  age: number;
  profession: ProfessionCategory;
  sport: SportCategory;
  enfant: number;
};
