import React, { FC } from "react"
import { TaskFilterPropsType } from "./types"
import { Button } from "components"
import { FilterValueType } from "types"

const filterValues: FilterValueType[] = ["All", "Active", "Completed"]

export const TaskFilter: FC<TaskFilterPropsType> = ({secondHandleSelectFilterValueClick}) => {

  const filterValuesRender = filterValues.map(filterValue => {

    const thirdHandleSelectFilterValueClick = (): void => {
      secondHandleSelectFilterValueClick(filterValue)
    }

    return <Button key={filterValue} onClick={thirdHandleSelectFilterValueClick}>{filterValue}</Button>
  })

  return (
    <div>
      {filterValuesRender}
    </div>
  )
}
