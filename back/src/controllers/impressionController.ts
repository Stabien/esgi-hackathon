import { Request, Response } from 'express'
import { config } from 'dotenv'
import { Impression, Content } from '../models'

export const ImpressionPost = async (req: Request, res: Response): Promise<Response> => {
  const { uuid } = req.params

  try {
    const newImpression = await Impression.create({
      contentUuid: uuid,
    })

    await newImpression.save()
    return res.status(201).json({ message: 'Impression created' })
  } catch (e) {
    return res.status(500).json({ error: e })
  }
}
