import React, { FC, ChangeEvent } from "react"
import { PostFilterPropsType } from "./types"
import { Input, Select } from "components"
import classes from "./PostFilter.module.css"

const options = [
  {value: "title", name: "По названию"},
  {value: "body", name: "По описанию"},
]

export const PostFilter: FC<PostFilterPropsType> = ({filter, setFilter}) => {

  const onSearchQueryChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFilter({...filter, query: event.currentTarget.value})
  }

  const onSelectedSortIdChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setFilter({...filter, sort: event.currentTarget.value})
  }

  return (
    <div className={classes.postFilter}>
      <Input value={filter.query} onChange={onSearchQueryChange} placeholder={"Поиск..."}/>
      <div className={classes.select}>
        <Select
          defaultValue={"Сортировка"}
          options={options}
          value={filter.sort}
          onChange={onSelectedSortIdChange}
        />
      </div>
    </div>
  )
}
