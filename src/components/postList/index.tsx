import React, { FC } from "react"
import { PostItem } from "components"
import { PostListPropsType } from "./types"
import classes from "./PostList.module.css"

export const PostList: FC<PostListPropsType> =
  ({
     posts,
     handleRemovePostClick,
     handleUpdatePostTitleBlurOrKeyDown,
     handleUpdatePostBodyBlurOrKeyDown,
     handleToggleIsLikedChange
   }) => {

    const postsRender = posts.map(({userId, id, title, body, isLiked}) => {
      return (
        <PostItem
          key={id}
          id={id}
          userId={userId}
          title={title}
          body={body}
          isLiked={isLiked}
          handleRemovePostClick={handleRemovePostClick}
          handleUpdatePostTitleBlurOrKeyDown={handleUpdatePostTitleBlurOrKeyDown}
          handleUpdatePostBodyBlurOrKeyDown={handleUpdatePostBodyBlurOrKeyDown}
          handleToggleIsLikedChange={handleToggleIsLikedChange}
        />
      )
    })

    if (!posts.length) {
      return <h1 className={classes.title}>Посты не найдены</h1>
    }

    return (
      <div className={classes.postList}>
        <h1 className={classes.title}>Список постов</h1>
        {postsRender}
      </div>
    )
  }
