import React, { FC, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useFetching } from "hooks"
import { POSTS } from "api"
import { CommentType, PostType } from "api/posts/types"
import { Loader } from "components"
import classes from "./Post.module.css"

export const Post: FC = () => {

  const {postId} = useParams()

  const [post, setPost] = useState<PostType>({} as PostType)
  const [comments, setComments] = useState<CommentType[]>([])

  const [getPost, isPostLoading, postErrorMessage] = useFetching(async () => {
    const {data: post} = await POSTS.getPost(Number(postId))
    setPost(post)
  })

  const [getComments, isCommentsLoading, commentsErrorMessage] = useFetching(async () => {
    const {data: comments} = await POSTS.getComments(Number(postId))
    setComments(comments)
  })

  useEffect(() => {
    getPost()
  }, [])

  useEffect(() => {
    getComments()
  }, [])

  return (
    <div>
      <h1>Вы открыли страницу поста с iD = {postId}</h1>
      {isPostLoading
        ? <Loader/>
        : <div>{post.id}. {post.title}</div>}
      <h1>Комментарии</h1>
      {isCommentsLoading
        ? <Loader/>
        : <div>
          {comments.map((comment) => {
            return <div style={{marginTop: 15}} key={comment.id}>
              <h5>{comment.email}</h5>
              <div>{comment.body}</div>
            </div>
          })}
        </div>}
    </div>
  )
}
