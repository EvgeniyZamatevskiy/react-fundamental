import React, { FC, KeyboardEvent, useEffect, useRef, useState } from "react"
import { EditableItemPropsType } from "./types"
import { Input } from "components"
import { Key } from "enums"

export const EditableItem: FC<EditableItemPropsType> = ({currentTitle, updateTitle}) => {

  const [isEditMode, setIsEditMode] = useState(false)
  const [updatedTitle, setUpdatedTitle] = useState("")

  const inputRef = useRef<HTMLInputElement>(null)

  const onSetCurrentTitleClick = (): void => {
    setIsEditMode(true)
    setUpdatedTitle(currentTitle)
  }

  const handleUpdateTitleBlurOrKeyDown = (): void => {
    setIsEditMode(false)

    const updatedTitleTrimmed = updatedTitle.replace(/\s+/g, " ").trim()

    if (currentTitle !== updatedTitleTrimmed) {
      updateTitle(updatedTitleTrimmed)
    }
  }

  const onUpdateTitleBlur = (): void => {
    handleUpdateTitleBlurOrKeyDown()
  }

  const onUpdateTitleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === Key.ENTER) {

      handleUpdateTitleBlurOrKeyDown()
      return
    }

    if (event.key === Key.ESCAPE) {
      setIsEditMode(false)
      return
    }
  }

  useEffect(() => {
    if (isEditMode) {
      inputRef.current?.select()
    }
  }, [isEditMode])

  return (
    <>
      {isEditMode
        ? <Input
          ref={inputRef}
          setValue={setUpdatedTitle}
          value={updatedTitle}
          onBlur={onUpdateTitleBlur}
          onKeyDown={onUpdateTitleKeyDown}
        />

        : <span onClick={onSetCurrentTitleClick}>
          {currentTitle}
        </span>}
    </>
  )
}
