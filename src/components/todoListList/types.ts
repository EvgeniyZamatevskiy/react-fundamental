import { FilterValueType, TodoListType } from "types"

export type TodoListListPropsType = {
  todoLists: TodoListType[]
  handleRemoveTodoListClick: (todoListId: number) => void
  handleUpdateTodoListTitleBlurOrKeyDown: (todoListId: number, title: string) => void
  handleAddTaskClick: (todoListId: number, title: string) => void
  handleRemoveTaskClick: (todoListId: number, taskId: number) => void
  handleUpdateTasksTitleBlurOrKeyDown: (todoListId: number, taskId: number, title: string) => void
  handleToggleIsDoneChange: (todoListId: number, taskId: number, isDone: boolean) => void
  handleSelectFilterValueClick: (todoListId: number, filterValue: FilterValueType) => void
}
