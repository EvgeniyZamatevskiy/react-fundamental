import { FilterValueType } from "types"

export type FilteringPropsType = {
  filterValue: FilterValueType
  selectFilterValue: (filterValue: FilterValueType) => void
}
