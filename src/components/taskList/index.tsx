import React, { FC } from "react"
import { AddItemForm, TaskEmpty, TaskItem } from "components"
import { TaskListPropsType } from "./types"

export const TaskList: FC<TaskListPropsType> = (
  {
    tasks,
    todoListId,
    handleAddTaskClick,
    handleRemoveTaskClick,
    handleUpdateTasksTitleBlurOrKeyDown,
    handleToggleIsDoneChange
  }) => {

  const secondHandleAddTaskClick = (taskTitle: string): void => {
    handleAddTaskClick(todoListId, taskTitle)
  }

  const tasksRender = tasks.map(({taskId, title, isDone}) => {
    return (
      <TaskItem
        key={taskId}
        todoListId={todoListId}
        taskId={taskId}
        title={title}
        isDone={isDone}
        handleRemoveTaskClick={handleRemoveTaskClick}
        handleUpdateTasksTitleBlurOrKeyDown={handleUpdateTasksTitleBlurOrKeyDown}
        handleToggleIsDoneChange={handleToggleIsDoneChange}
      />
    )
  })

  return (
    <div>
      <AddItemForm handleAddItemClick={secondHandleAddTaskClick}/>
      {tasks.length ? tasksRender : <TaskEmpty/>}
    </div>
  )
}
