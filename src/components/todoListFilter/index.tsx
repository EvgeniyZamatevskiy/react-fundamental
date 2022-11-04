import React, { FC, ChangeEvent } from "react"
import { TodoListFilterPropsType } from "./types"
import { Input, Select } from "components"

export const TodoListFilter: FC<TodoListFilterPropsType> = ({filter, setFilter}) => {

  const onSearchQueryChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFilter({...filter, query: event.currentTarget.value})
  }

  const onSelectedSortIdChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setFilter({...filter, sort: Number(event.currentTarget.value)})
  }

  return (
    <div>
      <Select
        defaultValue={"Сортировка"}
        options={[
          {id: 1, name: "По названию"},
          {id: 2, name: "По описанию"},
        ]}
        value={filter.sort}
        onChange={onSelectedSortIdChange}
      />
      <Input value={filter.query} onChange={onSearchQueryChange} placeholder={"Search..."}/>
    </div>
  )
}
