import { Content, TagsType } from '@/types/content'

export const logout = () => {
  localStorage.removeItem('token')
}

export const getAllContents = async (
): Promise<Content[] | Error> => {
  try {
    const result = await fetch("http://localhost:4000/api/contents")
    const data = await result.json()

    return data
  } catch (e) {
    return e as Error;
  }
}

export const getContentByTags = async (
  body: TagsType[]
): Promise<Content[] | Error> => {
  try {
    const result = await fetch("http://localhost:4000/api/content/tags", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body),
    });
    
    const data = await result.json()
    return data
  } catch (e) {
    return e as Error;
  }
}

export const addNewContent = async (
  body: Content
): Promise<Content[] | Error> => {
  try {
    const result = await fetch("http://localhost:4000/api/content", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body),
    });
    const data = await result.json()
    
    return data
  } catch (e) {
    return e as Error;
  }
}
