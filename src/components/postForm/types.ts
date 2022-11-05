export type PostFormPropsType = {
  handleAddPostClick: (payload: { title: string, body: string }) => void
}

export type PostParam = {
  title: string
  body: string
}
