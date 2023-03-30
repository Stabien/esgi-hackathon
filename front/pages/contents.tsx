import ContentList from "@/components/ContentList";
import { LayoutAdmin } from "@/components/LayoutAdmin";
import { db } from "@/constants/db";
import { Content } from "@/types/content";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

const ContentPage = (props: Props) => {
  return (
    <LayoutAdmin>
      <ContentList />
    </LayoutAdmin>
  );
};

export default ContentPage;
