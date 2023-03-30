import { TagsType } from '@/types/content'

export const getAllContents = async (
): Promise<Response | Error> => {
  try {
    const result = await fetch("http://localhost:4000/api/contents")
    console.log(result)
    return result;
  } catch (e) {
    return e as Error;
  }
}

export const getContentByTags = async (
  body: TagsType[]
): Promise<Response | Error> => {
  try {
    const result = await fetch("http://localhost:4000/api/content/tags", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body),
    });
    console.log(result)
    return result;
  } catch (e) {
    return e as Error;
  }
}
