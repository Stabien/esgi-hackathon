import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
import crypto from 'crypto'
import bcrypt from 'bcrypt'
import { User } from '../models'

config()

const checkIfUserAlreadyExists = async (email: string): Promise<boolean> => {
  const user = await User.findOne({ where: { email } })

  return user !== null
}

export const getUserByUuid = async (req: Request, res: Response): Promise<Response> => {
  try {
    const user = await User.findOne({ where: { uuid: req.params.uuid } })
    return res.status(200).json(user)
  } catch (e) {
    return res.status(500).json({ error: e })
  }
}

export const authentication = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ where: { email } })

    if (user !== null) {
      if (!bcrypt.compareSync(password, user.password)) {
        return res.status(404).json({ error: 'User not found' })
      }

      const { uuid } = user
      const token = jwt.sign({ uuid }, process.env.JWT_KEY as jwt.Secret)

      return res.status(200).json({
        user: {
          uuid,
          email: user.email,
          token,
        },
      })
    } else {
      return res.status(404).json({ error: 'User not found' })
    }
  } catch (e) {
    return res.status(500).json({ error: e })
  }
}

export const registration = async (req: Request, res: Response): Promise<Response> => {
  const {
    email,
    password,
    confirmPassword,
    firstname,
    lastname,
    dateOfBirth,
    profession,
    children,
    sport,
  } = req.body

  if (password !== confirmPassword) {
    return res.status(422).json({ error: "Passwords don't match" })
  }

  try {
    const uuid = crypto.randomUUID()
    const hashedPassword = bcrypt.hashSync(password, 10)
    const doesUserAlreadyExists = await checkIfUserAlreadyExists(email)

    if (doesUserAlreadyExists) {
      return res.status(422).json({ error: 'User already exists' })
    }

    const newUser = await User.create({
      uuid,
      email,
      password: hashedPassword,
      firstname,
      lastname,
      role: 'user',
      dateOfBirth,
      profession,
      children,
      sport,
    })
    await newUser.save()

    return res.status(201).json(newUser)
  } catch (e) {
    return res.status(500).json({ error: e })
  }
}

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
  const { uuid } = req.params

  try {
    const user = await User.create({ uuid })

    user.update({
      ...req.body,
    })

    return res.status(200).json(user)
  } catch (e) {
    return res.status(500).json({ error: e })
  }
}
