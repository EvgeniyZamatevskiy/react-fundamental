import { FilterType } from "types"

export type TodoListFilterPropsType = {
  filter: FilterType
  setFilter: (filter: FilterType) => void
}
