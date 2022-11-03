import React, { FC } from "react"
import { FilteringPropsType } from "./types"
import { Button } from "components"

export const Filtering: FC<FilteringPropsType> = ({filterValue, selectFilterValue}) => {

  const onSelectFilterValueClick = (): void => {
    selectFilterValue(filterValue)
  }

  return <Button onClick={onSelectFilterValueClick}>{filterValue}</Button>
}
