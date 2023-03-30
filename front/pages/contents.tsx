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
      // doc.data() is never undefined for query doc snapshots
    })
    setContentList(newContentList);
  }

  useEffect(() => {
    getAllContents()
    getContentByTags(["Services publics", "Commerce de détail et de services", "Sans emploi"])
  }, [])

  return (
    <LayoutAdmin>
      <ContentList />
    </LayoutAdmin>
  );
};

export default ContentPage;
