import { LogoutFirebase } from "@/services/db";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

type Props = {};

const LogoutPage = (props: Props) => {
  const router = useRouter();
  const logout = async () => {
    await LogoutFirebase();

    router.push("/");
  };
  useEffect(() => {
    logout();
  }, []);
  return <div>LogoutPage</div>;
};

export default LogoutPage;
