import { FilterValueType, TaskType } from "types"

export type TodoListPropsType = {
  todoListId: number
  title: string
  filterValue: FilterValueType
  tasks: TaskType[]
  handleRemoveTodoListClick: (todoListId: number) => void
  handleUpdateTodoListTitleBlurOrKeyDown: (todoListId: number, title: string) => void
  handleAddTaskClick: (todoListId: number, title: string) => void
  handleRemoveTaskClick: (todoListId: number, taskId: number) => void
  handleUpdateTasksTitleBlurOrKeyDown: (todoListId: number, taskId: number, title: string) => void
  handleToggleIsDoneChange: (todoListId: number, taskId: number, isDone: boolean) => void
  handleSelectFilterValueClick: (todoListId: number, filterValue: FilterValueType) => void
}
