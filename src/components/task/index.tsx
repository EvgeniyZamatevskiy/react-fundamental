import React, { FC, ChangeEvent } from "react"
import { TaskPropsType } from "./types"
import { Button, Checkbox, EditableItem } from "components"

export const Task: FC<TaskPropsType> = (
  {
    todoListId,
    taskId,
    title,
    isDone,
    handleRemoveTaskClick,
    handleUpdateTasksTitleBlurOrKeyDown,
    handleToggleIsDoneChange
  }) => {

  const onRemoveTaskClick = (): void => {
    handleRemoveTaskClick(todoListId, taskId)
  }

  const onUpdateTasksTitleBlurOrKeyDown = (todoListTitle: string): void => {
    handleUpdateTasksTitleBlurOrKeyDown(todoListId, taskId, todoListTitle)
  }

  const onToggleIsDoneChange = (event: ChangeEvent<HTMLInputElement>): void => {
    handleToggleIsDoneChange(todoListId, taskId, event.currentTarget.checked)
  }

  return (
    <div>
      <EditableItem currentTitle={title} updateTitle={onUpdateTasksTitleBlurOrKeyDown}/>
      <Button onClick={onRemoveTaskClick}>x</Button>
      <Checkbox checked={isDone} onChange={onToggleIsDoneChange}/>
    </div>
  )
}
