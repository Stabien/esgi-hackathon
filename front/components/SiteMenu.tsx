import { selectUser } from '@/redux/user/user.selectors'
import { User } from '@/types'
import Link from 'next/link'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ChevronIcon from './Icons/ChevronIcon'
import HomeIcon from './Icons/HomeIcon'
import LogInIcon from './Icons/LogInIcon'
import LogOutIcon from './Icons/LogOutIcon'
import PlusIcon from './Icons/PlusIcon'
import SignInIcon from './Icons/SignInIcon'
import StatIcon from './Icons/StatIcon'

type Props = {}

function SiteMenu({}: Props) {
  const user: User = useSelector(selectUser)
  const [isContentMenuOpened, setIsContentMenuOpened] = useState<boolean>(false)
  const [isStatMenuOpened, setIsStatMenuOpened] = useState<boolean>(false)

  return (
    <article
      style={{ gridArea: 'menu' }}
      className="flex  flex-col box-border sticky left-0 top-0 overflow-y-hidden h-screen px-8 pt-4"
    >
      <Link href="/">
        <img src="/jaji.svg" alt="" />
      </Link>
      {user.role === 'Admin' && (
        <>
          <div className="text-neutral-500 mt-8">
            <div className="flex flew-row gap-5">
              <div className="my-auto h-fit">
                <HomeIcon size="20" />
              </div>
              <div className="font-semibold text-xl">
                <Link href="/admin">Accueil</Link>{' '}
              </div>
            </div>
          </div>

          {/* <div className="text-neutral-500 mt-8">
              <div className="flex flew-row gap-5">
                <div className="my-auto h-fit"><PlusIcon size="20"/></div>
                <div className="font-semibold text-xl"><Link href="/admin">Admin</Link> </div> 
              </div>
            </div> */}

          <div className="text-neutral-500 my-5">
            <div className="flex flew-row gap-5 cursor-pointer">
              <div className="my-auto h-fit">
                <PlusIcon size="20" />{' '}
              </div>
              <div
                className="font-semibold text-xl"
                onClick={() => setIsContentMenuOpened(!isContentMenuOpened)}
              >
                Contenu
              </div>
              {isContentMenuOpened ? (
                <div className="my-auto h-fit">
                  <ChevronIcon size="10" />
                </div>
              ) : (
                <div className="my-auto h-fit">
                  <ChevronIcon size="10" rotation={180} />
                </div>
              )}
            </div>
            {isContentMenuOpened && (
              <div className="flex flex-col ml-10 justify-start">
                <div className="text-sm">
                  <Link href="/new-content">Nouveau contenu</Link>
                </div>
                <div className="text-sm">
                  <Link href="/contents">Tous les contenus</Link>
                </div>
              </div>
            )}
          </div>

          <div className="text-neutral-500 mb-5">
            <div className="flex flew-row gap-5 cursor-pointer">
              <div className="my-auto h-fit">
                <StatIcon size="20" />
              </div>
              <div
                className="font-semibold text-xl"
                onClick={() => setIsStatMenuOpened(!isStatMenuOpened)}
              >
                Statistiques
              </div>
              {isStatMenuOpened ? (
                <div className="my-auto h-fit">
                  <ChevronIcon size="10" />
                </div>
              ) : (
                <div className="my-auto h-fit">
                  <ChevronIcon size="10" rotation={180} />
                </div>
              )}
            </div>
            {isStatMenuOpened && (
              <div className="flex flex-col ml-10 justify-start">
                <div className="text-sm">
                  <Link href="/">Clients</Link>
                </div>
                <div className="text-sm">
                  <Link href="/">Campagnes</Link>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {user.role === null ? (
        <>
          <div className="font-semibold text-xl text-neutral-500 flex flex-row gap-5 my-5">
            <div className="my-auto h-fit">
              <LogInIcon />
            </div>
            <Link href="/login">Login</Link>
          </div>
          <div className="font-semibold text-xl text-neutral-500 flex flex-row gap-5">
            <div className="my-auto h-fit">
              <SignInIcon />
            </div>
            <Link href="/signin">Signin</Link>
          </div>
        </>
      ) : (
        <div className="font-semibold text-xl text-neutral-500 flex flex-row gap-5">
          <div className="my-auto h-fit">
            <LogOutIcon />
          </div>
          <Link href="/logout">Se déconnecter</Link>
        </div>
      )}
    </article>
  )
}

export default SiteMenu
