import React, { ChangeEvent, FC, useState } from "react"
import { AddItemFormPropsType } from "./types"
import { Input, Button } from "components"

export const AddItemForm: FC<AddItemFormPropsType> = ({handleAddItemClick}) => {

  const [title, setTitle] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.currentTarget.value)

    if (errorMessage) {
      setErrorMessage("")
    }
  }

  const onAddItemClickOrKeyDown = (): void => {
    const todoListTitleTrimmed = title.replace(/\s+/g, " ").trim()

    if (todoListTitleTrimmed) {
      handleAddItemClick(todoListTitleTrimmed)
      setTitle("")
    } else {
      setErrorMessage("Title is required!")
    }
  }

  return (
    <div>
      <Input value={title} onChange={onInputChange} errorMessage={errorMessage} onEnter={onAddItemClickOrKeyDown}/>
      <Button onClick={onAddItemClickOrKeyDown}>+</Button>
    </div>
  )
}
