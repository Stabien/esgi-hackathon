import { db } from "@/constants/db";
import { getAllContents } from "@/services/content.backend";
import { Content, ContentType } from "@/types/content";
import { formatTimestamp, getRandomBackground } from "@/utils/display";
import React, { useEffect, useState } from "react";

type Props = {};

const ContentList = (props: Props) => {
  const [contentList, setContentList] = useState<Content[]>([]);

  const fetchContent = async () => {
    const newContentList: Content[] = [];
    const result = (await getAllContents()) as Content[]
    
    result.forEach((content) => {
      newContentList.push({ ...(content), uuid: content.uuid });
    });
    setContentList(newContentList);
  };

  useEffect(() => {
    fetchContent();
  }, []);
  return (
    <div>
      <h1 className="text-xl text-neutral-500 py-8 font-bold">
        Toutes nos campagnes
      </h1>
      <div className="flex flex-col gap-4">
        {contentList.map((content) => (
          <ContentItem content={content} />
        ))}
      </div>
    </div>
  );
};

export default ContentList;

export const ContentItem = ({ content }: { content: Content }) => {
  const [opened, setOpened] = useState<boolean>(false);
  return (
    <div>
      <div
        onClick={() => setOpened(!opened)}
        style={contentGridTemplateAreas}
        className="z-20 grid grid-cols-content items-center gap-4 w-full rounded-lg px-4 py-2 bg-white text-neutral-500 shadow "
        key={content.uuid}
      >
        <span
          style={{ gridArea: "type" }}
          className={`${getBackColor(content.type)} py-2 px-4  rounded w-fit`}
        >
          {content.type}
        </span>
        <span style={{ gridArea: "title" }} className="font-bold text-lg">
          {content.title}
        </span>
        {/* <span style={{ gridArea: "impressions" }}>{content.type}</span> */}
        <span style={{ gridArea: "creationDate" }} className="">
          {formatTimestamp(content.creationDate)}
        </span>
        {/* {content.uuid} <Link href={`/edit-content/${content.uuid}`}>edit</Link>{" "} */}
      </div>
      {opened && (
        <div className=" w-full  bg-white z-10 pt-8 -translate-y-2 p-4 flex flex-col gap-4">
          <span className="text-ls text-neutral-500  ">Tags associés :</span>

          <div className=" gap-4 flex flex-wrap ">
            {content.tags.map((t, i) => (
              <span
                className={`${getRandomBackground(
                  i
                )}  rounded  w-fit gap-4 px-4 py-1 text-white`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const gridTitleList = [
  { v: "Type campagne", g: "type" },
  { v: "Titre de la campagne", g: "title" },
  //   { v: "Personnes visées", g: "impressions" },
  { v: "Créé le", g: "creationDate" },
];

const getBackColor = (type: ContentType) => {
  switch (type) {
    case "article":
      return "bg-green-50";
    case "podcast":
      return "bg-yelllow-50";
    case "video":
      return "bg-pink-50";

    default:
      return "bg-pink-50";
  }
};

const contentGridTemplateAreas = {
  gridTemplateAreas: `'type title impressions creationDate'`,
};
