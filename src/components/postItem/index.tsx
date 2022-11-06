import React, { ChangeEvent, FC } from "react"
import { Button, Checkbox, EditableItem } from "components"
import { PostItemPropsType } from "./types"
import classes from "./PostItem.module.css"

export const PostItem: FC<PostItemPropsType> = (
  {
    id,
    userId,
    title,
    body,
    isLiked,
    handleRemovePostClick,
    handleUpdatePostTitleBlurOrKeyDown,
    handleUpdatePostBodyBlurOrKeyDown,
    handleToggleIsLikedChange
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

  const onToggleIsLikedChange = (event: ChangeEvent<HTMLInputElement>): void => {
    handleToggleIsLikedChange(id, event.currentTarget.checked)
  }

  return (
    <div className={classes.post}>
      <div className={classes.body}>
        <Checkbox checked={isLiked} onChange={onToggleIsLikedChange}/>
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
