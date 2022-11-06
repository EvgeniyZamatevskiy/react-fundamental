import { PostType } from "api/posts/types"

export type FilterType = {
  sort: string
  query: string
}

export type SupplementedPostType = PostType & {
  isLiked: boolean
}
