import { Request, Response } from 'express'
import { config } from 'dotenv'
import crypto from 'crypto'
import { Content } from '../models'

const checkIfContentAlreadyExists = async (title: string): Promise<boolean> => {
  const content = await Content.findOne({ where: { title } })

  return content !== null
}
export const contentPost = async (req: Request, res: Response): Promise<Response> => {
  const { title, type, tags, thumbnail } = req.body

  const url = req.body.hasOwnProperty('url') ? req.body.url : null
  const text = req.body.hasOwnProperty('text') ? req.body.text : null

  try {
    const uuid = crypto.randomUUID()
    const doesContentAlreadyExists = await checkIfContentAlreadyExists(title)

    if (doesContentAlreadyExists) {
      return res.status(422).json({ error: 'Content already created' })
    }

    const newContent = await Content.create({ uuid, title, tags, type, text, thumbnail })
    await newContent.save()

    return res.status(201).json({ message: 'Content created' })
  } catch (e) {
    return res.status(500).json({ error: e })
  }
}
