import React, { FC } from "react"
import { AddItemForm, TodoList } from "components"
import { TodoListsPropsType } from "./types"

export const TodoLists: FC<TodoListsPropsType> =
  ({
     todoLists,
     handleAddTodoListClick,
     handleRemoveTodoListClick,
     handleUpdateTodoListTitleBlurOrKeyDown,
     handleAddTaskClick,
     handleRemoveTaskClick,
     handleUpdateTasksTitleBlurOrKeyDown,
     handleToggleIsDoneChange,
     handleSelectFilterValueClick
   }) => {

    const secondHandleAddTodoListClick = (todoListTitle: string): void => {
      handleAddTodoListClick(todoListTitle)
    }

    const todoListsRender = todoLists.map(({todoListId, filterValue, title, tasks}) => {
      return (
        <TodoList
          key={todoListId}
          todoListId={todoListId}
          title={title}
          filterValue={filterValue}
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

    return (
      <div>
        <AddItemForm handleAddItemClick={secondHandleAddTodoListClick}/>
        {todoListsRender}
      </div>
    )
  }
