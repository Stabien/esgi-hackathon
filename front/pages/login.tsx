import { LayoutAdmin } from "@/components/LayoutAdmin";
import LayoutUser from "@/components/LayoutUser";
import Login from "@/components/Login";
import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <LayoutUser>
      <Login />
    </LayoutUser>
  );
};

export default LoginPage;
