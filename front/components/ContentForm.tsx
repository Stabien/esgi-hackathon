import { defaultContent } from "@/constants";
import { db } from "@/constants/db";
import {
  ArticleContent,
  Content,
  ContentType,
  VideoContent,
} from "@/types/content";
import { addDoc, collection } from "firebase/firestore";
import React, { Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-hot-toast";

type Props = {
  form: Content;
  setForm: Dispatch<SetStateAction<Content>>;
};

const ContentForm = ({ form, setForm }: Props) => {
  const contentTypeList: ContentType[] = ["article", "podcast", "video"];

  const [currentTag, setCurrentTag] = useState<string>("");

  const handleTypeContent = (content: ContentType) => {
    if (content === "article") {
      if (form.type === "article") return;
      const newContent: ArticleContent = {
        type: content,
        creationDate: form.creationDate,
        tags: form.tags,
        thumbnail: form.thumbnail,
        banner: form.banner,
        text: "",
        title: form.title,
        uid: form.uid,
      };
      setForm(newContent);
    } else {
      const newContent: VideoContent = {
        type: content,
        creationDate: form.creationDate,
        tags: form.tags,
        thumbnail: form.thumbnail,
        banner: form.banner,
        title: form.title,
        uid: form.uid,
        description: "",
        url: "",
      };
      setForm(newContent);
    }
  };

  return (
    <div>
      <section className="flex gap-4">
        {contentTypeList.map((content) => (
          <div
            onClick={() => handleTypeContent(content)}
            key={content}
            className={`${
              form.type === content ? "border border-red-500" : ""
            }`}
          >
            {content}
          </div>
        ))}
      </section>
      <section>
        <p>Contenu</p>
        <input
          type="text"
          name="title"
          value={form.title}
          placeholder="Titre du contenu"
          onChange={(e) =>
            setForm((prevState) => ({ ...prevState, title: e.target.value }))
          }
        />
        <input
          type="text"
          name="thumbnail"
          value={form.thumbnail}
          placeholder="url de la Thumbnail"
          onChange={(e) =>
            setForm((prevState) => ({
              ...prevState,
              thumbnail: e.target.value,
            }))
          }
        />
        <input
          type="text"
          name="urlBanner"
          value={form.banner}
          placeholder="url de la bannière"
          onChange={(e) =>
            setForm((prevState) => ({ ...prevState, banner: e.target.value }))
          }
        />
      </section>
      <section>
        <p>Tags</p>
        <input
          type="text"
          name="title"
          value={currentTag}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const newTags: string[] = [...form.tags];
              newTags.push(currentTag);
              setForm((prevState) => ({ ...prevState, tags: newTags }));
              setCurrentTag("");
            }
          }}
          onChange={(e) => setCurrentTag(e.target.value)}
        />
        <div>
          {form.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>
      <section>
        <p>Content</p>
        {form.type === "article" && (
          <>
            <input
              type="text"
              name="articleText"
              placeholder="Rédigez votre article ici"
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  text: e.target.value,
                }))
              }
            />
          </>
        )}
        {form.type !== "article" && (
          <>
            <input
              type="text"
              name="contentUrl"
              placeholder="url de votre contenu"
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  url: e.target.value,
                }))
              }
            />
            <input
              type="text"
              name="contentDescription"
              placeholder="description de votre contenu"
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  description: e.target.value,
                }))
              }
            />
          </>
        )}
      </section>
    </div>
  );
};

export default ContentForm;
