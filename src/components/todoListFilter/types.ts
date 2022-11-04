export type TodoListFilterPropsType = {
  filter: { sort: number, query: string }
  setFilter: (filter: { sort: number, query: string }) => void
}
