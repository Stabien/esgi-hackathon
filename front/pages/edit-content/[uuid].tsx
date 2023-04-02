import ContentForm from "@/components/ContentForm";
import Form from "@/components/Form";
import { LayoutAdmin } from "@/components/LayoutAdmin";
import { defaultContent } from "@/constants";
import { db } from "@/constants/db";
import { getContentByUuid } from "@/services/content.backend";
import { Content } from "@/types/content";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

type Props = {};

const EditContentPage = (props: Props) => {
  const router = useRouter();
  const { uuid } = router.query;

  const [content, setContent] = useState<Content>(defaultContent);

  const fetchContent = async () => {
    const result = (await getContentByUuid(uuid as string)) as content

    setContent(result)
  }

  
  const handleModify = async () => {
    try {
      await setDoc(doc(db, "content", content.uid), content);
      
      toast(`${content.title} a bien été modifié`);
    } catch (error) {}
  };
  

  return (
    <LayoutAdmin>
      <ContentForm form={content} setForm={setContent} />

      <button type="submit" onClick={handleModify}>
        Modify
      </button>
    </LayoutAdmin>
  );
};

export default EditContentPage;
