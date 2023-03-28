import { Layout } from "@/components/Layout";
import Login from "@/components/Login";
import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <Layout>
      <Login />
    </Layout>
  );
};

export default LoginPage;
