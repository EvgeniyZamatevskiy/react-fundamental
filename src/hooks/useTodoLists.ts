import { useMemo } from "react"
import { useSortedTodoLists } from "./useSortedTodoLists"
import { FilterType, TodoListType } from "types"

export const useTodoLists = (todoLists: TodoListType[], filter: FilterType) => {

  const sortedTodoLists = useSortedTodoLists(todoLists, filter.sort)

  const sortedAndSearchTodoLists = useMemo(() => {
    return sortedTodoLists.filter(({title}) => title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedTodoLists])

  return sortedAndSearchTodoLists
}
