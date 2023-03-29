import { LayoutAdmin } from "@/components/LayoutAdmin";
import LayoutUser from "@/components/LayoutUser";
import Login from "@/components/Login";
import Signin from "@/components/Signin";
import React from "react";

type Props = {};

const SigninPage = (props: Props) => {
  return (
    <LayoutUser>
      <Signin />
    </LayoutUser>
  );
};

export default SigninPage;
