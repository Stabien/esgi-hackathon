import { Request, Response } from 'express'
import crypto from 'crypto'
import { Content, Impression } from '../models'

export const getContentByUuid = async (req: Request, res: Response): Promise<Response> => {
  const { uuid } = req.params

  try {
    const content = await Content.findOne({ where: { uuid }, include: [{ model: Impression }] })

    return res.status(200).json({ content })
  } catch (e) {
    return res.status(500).json({ error: e })
  }
}

export const addContent = async (req: Request, res: Response): Promise<Response> => {
  const { title, type, tags, thumbnail } = req.body

  const url = req.body.hasOwnProperty('url') ? req.body.url : null
  const text = req.body.hasOwnProperty('text') ? req.body.text : null

  try {
    const uuid = crypto.randomUUID()

    const newContent = await Content.create({ uuid, title, tags, type, text, thumbnail, url })
    await newContent.save()

    return res.status(201).json({ message: 'Content created' })
  } catch (e) {
    return res.status(500).json({ error: e })
  }
}

export const updateContent = async (req: Request, res: Response): Promise<Response> => {
  const { uuid } = req.params

  try {
    const content = await Content.create({ uuid })

    content.update({
      ...req.body,
    })
    await content.save()

    return res.status(200).json({ content })
  } catch (e) {
    return res.status(500).json({ error: e })
  }
}

export const deleteContent = async (req: Request, res: Response): Promise<Response> => {
  const { uuid } = req.params

  try {
    await Content.destroy({
      where: {
        uuid,
      },
    })
    return res.status(200).json({ message: 'Content deleted' })
  } catch (e) {
    return res.status(500).json({ error: e })
  }
}
