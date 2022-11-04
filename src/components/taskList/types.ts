import { TaskType } from "types"

export type TaskListPropsType = {
  tasks: TaskType[]
  todoListId: number
  handleAddTaskClick: (todoListId: number, title: string) => void
  handleRemoveTaskClick: (todoListId: number, taskId: number) => void
  handleUpdateTasksTitleBlurOrKeyDown: (todoListId: number, taskId: number, title: string) => void
  handleToggleIsDoneChange: (todoListId: number, taskId: number, isDone: boolean) => void
}
