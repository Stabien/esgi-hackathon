import { logout } from "@/services/content.backend";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

type Props = {};

const LogoutPage = (props: Props) => {
  const router = useRouter();
  
  useEffect(() => {
    logout()
    router.push('/login')
  }, [])

  return <div>LogoutPage</div>;
};

export default LogoutPage;
