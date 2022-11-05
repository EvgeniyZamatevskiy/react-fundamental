import { FilterType } from "types"

export type PostFilterPropsType = {
  filter: FilterType
  setFilter: (filter: FilterType) => void
}
