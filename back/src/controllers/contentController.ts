import { Request, Response } from 'express'
import crypto from 'crypto'
import { Content, ContentModel, Impression, Tag } from '../models'

export const getContentByUuid = async (req: Request, res: Response): Promise<Response> => {
  const { uuid } = req.params

  try {
    const content = await Content.findOne({
      where: { uuid },
      include: [{ model: Impression }, { model: Tag }],
    })

    return res.status(200).json(content)
  } catch (e) {
    return res.status(500).json({ error: e })
  }
}

export const getAllContents = async (req: Request, res: Response): Promise<Response> => {
  try {
    const contents = await Content.findAll()
    const contentUuids = contents.map((content) => content.uuid)
    const tags = await Tag.findAll({
      where: {
        contentUuid: contentUuids,
      },
      attributes: ['content_uuid', 'tag_name'],
    })

    const contentWithTags = contents.map((content) => {
      content.tags = []

      for (const tag of tags) {
        if (tag.contentUuid === content.uuid) {
          content.tags.push(tag.tagName)
        }
      }
      return content
    })

    return res.status(200).json(contentWithTags)
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

    const newContent = await Content.create({ uuid, title, type, text, thumbnail, url })
    await newContent.save()

    await Promise.all(
      tags.map(async (tag: string) => {
        const newTag = await Tag.create({ uuid, tagName: tag })
        await newTag.save()
      }),
    )

    return res.status(201).json(newContent)
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

    await Tag.destroy({
      where: {
        contentUuid: uuid,
      },
    })

    await Promise.all(
      req.body.tags.map(async (tag: string) => {
        const newTag = await Tag.create({ uuid, name: tag })
        await newTag.save()
      }),
    )

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
    return res.status(204)
  } catch (e) {
    return res.status(500).json({ error: e })
  }
}

export const getContentByTags = async (req: Request, res: Response): Promise<Response> => {
  const { tags } = req.body
  const contents: ContentModel[] = []

  try {
    console.log('test')
    await Promise.all(
      tags.map(async (tag: string) => {
        console.log(tag)
        const tagMatching = await Tag.findAll({
          where: { tagName: tag },
          attributes: ['content_uuid'],
        })

        const contentUuids = tagMatching.map((tag) => tag.contentUuid)
        const content = await Content.findOne({ where: { uuid: contentUuids } })

        contents.push(content as ContentModel)
      }),
    )
    return res.status(200).json(contents)
  } catch (e) {
    return res.status(500).json({ error: e })
  }
}
