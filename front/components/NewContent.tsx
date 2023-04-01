import ContentForm from "@/components/ContentForm";
import ArrowIcon from "@/components/Icons/ArrowIcon";
import { defaultContent } from "@/constants";
import { db } from "@/constants/db";
import { addNewContent } from "@/services/content.backend";
import { Content } from "@/types/content";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import toast from "react-hot-toast";

type Props = {};

const NewContent = (props: Props) => {
  const [contentForm, setContentForm] = useState<Content>(defaultContent);
  const handleSubmit = async () => {
    try {
      const newContent: any = {
        ...contentForm,
        creationDate: Date.now(),
      };
      delete newContent.uid;
      await addNewContent(newContent)
      toast(`${newContent.type} a été crée`);
      setContentForm(defaultContent);
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <div className="flex flex-col items-end gap-4">
      <ContentForm form={contentForm} setForm={setContentForm} />
      <button
        onClick={handleSubmit}
        className="rounded flex items-center gap-4 bg-white shadow px-4 py-2 text-neutral-500 justify-center"
      >
        Enregister <ArrowIcon rotation={180} />
      </button>
    </div>
  );
};

export default NewContent;
