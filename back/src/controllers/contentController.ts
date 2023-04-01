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
      content.dataValues.tags = []
      for (const tag of tags) {
        if (tag.dataValues.content_uuid === content.uuid) {
          content.dataValues.tags.push(tag.dataValues.tag_name)
        }
      }
      console.log(content)
      return content
    })

    return res.status(200).json(contentWithTags)
  } catch (e) {
    return res.status(500).json({ error: e })
  }
}

export const addContent = async (req: Request, res: Response): Promise<Response> => {
  const { title, type, tags, thumbnail, creationDate } = req.body

  const url = req.body.hasOwnProperty('url') ? req.body.url : null
  const text = req.body.hasOwnProperty('text') ? req.body.text : null

  try {
    const uuid = crypto.randomUUID()

    const newContent = await Content.create({
      uuid,
      title,
      type,
      text,
      thumbnail,
      url,
      creationDate,
    })
    await newContent.save()

    await Promise.all(
      tags.map(async (tag: string) => {
        const newTag = await Tag.create({ contentUuid: uuid, tagName: tag })
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
    await Promise.all(
      tags.map(async (tag: string) => {
        const tagMatching = await Tag.findAll({
          where: { tagName: tag },
          attributes: ['content_uuid'],
        })

        const contentUuids = tagMatching.map((tag: any) => {
          tag.dataValues.content_uuid
          return tag.dataValues.content_uuid
        })
        const content = await Content.findOne({ where: { uuid: contentUuids } })

        if (content !== null) {
          contents.push(content as ContentModel)
        }
      }),
    )
    return res.status(200).json(contents)
  } catch (e) {
    return res.status(500).json({ error: e })
  }
}
