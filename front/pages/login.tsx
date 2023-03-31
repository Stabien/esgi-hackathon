import { LayoutAdmin } from "@/components/LayoutAdmin";
import LayoutUser from "@/components/LayoutUser";
import Login from "@/components/Login";
import { selectUser } from "@/redux/user/user.selectors";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

type Props = {};

const LoginPage = (props: Props) => {
  const user = useSelector(selectUser);
  const router = useRouter();

  useEffect(() => {
    if (user.role !== null) {
      router.push("/");
    }
  }, [user]);
  return (
    <LayoutUser>
      <Login />
    </LayoutUser>
  );
};

export default LoginPage;
