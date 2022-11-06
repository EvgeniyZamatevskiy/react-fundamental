import React, { FC } from "react"
import { useParams } from "react-router-dom"
import classes from "./Post.module.css"

export const Post: FC = () => {

  const {postId} = useParams()

  return (
    <div>

    </div>
  )
}
