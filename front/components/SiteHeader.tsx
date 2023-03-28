import Link from "next/link";
import React from "react";

type Props = {};

function SiteHeader({}: Props) {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/signin">Signin</Link>
    </div>
  );
}

export default SiteHeader;
