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
