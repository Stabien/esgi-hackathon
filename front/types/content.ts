export type ContentType = "article" | "video" | "podcast";

export type BaseContent = {
  id?: string;
  type: ContentType;
  title: string;
  tags: string[];
  thumbnail: string;
  creationDate: number; //timestamp
};

export type ArticleContent = BaseContent & {
  type: Extract<ContentType, "article">;
  text: string;
};
export type VideoContent = BaseContent & {
  type: Extract<ContentType, "video" | "podcast">;
  url: string;
};

export type Impression = {
  idContent: string;
  date: number; //timestamp
};
