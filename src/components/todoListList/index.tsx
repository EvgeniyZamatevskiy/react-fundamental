import React, { FC } from "react"
import { TodoListItem } from "components"
import { TodoListListPropsType } from "./types"

export const TodoListList: FC<TodoListListPropsType> =
  ({
     todoLists,
     handleRemoveTodoListClick,
     handleUpdateTodoListTitleBlurOrKeyDown,
     handleAddTaskClick,
     handleRemoveTaskClick,
     handleUpdateTasksTitleBlurOrKeyDown,
     handleToggleIsDoneChange,
     handleSelectFilterValueClick
   }) => {

    const todoListsRender = todoLists.map(({todoListId, filterValue, title, tasks, description}) => {
      return (
        <TodoListItem
          key={todoListId}
          todoListId={todoListId}
          title={title}
          filterValue={filterValue}
          description={description}
          tasks={tasks}
          handleRemoveTodoListClick={handleRemoveTodoListClick}
          handleUpdateTodoListTitleBlurOrKeyDown={handleUpdateTodoListTitleBlurOrKeyDown}
          handleAddTaskClick={handleAddTaskClick}
          handleRemoveTaskClick={handleRemoveTaskClick}
          handleUpdateTasksTitleBlurOrKeyDown={handleUpdateTasksTitleBlurOrKeyDown}
          handleToggleIsDoneChange={handleToggleIsDoneChange}
          handleSelectFilterValueClick={handleSelectFilterValueClick}
        />
      )
    })

    if (!todoLists.length) {
      return (
        <h1>todo lists not found</h1>
      )
    }

    return (
      <div>
        {todoListsRender}
      </div>
    )
  }
