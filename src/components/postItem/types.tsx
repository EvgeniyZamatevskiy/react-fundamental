export type PostItemPropsType = {
  id: number
  userId: number
  title: string
  body: string
  isLiked: boolean
  handleRemovePostClick: (postId: number) => void
  handleUpdatePostTitleBlurOrKeyDown: (postId: number, title: string) => void
  handleUpdatePostBodyBlurOrKeyDown: (postId: number, body: string) => void
  handleToggleIsLikedChange: (postId: number, isLiked: boolean) => void
}
