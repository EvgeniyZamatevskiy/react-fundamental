import { Key } from "enums"
import React, { ChangeEvent, KeyboardEvent, FC, forwardRef } from "react"
import { InputPropsType } from "./types"
import classes from "./Input.module.css"
import { EMPTY_STRING } from "constants/base"

export const Input: FC<InputPropsType> = forwardRef((
  {
    errorMessage,
    onChange,
    setValue,
    onKeyDown,
    onEnter,
    onEscape,
    className,
    variant,
    additionalErrorMessageClassName,
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

  const inputClass = variant ? classes[variant] : classes.input
  const additionalInputClass = className ? className : EMPTY_STRING
  const errorInputClass = errorMessage ? classes.errorInput : EMPTY_STRING
  const inputClasses = `${inputClass} ${additionalInputClass} ${errorInputClass}`
  const errorMessageClass = classes.errorMessage
  const additionalErrorMessageClass = additionalErrorMessageClassName ? additionalErrorMessageClassName : EMPTY_STRING
  const errorMessageClasses = `${errorMessageClass} ${additionalErrorMessageClass}`

  return (
    <label>
      <input
        className={inputClasses}
        type={"text"}
        onChange={onInputChange}
        onKeyDown={onInputKeyDown}
        ref={ref}
        {...restProps}
      />
      {errorMessage && <div className={errorMessageClasses}>{errorMessage}</div>}
    </label>
  )
})
