import React, { FC, ChangeEvent } from "react"
import { EMPTY_STRING } from "constants/base"
import { SelectPropsType } from "./types"
import classes from "./Select.module.css"

export const Select: FC<SelectPropsType> =
  ({
     options,
     setValue,
     onChange,
     defaultValue,
     variant,
     className,
     optionClassName,
     ...restProps
   }) => {

    const onSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
      setValue && setValue(Number(event.currentTarget.value))

      onChange && onChange(event)
    }

    const selectClass = variant ? classes[variant] : classes.select
    const additionalSelectClass = className ? className : EMPTY_STRING
    const selectClasses = `${selectClass} ${additionalSelectClass}`
    const optionClass = classes.option
    const additionalOptionClass = optionClassName ? optionClassName : EMPTY_STRING
    const optionClasses = `${optionClass} ${additionalOptionClass}`

    const optionsRender = options.map(option => {
      return <option className={optionClasses} key={option.value} value={option.value}>{option.name}</option>
    })

    return (
      <select className={selectClasses} onChange={onSelectChange} {...restProps}>
        {defaultValue && <option value={EMPTY_STRING} disabled>{defaultValue}</option>}
        {optionsRender}
      </select>
    )
  }
