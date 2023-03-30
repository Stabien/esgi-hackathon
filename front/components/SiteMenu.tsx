import { selectUser } from "@/redux/user/user.selectors";
import { User } from "@/types";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ChevronIcon from "./Icons/ChevronIcon";
import HomeIcon from "./Icons/HomeIcon";
import PlusIcon from "./Icons/PlusIcon";
import StatIcon from "./Icons/StatIcon";

type Props = {};

function SiteMenu({}: Props) {
  const user: User = useSelector(selectUser);
  const [isContentMenuOpened, setIsContentMenuOpened] = useState<boolean>(false);
  const [isStatMenuOpened, setIsStatMenuOpened] = useState<boolean>(false);

  return (
    <article style={{ gridArea: "menu" }} className="flex  flex-col box-border sticky left-0 top-0 overflow-y-hidden h-screen px-8 pt-4">
     
      <Link href="/">
        <img src="/jaji.svg" alt="" />
      </Link>
        {user.role === null ? (
          <>
            <Link href="/login">Login</Link>
            <Link href="/signin">Signin</Link>
          </>
        ) : (
          <Link href="/logout">Logout</Link>
        )}
        {user.role === "Admin" && (
          <>
            <div className="text-neutral-500 my-5">
              <div className="flex flew-row gap-5">
                <div className="my-auto h-fit"><PlusIcon size="20"/> </div>
                <div className="font-semibold text-xl" onClick={()=>setIsContentMenuOpened(!isContentMenuOpened)}>Contenu</div> 
                {isContentMenuOpened ? (<div className="my-auto h-fit"><ChevronIcon size="10"/></div>):(<div className="my-auto h-fit"><ChevronIcon size="10" rotation={180}/></div> )}
              </div>
              {isContentMenuOpened&&
               <div className="flex flex-col ml-10 justify-start">
                <div className="text-sm">
                  <Link href="/new-content">Nouvel article</Link>
                </div>
                <div className="text-sm">
                  <Link href="/content">Tous les contenus</Link>
                </div>
              </div>
              }
          </div>

            <div className="text-neutral-500 ">
              <div className="flex flew-row gap-5">
                <div className="my-auto h-fit"><StatIcon size="20"/></div>
                <div className="font-semibold text-xl" onClick={()=>setIsStatMenuOpened(!isStatMenuOpened)}>Statistiques</div> 
                {isStatMenuOpened ? (<div className="my-auto h-fit"><ChevronIcon size="10"/></div>):(<div className="my-auto h-fit"><ChevronIcon size="10" rotation={180}/></div> )}
              </div>
              {isStatMenuOpened&&               
              <div className="flex flex-col ml-10 justify-start">
                <div className="text-sm">
                <Link href="/new-content">Campagnes</Link>
                </div>
                <div className="text-sm">
                  <Link href="/content">Tous les contenus</Link>
                </div>
              </div>
              }

            </div>
            
       </>
      
        )}
    </article>
  );
}

export default SiteMenu;
