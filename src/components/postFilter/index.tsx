import React, { FC, ChangeEvent } from "react"
import { PostFilterPropsType } from "./types"
import { Input, Select } from "components"

const options = [
  {id: 1, name: "По названию"},
  {id: 2, name: "По описанию"},
]

export const PostFilter: FC<PostFilterPropsType> = ({filter, setFilter}) => {

  const onSearchQueryChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFilter({...filter, query: event.currentTarget.value})
  }

  const onSelectedSortIdChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setFilter({...filter, sort: Number(event.currentTarget.value)})
  }

  return (
    <div>
      <Input value={filter.query} onChange={onSearchQueryChange} placeholder={"Поиск..."}/>
      <Select
        defaultValue={"Сортировка"}
        options={options}
        value={filter.sort}
        onChange={onSelectedSortIdChange}
      />
    </div>
  )
}
