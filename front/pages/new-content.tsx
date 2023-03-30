import { LayoutAdmin } from "@/components/LayoutAdmin";
import NewContent from "@/components/NewContent";
import React from "react";

type Props = {};

const NewContentPage = (props: Props) => {
  return (
    <LayoutAdmin>
      <h1 className="text-xl text-neutral-500 py-8 font-bold">
        Création d’une nouvelle campagne
      </h1>
      <NewContent />
    </LayoutAdmin>
  );
};

export default NewContentPage;
