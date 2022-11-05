export type PostItemPropsType = {
  id: number
  userId: number
  title: string
  body: string
  handleRemovePostClick: (postId: number) => void
  handleUpdatePostTitleBlurOrKeyDown: (postId: number, title: string) => void
  handleUpdatePostBodyBlurOrKeyDown: (postId: number, body: string) => void
}
