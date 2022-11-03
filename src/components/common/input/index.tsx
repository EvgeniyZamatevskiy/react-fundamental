import { Key } from "enums"
import React, { ChangeEvent, KeyboardEvent, FC, forwardRef } from "react"
import { InputPropsType } from "./types"

export const Input: FC<InputPropsType> = forwardRef((
  {
    errorMessage,
    onChange,
    setValue,
    onKeyDown,
    onEnter,
    onEscape,
    ...restProps
  }, ref) => {

  const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange && onChange(event)

    setValue && setValue(event.currentTarget.value)
  }

  const onInputKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    onKeyDown && onKeyDown(event)

    onEnter && event.key === Key.ENTER && onEnter()
    onEscape && event.key === Key.ESCAPE && onEscape()
  }

  return (
    <label>
      <input
        type={"text"}
        onChange={onInputChange}
        onKeyDown={onInputKeyDown}
        ref={ref}
        {...restProps}
      />
      {errorMessage && <div>{errorMessage}</div>}
    </label>
  )
})
