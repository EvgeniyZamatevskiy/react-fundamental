export type PostType = {
  userId: number
  id: number
  title: string
  body: string
}

export type CommentType = {
  body: string
  email: string
  id: number
  name: string
  postId: number
}
