import { defaultContent, defaultTags } from '@/constants'
import { db } from '@/constants/db'
import Select from 'react-select'
import { ArticleContent, Content, ContentType, TagsType, VideoContent } from '@/types/content'
import { addDoc, collection } from 'firebase/firestore'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { toast } from 'react-hot-toast'
import ArticleIcon from '@/components/Icons/ArticleIcon'
import MicIcon from '@/components/Icons/MicIcon'
import VideoIcon from '@/components/Icons/VideoIcon'
import PlusIcon from '@/components/Icons/PlusIcon'
import { getRandomBackground } from '@/utils/display'

type Props = {
  form: Content
  setForm: Dispatch<SetStateAction<Content>>
}

const ContentForm = ({ form, setForm }: Props) => {
  const contentTypeList: { icon: any; content: ContentType }[] = [
    { icon: <ArticleIcon size="40" />, content: 'article' },
    { icon: <MicIcon size="40" />, content: 'podcast' },
    { icon: <VideoIcon size="40" />, content: 'video' },
  ]

  const handleTypeContent = (content: ContentType) => {
    if (content === 'article') {
      if (form.type === 'article') return
      const newContent: ArticleContent = {
        type: content,
        createdAt: form.createdAt,
        tags: form.tags,
        thumbnail: form.thumbnail,
        banner: form.banner,
        text: '',
        title: form.title,
        uuid: form.uuid,
      }
      setForm(newContent)
    } else {
      const newContent: VideoContent = {
        type: content,
        createdAt: form.createdAt,
        tags: form.tags,
        thumbnail: form.thumbnail,
        banner: form.banner,
        title: form.title,
        uuid: form.uuid,
        description: '',
        url: '',
      }
      setForm(newContent)
    }
  }

  const handleDeleteTags = (tag: TagsType) => {
    const newTags = [...form.tags.filter((t) => t !== tag)]
    setForm((prevState) => ({ ...prevState, tags: newTags }))
  }

  return (
    <div className="font-prompt w-full">
      <section className="flex gap-8  items-center justify-center">
        {contentTypeList.map((content) => (
          <div
            onClick={() => handleTypeContent(content.content)}
            key={content.content}
            className={`${
              form.type === content.content ? 'bg-pink-50' : 'bg-white'
            } gap-4 p-4 px-4 text-neutral-500 text-xl capitalize font-bold flex cursor-pointer  pr-20 rounded items-center justify-center shadow`}
          >
            {content.icon}
            {content.content}
          </div>
        ))}
      </section>
      <div
        style={{
          gridTemplateAreas: `'infos content' 'tags content'`,
        }}
        className="grid grid-cols-2 gap-8 mt-20"
      >
        <section style={{ gridArea: 'infos' }} className="flex flex-col gap-4">
          <p className="text-xl font-semibold text-neutral-500 mb-4">Contenu</p>
          <input
            type="text"
            name="title"
            value={form.title}
            placeholder="Titre du contenu"
            onChange={(e) => setForm((prevState) => ({ ...prevState, title: e.target.value }))}
            className="w-full rounded-lg px-4 py-2 bg-white text-neutral-500"
          />
          <input
            type="text"
            name="thumbnail"
            value={form.thumbnail}
            placeholder="URL de la Thumbnail"
            onChange={(e) =>
              setForm((prevState) => ({
                ...prevState,
                thumbnail: e.target.value,
              }))
            }
            className="w-full rounded-lg px-4 py-2 bg-white text-neutral-500 "
          />
          <input
            type="text"
            name="urlBanner"
            value={form.banner}
            placeholder="URL de la bannière"
            onChange={(e) => setForm((prevState) => ({ ...prevState, banner: e.target.value }))}
            className="w-full rounded-lg px-4 py-2 bg-white text-neutral-500"
          />
        </section>
        <section style={{ gridArea: 'tags' }} className="flex flex-col gap-4">
          <p className="text-xl font-semibold text-neutral-500 mb-4">Ajouter des Tags</p>
          <Select
            menuPlacement="top"
            options={defaultTags.map((t) => ({ label: t, value: t }))}
            onChange={(e) => {
              if (!e) return
              const newTags: TagsType[] = [...form.tags]
              if (newTags.includes(e.value)) return

              newTags.push(e.value)
              setForm((prevState) => ({ ...prevState, tags: newTags }))
            }}
          />
          {form.tags?.length > 0 && (
            <div className="w-full rounded-lg px-4 py-2 gap-4 bg-white text-neutral-500 flex flex-wrap">
              {form.tags.map((tag, i) => (
                <div
                  key={tag}
                  className={`${getRandomBackground(
                    i,
                  )}  rounded flex items-center gap-4 px-2 py-1 text-white`}
                >
                  {tag}
                  <span className="cursor-pointer" onClick={() => handleDeleteTags(tag)}>
                    <PlusIcon rotation={45} />
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>
        <section style={{ gridArea: 'content' }} className="flex flex-col gap-4">
          {form.type === 'article' && (
            <>
              <textarea
                name="articleText"
                placeholder="Rédigez votre article ici"
                onChange={(e) =>
                  setForm((prevState) => ({
                    ...prevState,
                    text: e.target.value,
                  }))
                }
                className="w-full h-full rounded-lg px-4 py-2 bg-white text-neutral-500"
              />
            </>
          )}
          {form.type !== 'article' && (
            <>
              <input
                type="text"
                name="contentUrl"
                placeholder="URL de votre contenu"
                onChange={(e) =>
                  setForm((prevState) => ({
                    ...prevState,
                    url: e.target.value,
                  }))
                }
                className="w-full rounded-lg px-4 py-2 bg-white text-neutral-500"
              />
              <textarea
                name="contentDescription"
                placeholder="Description de votre contenu"
                onChange={(e) =>
                  setForm((prevState) => ({
                    ...prevState,
                    description: e.target.value,
                  }))
                }
                className="w-full h-40 rounded-lg px-4 py-2 bg-white text-neutral-500"
              />
            </>
          )}
        </section>
      </div>
    </div>
  )
}

export default ContentForm
