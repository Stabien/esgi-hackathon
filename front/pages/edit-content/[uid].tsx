import ContentForm from "@/components/ContentForm";
import Form from "@/components/Form";
import { LayoutAdmin } from "@/components/LayoutAdmin";
import { defaultContent } from "@/constants";
import { db } from "@/constants/db";
import { Content } from "@/types/content";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

type Props = {};

const EditContentPage = (props: Props) => {
  const router = useRouter();
  const { uid } = router.query;

  const [content, setContent] = useState<Content>(defaultContent);

  const getContent = async () => {
    if (!uid || typeof uid !== "string") return;
    const docSnap = await getDoc(doc(db, "content", uid));
    if (!docSnap.exists()) {
      toast.error("le contenu n'a pas été retrouvé");
    }
    const newContent: Content = {
      ...(docSnap.data() as Content),
      uid: docSnap.id,
    };
    setContent(newContent);
  };

  const handleModify = async () => {
    try {
      await setDoc(doc(db, "content", content.uid), content);

      toast(`${content.title} a bien été modifié`);
    } catch (error) {}
  };

  useEffect(() => {
    getContent();
  }, []);

  useEffect(() => {
    console.log(content);
  }, [content]);

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
