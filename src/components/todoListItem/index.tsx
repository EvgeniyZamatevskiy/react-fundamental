import React, { FC, useMemo, useState } from "react"
import { Button, EditableItem, Modal, TaskFilter, TaskList } from "components"
import { TodoListItemPropsType } from "./types"
import { FilterValueType } from "types"

export const TodoListItem: FC<TodoListItemPropsType> = (
  {
    todoListId,
    title,
    filterValue,
    description,
    tasks,
    handleRemoveTodoListClick,
    handleUpdateTodoListTitleBlurOrKeyDown,
    handleAddTaskClick,
    handleRemoveTaskClick,
    handleUpdateTasksTitleBlurOrKeyDown,
    handleToggleIsDoneChange,
    handleSelectFilterValueClick
  }) => {

  const [isActiveModal, setIsActiveModal] = useState(false)

  const filteredTasks = useMemo(() => {
    if (filterValue === "Active") {
      return tasks.filter(({isDone}) => !isDone)
    }

    if (filterValue === "Completed") {
      return tasks.filter(({isDone}) => isDone)
    }

    return tasks
  }, [filterValue, tasks])

  const onRemoveTodoListClick = (): void => {
    handleRemoveTodoListClick(todoListId)
  }

  const secondHandleUpdateTodoListTitleBlurOrKeyDown = (title: string): void => {
    handleUpdateTodoListTitleBlurOrKeyDown(todoListId, title)
  }

  const secondHandleSelectFilterValueClick = (filterValue: FilterValueType): void => {
    handleSelectFilterValueClick(todoListId, filterValue)
  }

  const onActivateIsModalClick = (): void => {
    setIsActiveModal(true)
  }

  const handleDeactivateIsModalClick = (): void => {
    setIsActiveModal(false)
  }

  return (
    <div>
      <Modal isActiveModal={isActiveModal} onDeactivateModalClick={handleDeactivateIsModalClick}>
        <button onClick={onRemoveTodoListClick}>Yes</button>
        <button onClick={handleDeactivateIsModalClick}>No</button>
      </Modal>
      <EditableItem currentTitle={title} updateTitle={secondHandleUpdateTodoListTitleBlurOrKeyDown}/>
      <div>{description}</div>
      <Button onClick={onActivateIsModalClick}>x</Button>
      <TaskList
        tasks={filteredTasks}
        todoListId={todoListId}
        handleAddTaskClick={handleAddTaskClick}
        handleRemoveTaskClick={handleRemoveTaskClick}
        handleUpdateTasksTitleBlurOrKeyDown={handleUpdateTasksTitleBlurOrKeyDown}
        handleToggleIsDoneChange={handleToggleIsDoneChange}
      />
      <TaskFilter
        secondHandleSelectFilterValueClick={secondHandleSelectFilterValueClick}
      />
    </div>
  )
}
