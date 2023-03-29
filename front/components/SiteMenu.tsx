import { selectUser } from "@/redux/user/user.selectors";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import HomeIcon from "./Icons/HomeIcon";
import PlusIcon from "./Icons/PlusIcon";
import StatIcon from "./Icons/StatIcon";

type Props = {};

function SiteMenu({}: Props) {
  const user = useSelector(selectUser);
  return (
    <article
      style={{ gridArea: "menu" }}
      className="flex  flex-col box-border sticky left-0 top-0 overflow-y-hidden h-screen px-8 pt-4"
    >
      <Link href="/">
        <img src="/jaji.svg" alt="" />
      </Link>
      <div className=" mt-10 flex flex-col gap-4">
        <div className="flex gap-2 flex-col">
          <HomeIcon />
          <PlusIcon />
          <StatIcon />
          <Link href="/">Home</Link>
          <Link href="/contents">content</Link>
          <Link href="/new-content">new content</Link>
        </div>

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
            <div>
              Contenu
              <select className="truncate w-fit h-0 hover:h-fit">
                <option className="flex gap-2">
                  <PlusIcon />
                  <Link href="/new-content">Nouvel article</Link>
                </option>
                <option className="flex gap-2">
                  <Link href="/">Tous les contenus</Link>
                </option>
              </select>
            </div>

            <div>
              Statistique
              <select>
                <option className="flex gap-2">
                  <StatIcon />
                  <Link href="/new-content">Cient</Link>
                </option>
                <option className="flex gap-2">
                  <Link href="/">Campagne</Link>
                </option>
              </select>
            </div>
          </>
        )}
      </div>
    </article>
  );
}

export default SiteMenu;
