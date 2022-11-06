import { ChangeEvent } from "react"

export type PaginationPropsType = {
  totalItemsCount: number
  pageCount: number
  page: number
  handleSetPageClick: (page: number) => void
  onSelectPageCountChange?: (event: ChangeEvent<HTMLSelectElement>) => void
  isSelectPageCount?: boolean
  portionSize?: number
}
