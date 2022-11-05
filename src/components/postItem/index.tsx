import React, { FC } from "react"
import { Button, Checkbox, EditableItem } from "components"
import { PostItemPropsType } from "./types"
import classes from "./PostItem.module.css"

export const PostItem: FC<PostItemPropsType> = (
  {
    id,
    userId,
    title,
    body,
    handleRemovePostClick,
    handleUpdatePostTitleBlurOrKeyDown,
    handleUpdatePostBodyBlurOrKeyDown
  }) => {

  const onRemovePostClick = (): void => {
    handleRemovePostClick(id)
  }

  const secondHandleUpdatePostTitleBlurOrKeyDown = (title: string): void => {
    handleUpdatePostTitleBlurOrKeyDown(id, title)
  }

  const secondHandleUpdatePostBodyBlurOrKeyDown = (body: string): void => {
    handleUpdatePostBodyBlurOrKeyDown(id, body)
  }

  return (
    <div className={classes.post}>
      <div className={classes.body}>
        <Checkbox/>
        <div className={classes.titleContainer}>
          <strong>
            {id}. <EditableItem currentTitle={title} updateTitle={secondHandleUpdatePostTitleBlurOrKeyDown}/>
          </strong>
          <EditableItem currentTitle={body} updateTitle={secondHandleUpdatePostBodyBlurOrKeyDown}/>
        </div>
      </div>

      <Button onClick={onRemovePostClick}>Удалить</Button>
    </div>
  )
}
