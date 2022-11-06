import { instance } from "api/config"
import { CommentType, PostType } from "./types"

export const POSTS = {
  getPosts(page: number, pageCount: number) {
    return instance.get<PostType[]>("posts", {
      params: {
        _page: page,
        _limit: pageCount
      }
    })
  },
  getPost(postId: number) {
    return instance.get<PostType>(`posts/${postId}`)
  },
  getComments(postId: number) {
    return instance.get<CommentType[]>(`posts/${postId}/comments`)
  }
}
