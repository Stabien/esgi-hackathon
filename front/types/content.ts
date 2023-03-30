import { ProfessionCategory, SportCategory } from "@/types";

export type ContentType = "article" | "video" | "podcast";

export type TagsType = ProfessionCategory | SportCategory;

export type BaseContent = {
  uuid: string;
  type: ContentType;
  title: string;
  thumbnail: string;
  banner: string;
  tags: TagsType[];
  creationDate: number; //timestamp
};

export type ArticleContent = BaseContent & {
  type: Extract<ContentType, "article">;
  text: string;
};
export type VideoContent = BaseContent & {
  type: Extract<ContentType, "video" | "podcast">;
  url: string;
  description: string;
};

export type Content = ArticleContent | VideoContent;

export type Impression = {
  idContent: string;
  date: number; //timestamp
};
