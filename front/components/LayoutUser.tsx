import Link from "next/link";
import React, { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}
const LayoutUser = ({ children }: LayoutProps) => {
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
          className="space-y-1.5"
          onClick={() => setIsMenuOpened((prevState) => !prevState)}
        >
          <div className="w-6 h-0.5 bg-gray-600"></div>
          <div className="w-6 h-0.5 bg-gray-600"></div>
          <div className="w-6 h-0.5 bg-gray-600"></div>
        </div>
        <img
          src="/jaji.svg"
          alt=""
          style={{ gridArea: "logo" }}
          className="bg-red-500"
        />
        <div className="bg-blue-500">sdfksdj</div>
      </div>
      {isMenuOpened && (
        <div className="absolute mt-10 py-8 z-10 w-screen top-0 left-0 bg-gray-200">
          <Link href="/login">Login</Link>
        </div>
      )}
      <main className="">{children}</main>
    </div>
  );
};

export default LayoutUser;
