import React, { FC } from "react"
import { Button, EditableItem, Filtering, Tasks } from "components"
import { TodoListPropsType } from "./types"
import { FilterValueType, TaskType } from "types"

const filterValues: FilterValueType[] = ["All", "Active", "Completed"]

const getFilteredTasks = (tasks: TaskType[], filterValue: FilterValueType): TaskType[] => {
  if (filterValue === "Active") {
    return tasks.filter(({isDone}) => !isDone)
  }

  if (filterValue === "Completed") {
    return tasks.filter(({isDone}) => isDone)
  }

  return tasks
}

export const TodoList: FC<TodoListPropsType> = (
  {
    todoListId,
    title,
    filterValue,
    tasks,
    handleRemoveTodoListClick,
    handleUpdateTodoListTitleBlurOrKeyDown,
    handleAddTaskClick,
    handleRemoveTaskClick,
    handleUpdateTasksTitleBlurOrKeyDown,
    handleToggleIsDoneChange,
    handleSelectFilterValueClick
  }) => {

  const filteredTasks = getFilteredTasks(tasks, filterValue)

  const onRemoveTodoListClick = (): void => {
    handleRemoveTodoListClick(todoListId)
  }

  const secondHandleUpdateTodoListTitleBlurOrKeyDown = (title: string) => {
    handleUpdateTodoListTitleBlurOrKeyDown(todoListId, title)
  }

  const secondHandleSelectFilterValueClick = (filterValue: FilterValueType): void => {
    handleSelectFilterValueClick(todoListId, filterValue)
  }

  const filterValuesRender = filterValues.map(filterValue => {
    return (
      <Filtering
        key={filterValue}
        filterValue={filterValue}
        selectFilterValue={secondHandleSelectFilterValueClick}
      />
    )
  })

  return (
    <div>
      <EditableItem currentTitle={title} updateTitle={secondHandleUpdateTodoListTitleBlurOrKeyDown}/>
      <Button onClick={onRemoveTodoListClick}>x</Button>
      <Tasks
        tasks={filteredTasks}
        todoListId={todoListId}
        handleAddTaskClick={handleAddTaskClick}
        handleRemoveTaskClick={handleRemoveTaskClick}
        handleUpdateTasksTitleBlurOrKeyDown={handleUpdateTasksTitleBlurOrKeyDown}
        handleToggleIsDoneChange={handleToggleIsDoneChange}
      />
      {filterValuesRender}
    </div>
  )
}
