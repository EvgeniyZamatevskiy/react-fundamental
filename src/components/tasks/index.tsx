import React, { FC } from "react"
import { AddItemForm, NoTasks, Task } from "components"
import { TasksPropsType } from "./types"

export const Tasks: FC<TasksPropsType> = (
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
      <Task
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
      {tasks.length ? tasksRender : <NoTasks/>}
    </div>
  )
}
