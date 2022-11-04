export type FilterValueType = "All" | "Active" | "Completed"

export type TaskType = {
  taskId: number
  title: string
  isDone: boolean
}

export type TodoListType = {
  todoListId: number
  title: string
  filterValue: FilterValueType
  tasks: TaskType[]
  description: string
}