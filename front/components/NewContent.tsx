import ContentForm from "@/components/ContentForm";
import { defaultContent } from "@/constants";
import { db } from "@/constants/db";
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
      console.log(newContent);

      // await addDoc(collection(db, "content"), newContent);
      toast(`${newContent.type} a été crée`);
      // setContentForm(defaultContent);
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      <ContentForm form={contentForm} setForm={setContentForm} />
      <button onClick={handleSubmit}>Log form</button>
    </div>
  );
};

export default NewContent;
