import React, { ChangeEvent, FC } from "react"
import { CheckboxPropsType } from "./types"

export const Checkbox: FC<CheckboxPropsType> = ({onChange, setChecked, children, ...restProps}) => {

  const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange && onChange(event)

    setChecked && setChecked(event.currentTarget.checked)
  }

  return (
    <label>
      <input type="checkbox" onChange={onCheckboxChange} {...restProps}/>
      {children && <span>{children}</span>}
    </label>
  )
}
