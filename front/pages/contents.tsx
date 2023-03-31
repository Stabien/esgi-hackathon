import ContentList from "@/components/ContentList";
import { LayoutAdmin } from "@/components/LayoutAdmin";
import { db } from "@/constants/db";
import { getAllContents, getContentByTags } from "@/services/content.backend";
import { Content } from "@/types/content";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react"

type Props = {};

const ContentPage = (props: Props) => {
  const [contentList, setContentList] = useState<Content[]>([]);

  const fetchContent = async () => {
    const newContentList: Content[] = [];
    const result = await getDocs(collection(db, "content"))
    result.forEach((doc) => {
      newContentList.push({ ...(doc.data() as Content), uid: doc.id })
    })
    setContentList(newContentList);
  }

  useEffect(() => {
    getAllContents()
  }, [])

  return (
    <LayoutAdmin>
      <ContentList />
    </LayoutAdmin>
  );
};

export default ContentPage;
