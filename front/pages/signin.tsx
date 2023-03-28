import { Layout } from "@/components/Layout";
import Login from "@/components/Login";
import Signin from "@/components/Signin";
import React from "react";

type Props = {};

const SigninPage = (props: Props) => {
  return (
    <Layout>
      <Signin />
    </Layout>
  );
};

export default SigninPage;
