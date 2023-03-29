import { LayoutAdmin } from "@/components/LayoutAdmin";
import NewContent from "@/components/NewContent";
import React from "react";

type Props = {};

const NewContentPage = (props: Props) => {
  return (
    <LayoutAdmin>
      <NewContent />
    </LayoutAdmin>
  );
};

export default NewContentPage;
