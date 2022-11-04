import { useMemo } from "react"
import { TodoListType } from "types"

export const useSortedTodoLists = (todoLists: TodoListType[], sort: number) => {

  const sortedTodoLists = useMemo(() => {
    const sortValue: keyof TodoListType = sort === 1 ? "title" : "description"

    if (sort !== 0) {
      return [...todoLists].sort((a, b) => a[sortValue] > b[sortValue] ? 1 : -1)
    } else {
      return todoLists
    }
  }, [sort, todoLists])

  return sortedTodoLists
}

