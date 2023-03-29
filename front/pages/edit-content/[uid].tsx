import { LayoutAdmin } from "@/components/LayoutAdmin";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const EditContentPage = (props: Props) => {
  const router = useRouter();
  const { uid } = router.query;

  return <LayoutAdmin>EditContentPage</LayoutAdmin>;
};

export default EditContentPage;
