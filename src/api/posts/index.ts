import { instance } from "api/config"
import { PostType } from "./types"

export const POSTS = {
  getPosts() {
    return instance.get<PostType[]>("posts")
  }
}
