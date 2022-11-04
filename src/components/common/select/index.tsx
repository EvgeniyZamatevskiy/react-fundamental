import React, { FC, ChangeEvent } from "react"
import { SelectPropsType } from "./types"

export const Select: FC<SelectPropsType> = ({options, setValue, onChange, defaultValue, ...restProps}) => {

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setValue && setValue(Number(event.currentTarget.value))

    onChange && onChange(event)
  }

  const optionsRender = options.map(({id, name}) => <option key={id} value={id}>{name}</option>)

  return (
    <select onChange={onSelectChange} {...restProps}>
      {defaultValue && <option value={0} disabled>{defaultValue}</option>}
      {optionsRender}
    </select>
  )
}
