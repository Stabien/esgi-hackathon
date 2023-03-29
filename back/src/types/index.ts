import { JwtPayload } from 'jsonwebtoken'

export interface Rules {
  [x: string]: RegExp
}

export type DecodedToken = string | undefined | JwtPayload

export interface mailOptions {
  from: string
  to: string
  subject: string
  text: string
}

export interface DbConfig {
  host: string
  port: string | number
  database: string
  user: string
  password: string
}

export type ContentType = 'article' | 'video' | 'podcast'

export type ProfessionCategory =
  | 'Médical et paramédical'
  | 'Services financiers'
  | 'Éducation'
  | 'Ingénierie'
  | "Technologie de l'information"
  | 'Marketing et publicité'
  | 'Médias et communication'
  | 'Droit'
  | 'Services publics'
  | 'Commerce de détail et de services'
  | 'Sans emploi'

export type SportCategory = 'Inactif' | 'Faible activité' | 'Actif' | 'Très actif'
