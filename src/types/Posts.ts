import { PostType } from "api/posts/types"

export type FilterValueType = "All" | "Active" | "Completed"

export type FilterType = {
  sort: string
  query: string
}

export type SupplementedPostType = PostType & {
  isLiked: boolean
}
