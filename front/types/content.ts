export type ContentType = "article" | "video" | "podcast";

export type BaseContent = {
  id?: string;
  type: ContentType;
  title: string;
  tags: string[];
  thumbnail: string;
  creationDate: number; //timestamp
};

export type ArticleContent = {
  type: Extract<ContentType, "article">;
  text: string;
};
export type VideoContent = {
  type: Extract<ContentType, "video" | "podcast">;
  url: string;
};

export type Impression = {
  idContent: string;
  date: number; //timestamp
};
