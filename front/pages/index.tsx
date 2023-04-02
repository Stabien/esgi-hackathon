import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { LayoutAdmin } from '@/components/LayoutAdmin'
import ArrowIcon from '@/components/Icons/ArrowIcon'
import ChevronIcon from '@/components/Icons/ChevronIcon'
import LayoutUser from '@/components/LayoutUser'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectUser } from '@/redux/user/user.selectors'
import { useEffect, useState } from 'react'
import CardIcon from '@/components/Icons/CardIcon'
import { Content, TagsType } from '@/types/content'
import { getContentByTags } from '@/services/content.backend'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  const user = useSelector(selectUser)

  const [contentList, setContentList] = useState<Content[]>([])
  const getContents = async () => {
    const tags = user.tags as TagsType[]

    
    console.log(tags)
    try {
      const contents = await getContentByTags(tags)
      setContentList(contents as Content[])
      console.log(contents)
    } catch (e) {
      throw new Error(e as string)
    }
  }

  useEffect(() => {
    if (user.role === null) {
      router.push('/login')
    }
    getContents()
  }, [])

  return (
    <LayoutUser>
      <main className="flex flex-col px-16 py-8 gap-8">
        <section className="flex flex-col gap-8">
          <p className="text-neutral-500 text-xl font-bold">Bonjour {user.firstname}</p>
          <div className="flex justify-center">
            <CardIcon />
          </div>
        </section>
        <section className="flex flex-col gap-8">
          <p className="text-neutral-500 text-xl font-bold">Dépenses de santé</p>
          <div className="flex gap-4 justify-center">
            <article className="shadow flex flex-col max-w-56 gap-4 items-center rounded-lg p-4">
              <div className="w-20 h-20 bg-yellow-100 rounded-full"></div>
              <div className="text-neutral-500 text-xl font-bold">Demander un remboursement</div>
              <p className="text-neutral-300">Simuler le reste à charge pour mes futurs soins.</p>
            </article>

            <article className="shadow flex flex-col max-w-56 gap-4 items-center rounded-lg p-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full"></div>
              <div className="text-neutral-500 text-xl font-bold">Estimer un remboursement </div>
              <p className="text-neutral-300">Simuler le reste à charge pour mes futurs soins.</p>
            </article>
          </div>
        </section>
        <section className="flex flex-col gap-8">
          <p className="text-neutral-500 text-xl font-bold">Médias</p>
          <div className="flex justify-center  items-center">
            <div className="grid grid-cols-2  w-full grid-rows-2 gap-4">
              {contentList.map((content) => (
                <div key={content.uuid} className="w-full  flex flex-col text-neutral-500 gap-2">
                  <img
                    src={content.thumbnail}
                    alt=""
                    className="object-cover object-center h-56 rounded-lg shadow-lg w-full"
                  />
                  <span className="text-ls font-thin">{content.type} </span>
                  <span className="font-bold">{content.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </LayoutUser>
  )
}
