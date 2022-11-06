import { SupplementedPostType } from "types"

export type PostListPropsType = {
  posts: SupplementedPostType[]
  handleRemovePostClick: (postId: number) => void
  handleUpdatePostTitleBlurOrKeyDown: (postId: number, title: string) => void
  handleUpdatePostBodyBlurOrKeyDown: (postId: number, body: string) => void
  handleToggleIsLikedChange: (postId: number, isLiked: boolean) => void
}
