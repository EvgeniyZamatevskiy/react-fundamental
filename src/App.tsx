import React, { FC, useState } from "react"
import { AddItemForm, TodoListFilter, TodoListList } from "components"
import { FilterType, FilterValueType, TaskType, TodoListType } from "types"
import { useTodoLists } from "hooks"
import "./App.css"

export const App: FC = () => {

  const [todoLists, setTodoLists] = useState<TodoListType[]>([
    {
      todoListId: 1, filterValue: "All", title: "б", description: "аа",
      tasks: [
        {taskId: 1, title: "my first taskItem", isDone: false}
      ]
    },
    {
      todoListId: 2, filterValue: "All", title: "а", description: "бб",
      tasks: [
        {taskId: 2, title: "my first taskItem", isDone: false}
      ]
    },
  ])
  const [filter, setFilter] = useState<FilterType>({sort: 0, query: ""})
  const sortedAndSearchTodoLists = useTodoLists(todoLists, filter)

  const handleAddTodoListClick = (title: string): void => {
    const todoList: TodoListType = {todoListId: Date.now(), title, tasks: [], filterValue: "All", description: "а"}
    setTodoLists([todoList, ...todoLists])
  }

  const handleRemoveTodoListClick = (todoListId: number): void => {
    setTodoLists(todoLists.filter(todoList => todoList.todoListId !== todoListId))
  }

  const handleUpdateTodoListTitleBlurOrKeyDown = (todoListId: number, title: string): void => {
    setTodoLists(todoLists.map(todoList => todoList.todoListId === todoListId ? {...todoList, title} : todoList))
  }

  const handleAddTaskClick = (todoListId: number, title: string): void => {
    const task: TaskType = {taskId: Date.now(), title, isDone: false}
    setTodoLists(todoLists.map(todoList => todoList.todoListId === todoListId
      ? {...todoList, tasks: [task, ...todoList.tasks]}
      : todoList))
  }

  const handleRemoveTaskClick = (todoListId: number, taskId: number): void => {
    setTodoLists(todoLists.map(todoList => todoList.todoListId === todoListId
      ? {...todoList, tasks: todoList.tasks.filter(task => task.taskId !== taskId)}
      : todoList))
  }

  const handleUpdateTasksTitleBlurOrKeyDown = (todoListId: number, taskId: number, title: string): void => {
    setTodoLists(todoLists.map(todoList => todoList.todoListId === todoListId
      ? {...todoList, tasks: todoList.tasks.map(task => task.taskId === taskId ? {...task, title} : task)}
      : todoList))
  }

  const handleToggleIsDoneChange = (todoListId: number, taskId: number, isDone: boolean): void => {
    setTodoLists(todoLists.map(todoList => todoList.todoListId === todoListId
      ? {...todoList, tasks: todoList.tasks.map(task => task.taskId === taskId ? {...task, isDone} : task)}
      : todoList))
  }

  const handleSelectFilterValueClick = (todoListId: number, filterValue: FilterValueType): void => {
    setTodoLists(todoLists.map(todoList => todoList.todoListId === todoListId
      ? {...todoList, filterValue: filterValue}
      : todoList))
  }

  return (
    <div>
      <TodoListFilter filter={filter} setFilter={setFilter}/>
      <AddItemForm handleAddItemClick={handleAddTodoListClick}/>
      <TodoListList
        todoLists={sortedAndSearchTodoLists}
        handleRemoveTodoListClick={handleRemoveTodoListClick}
        handleUpdateTodoListTitleBlurOrKeyDown={handleUpdateTodoListTitleBlurOrKeyDown}
        handleAddTaskClick={handleAddTaskClick}
        handleRemoveTaskClick={handleRemoveTaskClick}
        handleUpdateTasksTitleBlurOrKeyDown={handleUpdateTasksTitleBlurOrKeyDown}
        handleToggleIsDoneChange={handleToggleIsDoneChange}
        handleSelectFilterValueClick={handleSelectFilterValueClick}
      />
    </div>
  )
}
