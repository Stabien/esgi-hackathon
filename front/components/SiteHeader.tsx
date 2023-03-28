import { selectUser } from "@/redux/user/user.selectors";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

function SiteHeader({}: Props) {
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
        <Link href="/">Home</Link>
        {user.role === null && (
          <>
            <Link href="/login">Login</Link>
            <Link href="/signin">Signin</Link>
          </>
        )}
        {user.role === "Admin" && (
          <>
            <Link href="/new-content">Nouvel article</Link>
          </>
        )}
      </div>
    </article>
  );
}

export default SiteHeader;
