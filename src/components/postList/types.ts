import { PostType } from "api/posts/types"

export type PostListPropsType = {
  posts: PostType[]
  handleRemovePostClick: (postId: number) => void
  handleUpdatePostTitleBlurOrKeyDown: (postId: number, title: string) => void
  handleUpdatePostBodyBlurOrKeyDown: (postId: number, body: string) => void
}
