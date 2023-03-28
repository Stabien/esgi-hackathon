import jwt, { JwtPayload } from 'jsonwebtoken'
import { config } from 'dotenv'
import { NextFunction, Request, Response } from 'express'
import { DecodedToken } from '../types'
import { regexUuid, userRules } from '../models'

config()

/**
 * Check token format.
 * If format is correct, returns token data.
 * Otherwise returns undefined.
 */
const verifyUserToken = (req: Request): DecodedToken => {
  const token = req.get('Authorization')
  const SECRET_KEY = process.env.JWT_KEY
  let response

  if (token !== undefined) {
    jwt.verify(
      token.split(' ')[1],
      SECRET_KEY as string,
      { algorithms: ['HS256'] },
      (error, decoded) => {
        if (error === null) {
          response = decoded
        }
      },
    )
  }
  return response
}

export const checkUserModel = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const { email: emailRule, password: passwordRule } = userRules
  const { email, password } = req.body

  if (!emailRule.test(email) || !passwordRule.test(password)) {
    return res.status(422).json({ error: 'Invalid field value' })
  }
  return next()
}

/**
 * Verify if request param is uuid type.
 */
export const isParamUuid = (req: Request, res: Response, next: NextFunction): Response | void => {
  if (!regexUuid.test(req.params.uuid)) {
    return res.status(422).json({ error: 'Invalid parameter' })
  }
  return next()
}

/**
 * Verify only token format.
 */
export const checkUserTokenFormat = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const token = verifyUserToken(req)

  if (token !== null) {
    res.locals.userUuid = (token as JwtPayload).uuid
    return next()
  } else {
    return res.status(401).json({ error: 'Invalid token' })
  }
}

/**
 * Verify token format and user uuid.
 */
export const checkUserTokenUuid = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const token = verifyUserToken(req)
  const paramName = Object.keys(req.params)[0]

  if (token === undefined) {
    return res.status(401).json({ error: 'Invalid token' })
  }

  if (!token.hasOwnProperty('uuid')) {
    return res.status(401).json({ error: 'Invalid token' })
  }

  if ((token as JwtPayload).uuid === req.params[paramName]) {
    return next()
  } else {
    return res.status(401).json({ error: 'Not authorized' })
  }
}
