import { instance } from "api/config"
import { PostType } from "./types"

export const POSTS = {
  getPosts(page: number, pageCount: number) {
    return instance.get<PostType[]>("posts", {
      params: {
        _page: page,
        _limit: pageCount
      }
    })
  }
}
