import { selectUser } from "@/redux/user/user.selectors";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";

interface LayoutProps {
  children: React.ReactNode;
}
const LayoutUser = ({ children }: LayoutProps) => {
  const user = useSelector(selectUser);

  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  return (
    <div>
      <div
        style={{
          gridTemplateAreas: `'burger logo links'`,
        }}
        className="grid gap-8 px-4  items-center grid-cols-menu-mobile sticky  w-full shadow-neutral-150  shadow-lg "
      >
        <div
          style={{ gridArea: "burger" }}
          className={`${isMenuOpened ? "h-5 mt-0" : ""} space-y-1.5 w-fit`}
          onClick={() => setIsMenuOpened((prevState) => !prevState)}
        >
          {isMenuOpened ? (
            <>
              <div className="w-6 h-0.5 bg-gray-600 translate-y-2 transform rotate-45"></div>
              <div className="w-6 h-0.5 bg-gray-600 transform -rotate-45"></div>
            </>
          ) : (
            <>
              <div className="w-6 h-0.5 bg-gray-600"></div>
              <div className="w-6 h-0.5 bg-gray-600"></div>
              <div className="w-6 h-0.5 bg-gray-600"></div>
            </>
          )}
        </div>

        <img
          src="/jaji.svg"
          alt=""
          style={{ gridArea: "logo" }}
          className="py-4"
        />
        <div className=""></div>
      </div>
      {isMenuOpened && (
        <div className="absolute mt-16 py-8 z-10 w-screen top-0 left-0 bg-white flex flex-col gap-2 text-blue-350 rounded-lg shadow-md">
          {user.role === null ? (
            <>
              <Link href="/login">Login</Link>
              <Link href="/signin">Signin</Link>
            </>
          ) : (
            <Link href="/logout">Logout</Link>
          )}
          <Link className="w-fit m-auto hover:text-blue-300" href="/">
            Content
          </Link>
          <Link className="w-fit m-auto hover:text-blue-300" href="/">
            Log Out
          </Link>
        </div>
      )}
      <main className="">{children}</main>
    </div>
  );
};

export default LayoutUser;
