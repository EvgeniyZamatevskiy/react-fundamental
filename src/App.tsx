import React, { FC, useState } from "react"
import { TodoLists } from "components"
import { FilterValueType, TaskType, TodoListType } from "types"
import "./App.css"

export const App: FC = () => {

  const [todoLists, setTodoLists] = useState<TodoListType[]>([
    {
      todoListId: 1, filterValue: "All", title: "my first todo",
      tasks: [
        {taskId: 1, title: "my first task", isDone: false}
      ]
    },
  ])
  
  const handleAddTodoListClick = (title: string): void => {
    const todoList: TodoListType = {todoListId: Date.now(), title, tasks: [], filterValue: "All"}
    setTodoLists([...todoLists, todoList])
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
      ? {...todoList, tasks: [...todoList.tasks, task]}
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
      <TodoLists
        todoLists={todoLists}
        handleAddTodoListClick={handleAddTodoListClick}
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
