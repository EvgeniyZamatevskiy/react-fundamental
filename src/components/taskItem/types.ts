export type TaskItemPropsType = {
  todoListId: number
  taskId: number
  title: string
  isDone: boolean
  handleRemoveTaskClick: (todoListId: number, taskId: number) => void
  handleUpdateTasksTitleBlurOrKeyDown: (todoListId: number, taskId: number, title: string) => void
  handleToggleIsDoneChange: (todoListId: number, taskId: number, isDone: boolean) => void
}
